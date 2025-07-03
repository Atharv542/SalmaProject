import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  const [buttonText, setButtonText] = useState("Start Your Journey Today");

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

  return (
    <section className="relative bg-teal-900 opacity-95 text-white min-h-screen flex items-center overflow-hidden">
    

      {/* 🔆 Radial Glow Behind Headline */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-teal-300 via-cyan-700 to-teal-700 rounded-full blur-3xl opacity-20 z-0" />

      {/* 🌟 Content */}
     <div className="relative mx-auto px-6 md:px-24 pt-4 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
     
        
        {/* ✅ Image Section */}
        <motion.div 
          className="flex justify-center md:order-last"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="Home.jpg"
            alt="Life Coaching" 
            className="rounded-lg shadow-2xl w-full h-48 md:h-auto sm:max-w-40 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>

        {/* ✅ Text Section with Your Content */}
        <motion.div 
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 🌟 Hero Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold italic leading-snug relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Heal. Let Go. Grow.
          </motion.h1>

          {/* Subheading */}
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            Guiding You Through Life’s Toughest Transitions
          </motion.h2>

          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            I support individuals both men and women who are feeling overwhelmed by self-doubt, heartbreak, or life’s uncertainties. Through personalized coaching and proven strategies, I help you regain confidence, develop emotional clarity, and reconnect with your inner strength—so you can move forward with purpose, resilience, and peace of mind.
          </p>

      
          <motion.p
            className="italic text-sm sm:text-base md:text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            "Healing Begins with Peace and Peace Begins with Salma"
          </motion.p>

          {/* ✅ CTA Button */}
          <button className="relative group px-6  py-3 bg-none border-2 border-white text-white rounded-full font-semibold  transition-all ease-out cursor-pointer duration-300 shadow-md hover:shadow-xl hover:pl-5 hover:bg-white hover:text-teal-600 hover:pr-12">
            <span className="z-10">{buttonText}</span>
          
            {/* Sliding arrow icon */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
  <FaArrowRightLong className="text-xl" />
</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;








