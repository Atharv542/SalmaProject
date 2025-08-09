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
          What Our <span className="text-green-700">Clients Say</span>
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

          {/* Keep all commented sections intact */}
          {/* Video Testimonial 3 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Video Testimonial 4 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Video Testimonial 5 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
          {/* Text Testimonial 1 */}
          {/*<SwiperSlide> ... </SwiperSlide>*/}
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

