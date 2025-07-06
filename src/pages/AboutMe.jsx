import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 bg-[#e7f6f8]" id="about" ref={ref}>
      {/* Centered Heading */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-800 mb-5">About Me</h2>
        <div className="w-16 h-1 bg-teal-800 mb-6 mx-auto"></div>
      </motion.div>

      {/* Main content row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2"
        >
          <img
            src="SalmaAboutMe.jpg"
            alt="Coach"
            className="rounded-xl shadow-lg w-full h-[500px] object-fit"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full  md:w-1/2"
        >
          <p className="text-gray-700 text-lg mb-6 ">
            Life can feel overwhelming when you're holding the weight of
            limiting beliefs, emotional pain, or the fear of not being enough.
            Whether you're navigating heartbreak, imposter syndrome, or life
            transitions — this space is for you.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            My coaching isn't about giving advice or quick fixes — it's about:
          </p>

          <ul className="list-disc pl-5 text-gray-700 text-base space-y-3 mb-6">
            <li>Offering empathy and presence in your journey</li>
            <li>
              Helping you reconnect with your inner strength and self-worth
            </li>
            <li>
              Guiding you to rewrite your narrative with power and purpose
            </li>
            <li>Creating space for clarity, growth, and emotional healing</li>
          </ul>

          <p className="text-gray-700 text-lg mb-8">
            If you're ready to take the next step toward healing and
            self-discovery, I’m here to walk beside you.
          </p>
          <div className="mt-4">
             <button className="relative group px-6  py-3 bg-teal-700  text-white rounded-lg font-semibold  transition-all ease-out cursor-pointer duration-300 shadow-md hover:shadow-xl hover:pl-5 hover:bg-teal-800 hover:pr-12">
                        <span className="z-10">Connect Now</span>
                      
                        {/* Sliding arrow icon */}
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <FaArrowRightLong className="text-xl" />
            </span>
                      </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
