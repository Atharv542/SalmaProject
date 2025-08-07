import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Sparkles, Heart } from "lucide-react";

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  });

  const slideInLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  });

  const slideInRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  });

  return (
    <section 
      id="vision-mission" 
      ref={ref} 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-100/40 to-emerald-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-violet-100/40 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Heading */}
        <motion.div
          variants={fadeInUp(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full border border-teal-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700 text-sm font-semibold">Core Values</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Mission &</span>{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            What drives and defines my journey as a transformational life coach
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-sm" />
          </div>
        </motion.div>

        {/* Enhanced Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            variants={slideInLeft(0.3)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-teal-300/50 group-hover:bg-white/95 transform md:group-hover:scale-[1.02]">
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg md:group-hover:scale-110 md:group-hover:rotate-3 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                    My Mission
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-2" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                My mission is to guide men and women between the ages of 30 and 60 through the emotional layers of self-doubt, heartbreak, and limiting beliefs that often surface during life's major transitions. I create a safe, judgment-free space where clients can heal from past wounds, rewire unhelpful patterns, and reconnect with their true selves.
              </p>

              {/* Key Points */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>Mindset coaching & relationship tools</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span>Heart-centered guidance & emotional healing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  <span>Building confidence & meaningful connections</span>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-teal-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={slideInRight(0.5)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300/50 group-hover:bg-white/95 transform md:group-hover:scale-[1.02]">
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg md:group-hover:scale-110 md:group-hover:rotate-3 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    My Vision
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-2" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                My vision is to help men and women in their 30s to 60s heal emotionally, shift their mindset, and build conscious, fulfilling relationships—creating a ripple effect of peace, confidence, and connection in the world. I aim to empower individuals to reconnect with their inner strength and embrace emotional intelligence.
              </p>

              {/* Key Points */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Emotional healing & mindset transformation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-violet-500 rounded-full" />
                  <span>Conscious relationships & authentic living</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span>Creating ripple effects of positive change</span>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          variants={fadeInUp(0.7)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full border border-teal-200/50 shadow-sm">
            <Heart className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 font-semibold">Ready to transform your life?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;





