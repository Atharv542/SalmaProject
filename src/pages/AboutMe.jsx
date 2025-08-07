import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRightLong, FaHeart, FaLightbulb, FaSeedling } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: <FaHeart className="text-2xl text-teal-600" />,
      text: "Offering empathy and presence in your journey"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-teal-600" />,
      text: "Helping you reconnect with your inner strength and self-worth"
    },
    {
      icon: <FaLightbulb className="text-2xl text-teal-600" />,
      text: "Guiding you to rewrite your narrative with power and purpose"
    },
    {
      icon: <FaSeedling className="text-2xl text-teal-600" />,
      text: "Creating space for clarity, growth, and emotional healing"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden" id="about" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Centered Heading */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-800 to-cyan-700 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mb-6 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Empowering you to discover your inner strength and create meaningful change
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-5 group-hover:opacity-20 transition duration-300"></div>
              <motion.img
                src="SalmaAboutMe.jpg"
                alt="Professional Coach"
                className="relative  rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] md:-mt-25 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed"
                variants={staggerItem}
              >
                Life can feel overwhelming when you're holding the weight of
                limiting beliefs, emotional pain, or the fear of not being enough.
                Whether you're navigating heartbreak, imposter syndrome, or life
                transitions — this space is for you.
              </motion.p>

              <motion.p 
                className="text-gray-700 text-lg leading-relaxed font-medium"
                variants={staggerItem}
              >
                My coaching isn't about giving advice or quick fixes — it's about:
              </motion.p>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-teal-100 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  >
                    <div className="flex-shrink-0 p-2 bg-teal-100 rounded-full">
                      {feature.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p 
                className="text-gray-700 text-lg leading-relaxed"
                variants={staggerItem}
              >
                If you're ready to take the next step toward healing and
                self-discovery, I'm here to walk beside you.
              </motion.p>
            </div>

            <motion.div 
              className="pt-6"
              variants={staggerItem}
            >
              <motion.button 
                onClick={() => navigate('/booking')}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative cursor-pointer z-10 flex items-center gap-3">
                  Connect Now
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <FaArrowRightLong className="text-lg" />
                  </motion.span>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
