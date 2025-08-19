import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // If width is less than 768px, it's mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-white relative"> {/* Changed to greenish background */}
      <div className="text-center mb-12 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our <span className="text-red-600">Clients Say</span>
        </h2>
        <p className="text-md md:text-xl text-gray-500 max-w-3xl mx-auto mb-10"> {/* Added mb-10 for spacing */}
          Discover how I've helped individuals transform and achieve their goals
          through innovative solutions and dedicated service.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={isMobile ? false : true}
          pagination={{ clickable: !isMobile }} // Disable pagination dots on mobile
          loop={true}
          autoplay={isMobile ? false : { delay: 2000 }} // Disable autoplay on mobile
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full relative"
        >
          {/* Video Testimonial 1 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center  h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full  max-w-lg">
                <video
                  className="w-full max-h-100 rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/Testimonial1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>

          {/* Video Testimonial 2 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg">
                <video
                  className="w-full max-h-100 rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/Testimonial2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>

          {/* Video Testimonial 2 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg">
                <video
                  className="w-full max-h-100 rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/Testimonial3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>

          {/* Keep all commented sections intact */}
          {/* Video Testimonial 3 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Video Testimonial 4 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Video Testimonial 5 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Text Testimonial 1 */}
           <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                {/* User Photo */}
                <div className="flex flex-col items-center justify-center  gap-2 mb-1">
                  <img
                    src="/George.png" // Update with actual image path
                    alt="Ola Dayoub"
                    className="w-18 h-18 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-red-500">
                      George Gengler
                    </h3>
                    <p className="text-sm text-gray-500">
                      {" "}
                       Wisconsin, USA
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-base md:text-md text-gray-700 leading-relaxed">
                  "After just three sessions with Salma,I have to say my relationship with my two daughters has been reshaped.Salma was present,asked great questions and made me feel safe to open about my fear as a father.I now have some tools to use in my father daughter&relationship which gives me more insight into how I can be more present for them as they leave the nest.If you neeed support in life or relationship transitions, I highly suggest Salma."
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Text Testimonial 2 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Text Testimonial 3 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Text Testimonial 4 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

