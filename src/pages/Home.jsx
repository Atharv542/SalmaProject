import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Home() {
  const [buttonText, setButtonText] = useState("Start Your Journey Today");
  const navigate= useNavigate();
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
            className="rounded-lg  w-full h-[300px] object-fit md:h-[600px] "
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
           Struggling with separation, heartbreak, or wounds rooted in past relationships?<br/> Feeling weighed down by self-doubt, limiting beliefs, or the pain of divorce? You’re not alone. This is a safe space to release what’s holding you back, rebuild your confidence, and reconnect with your inner strength. Healing is possible—and you don’t have to do it alone.
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
          <button onClick={
            ()=>{
              navigate('/booking')
            }
          } className="relative group px-6  py-3 bg-none border-2 border-white text-white rounded-full mt-8 font-semibold  transition-all ease-out cursor-pointer duration-300 shadow-md hover:shadow-xl hover:pl-5 hover:bg-white hover:text-teal-600 hover:pr-12">
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








