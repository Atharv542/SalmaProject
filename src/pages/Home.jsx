import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong, FaHeart, FaSeedling } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa"; // ✅ Fix for error
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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main radial glow */}
        <motion.div 
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-teal-300/30 via-cyan-400/20 to-teal-500/30 rounded-full blur-3xl"
          animate={pulseAnimation}
        />
        
        {/* Secondary glows */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-teal-300/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-teal-400/15 to-cyan-300/15 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0 } }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-300/60 rounded-full"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-300/50 rounded-full"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-transparent to-teal-900/60" />

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
            {/* Hero Heading */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold italic leading-tight relative md:-mt-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                  Heal.
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-white to-teal-200 bg-clip-text text-transparent">
                  Let Go.
                </span>{" "}
                <span className="bg-gradient-to-r from-teal-100 via-cyan-100 to-white bg-clip-text text-transparent">
                  Grow.
                </span>
                
                {/* Decorative underline */}
                <motion.div 
                  className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mx-auto lg:mx-0"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.h1>
            </motion.div>

            {/* Subheading */}
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-cyan-100 font-medium leading-relaxed"
              variants={itemVariants}
            >
              Guiding You Through Life's Toughest Transitions
            </motion.h2>

            {/* Description */}
            <motion.div 
              className="space-y-4 -mt-5"
              variants={itemVariants}
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Struggling with separation, heartbreak, or wounds rooted in past relationships? 
                Feeling weighed down by self-doubt, limiting beliefs, or the pain of divorce?
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                You're not alone. This is a safe space to release what's holding you back, 
                rebuild your confidence, and reconnect with your inner strength.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-10 py-6"
              variants={itemVariants}
            >
              {[
                { icon: FaHeart, text: "Emotional Healing" },
                { icon: FaShieldAlt, text: "Inner Strength" },
                { icon: FaSeedling, text: "Personal Growth" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="text-2xl text-cyan-300 mb-2" />
                  <span className="text-sm font-medium text-white/90">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div 
              className="relative py-6"
              variants={itemVariants}
            >
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="-mt-25"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => navigate('/booking')}
                className="group relative px-8 py-4 bg-transparent border-2 border-white text-white  rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3 group-hover:text-teal-800 transition-colors duration-300">
                  {buttonText}
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <FaArrowRightLong className="text-lg" />
                  </motion.span>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group max-w-md lg:max-w-lg xl:max-w-xl -mt-12">
              {/* Image glow effect */}
              <div className="absolute -inset-4  bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <motion.img 
                src="Home.jpg"
                alt="Life Coaching - Healing and Growth" 
                className="relative rounded-2xl mt-10 md:-mt-5 w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] object-cover shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent rounded-2xl"></div>
              
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;