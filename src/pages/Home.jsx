import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong, FaHeart, FaSeedling } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const [buttonText, setButtonText] = useState("Start Your Journey Today");
  const navigate = useNavigate();

  useEffect(() => {
    const updateButtonText = () => {
      if (window.innerWidth <= 768) {
        setButtonText("Start Your Journey");
      } else {
        setButtonText("Start Your Journey Today");
      }
    };
    updateButtonText();
    window.addEventListener("resize", updateButtonText);
    return () => window.removeEventListener("resize", updateButtonText);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800 min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main radial glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-200/30 via-red-100/20 to-gray-200/30 rounded-full blur-3xl"
          animate={pulseAnimation}
        />
        {/* Secondary glows */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-100/30 to-gray-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-gray-200/20 to-red-100/20 rounded-full blur-3xl" />
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-300/50 rounded-full"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0 } }}
        />
        <motion.div
          className="absolute top-3/4 left-1/4 w-1 h-1 bg-red-200/70 rounded-full"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gray-300/60 rounded-full"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      {/* Overlay for subtle contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/60" />

      {/* Content */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-16 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Text Section */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-2xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold italic leading-tight relative md:-mt-10"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r  from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent ">Let Go.</span>{" "}
                <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent">Grow.</span>{" "}
                <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent">Transform</span>{" "}
                <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent">and Evolve</span>{" "}
                

                {/*<motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mx-auto lg:mx-0"
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                />*/}
              </motion.h1>
            </motion.div>

            {/* Subheading */}
            <motion.h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed" variants={itemVariants}>
              Guiding You Through Life's Toughest Transitions
            </motion.h2>

            {/* Description */}
            <motion.div className="space-y-4 -mt-5" variants={itemVariants}>
              <p className="text-base sm:text-lg lg:text-xl italic text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ready to let go of the pain, the doubts, and the beliefs that keep you stuck?

              </p>
              <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 md:-mt-2">
                The Inner Bloom Journey is your space to heal from heartbreak, divorce, or separation to release the weight of limiting beliefs and to rebuild your self-worth from the inside out. Here, you’ll find the clarity, confidence, and inner strength you need to create a life you love one that reflects who you truly are and the future you deserve.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div className="grid grid-cols-1 text-center sm:grid-cols-3 gap-4 -mt-10 py-6" variants={itemVariants}>
              {[
                { icon: FaHeart, text: "Heal After Divorce or Separation" },
                { icon: FaShieldAlt, text: "Inner Strength" },
                { icon: FaSeedling, text: "Personal Growth" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white/80 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className="text-2xl text-red-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div  variants={itemVariants} className="-mt-7">
              <motion.button
                onClick={() => navigate("/booking")}
                className="group  relative cursor-pointer px-8 py-4 bg-transparent border-2 border-red-400 text-red-500 rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  {buttonText}
                  <motion.span className="group-hover:translate-x-1 transition-transform duration-300" whileHover={{ x: 5 }}>
                    <FaArrowRightLong className="text-lg" />
                  </motion.span>
                </span>
                {/* Hover background */}
                <div className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="flex justify-center lg:justify-end order-1 lg:order-2" variants={imageVariants} initial="hidden" animate="visible">
            <div className="relative group max-w-md lg:max-w-lg xl:max-w-xl -mt-12 md:-mt-18">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-300/30 to-gray-300/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <motion.img
                src="Main.jpg"
                alt="Life Coaching - Healing and Growth"
                className="relative rounded-2xl mt-10 md:-mt-5 w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] object-cover shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              />
              {/*<div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent rounded-2xl"></div>*/}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
