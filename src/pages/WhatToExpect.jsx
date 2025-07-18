import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Sparkles, Heart, Compass, ArrowRight, Star } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "A safe, non-judgmental space to explore your truth",
    description:
      "Feel truly heard and supported in a space where you can open up without fear of judgment, pressure, or criticism.",
    color: "from-emerald-400 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200/50",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Gentle guidance and powerful questions that spark transformation",
    description:
      "Uncover deeper insights and personal breakthroughs through meaningful questions that gently challenge your perspective.",
    color: "from-violet-400 to-purple-500",
    bgColor: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200/50",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Deep listening, support, and tools for real, lasting change",
    description:
      "Experience coaching grounded in compassion and strategy—offering tools that create emotional clarity and sustainable growth.",
    color: "from-rose-400 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200/50",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Clarity, emotional healing, and renewed direction",
    description:
      "Find your inner compass, heal emotional wounds, and gain direction to move forward with confidence and intention.",
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200/50",
  },
];

const WhatToExpect = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const getVisibleFeatures = () => {
    return [
      features[startIndex % features.length],
      features[(startIndex + 1) % features.length],
    ];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex  items-center justify-center p-4 sm:p-6 lg:p-8 ">
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-full max-w-7xl mx-auto min-h-[500px] lg:min-h-[600px] 
          p-6 sm:p-8 lg:p-12 
          border border-gray-200/50 
          bg-white/90 backdrop-blur-sm 
          hover:border-teal-300/50 hover:bg-white/95
          rounded-3xl 
          flex flex-col lg:flex-row items-center justify-between 
          overflow-hidden 
          transition-all duration-500 ease-out 
          shadow-xl hover:shadow-2xl
          transform-gpu
          ${isHovered ? 'scale-[1.02]' : 'scale-100'}
        `}
      >
        {/* Background lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-100/30 to-emerald-100/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-violet-100/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-20 mb-8 lg:mb-0 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full border border-teal-200/50 shadow-sm">
              <Star className="w-4 h-4 text-teal-600 fill-current" />
              <span className="text-teal-700 text-sm font-semibold">Premium Coaching</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-teal-700 text-sm sm:text-base font-bold mb-2 tracking-wide uppercase"
          >
            Why I am the
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
          >
            Best Choice For Your{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Transition?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Experience transformative coaching that creates lasting change through compassionate guidance and proven strategies.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => navigate('/booking')}
            className="group cursor-pointer relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Connect with Salma</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 relative z-20 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={startIndex}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="min-h-[350px] flex flex-col gap-6 py-4"
            >
              {getVisibleFeatures().map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative p-6 bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-2xl border ${feature.borderColor} hover:border-teal-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-100/50 transform hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-teal-700 transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, idx) => (
              <div
                key={idx}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${idx === startIndex % features.length || idx === (startIndex + 1) % features.length
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 w-8 shadow-sm'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
