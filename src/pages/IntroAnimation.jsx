import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => setIsMobile(window.innerWidth < 768); // adjust breakpoint if needed
  checkScreen(); // run on mount
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

  // Flower petal animation variants
  const petalVariants = {
    hidden: { 
      scale: 0, 
      rotate: 0, 
      opacity: 0,
      transformOrigin: "bottom center"
    },
    visible: (i) => ({
      scale: 1,
      rotate: i * 45,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Center bloom animation
  const centerBloomVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Floating particles
  const particleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: [0, 1, 0],
      y: [20, -50, -100],
      x: [0, Math.sin(i) * 30, Math.sin(i) * 60],
      transition: {
        delay: 2 + i * 0.2,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.5,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Sparkle animation
  const sparkleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        delay: 3 + i * 0.3,
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    })
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background floating elements */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-rose-300/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  delay: Math.random() * 2,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main flower container */}
          <div className="relative flex flex-col items-center">
            {/* Flower bloom animation */}
           <motion.div
  className="relative mb-8"
  initial={{ y: 0 }}
  animate={{ x: isMobile ? -90 : 160,y:isMobile ? -110 :-20, scale: 0.9, opacity: 0.8 }}
  transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
>
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="absolute inset-0"
              >
                {/* Flower petals */}
                {[...Array(8)].map((_, i) => (
                  <motion.ellipse
                    key={i}
                    cx="100"
                    cy="60"
                    rx="15"
                    ry="35"
                    fill="url(#petalGradient)"
                    style={{ transformOrigin: "100px 100px" }}
                    variants={petalVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  />
                ))}
                
                {/* Center bloom */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="25"
                  fill="url(#centerGradient)"
                  variants={centerBloomVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* Sparkles around flower */}
                {[...Array(6)].map((_, i) => (
                  <motion.circle
                    key={`sparkle-${i}`}
                    cx={100 + Math.cos(i * 60 * Math.PI / 180) * 60}
                    cy={100 + Math.sin(i * 60 * Math.PI / 180) * 60}
                    r="3"
                    fill="#fbbf24"
                    variants={sparkleVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  />
                ))}

                {/* Gradients */}
                <defs>
                  <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="70%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#be123c" />
                  </radialGradient>
                  <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1.5 h-1.5 bg-rose-400 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                  }}
                  variants={particleVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
              ))}
            </motion.div>

            {/* Animated text */}
            <motion.div
              className="text-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent mb-2">
                The InnerBloom
              </h1>
              <motion.p
                className="text-lg md:text-xl text-rose-500 italic font-light tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                Let Go, Grow, Tranform and Evolve
              </motion.p>
              
              {/* Loading dots */}
              <motion.div
                className="flex justify-center space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-rose-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      delay: i * 0.2,
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Expanding rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-rose-300/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 2.5, 4],
                opacity: [0.6, 0.3, 0]
              }}
              transition={{
                delay: 2,
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pink-300/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 2.5, 4],
                opacity: [0.4, 0.2, 0]
              }}
              transition={{
                delay: 2.5,
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;