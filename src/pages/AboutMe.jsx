import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Shield, Sparkles, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const navigate=useNavigate()
  const features = [
    {
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      text: "Creating a safe space where you can explore your emotions without judgment"
    },
    {
      icon: <Shield className="w-5 h-5 text-rose-600" />,
      text: "Building resilience and emotional tools that serve you for life"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-rose-600" />,
      text: "Uncovering your authentic self beneath layers of conditioning and fear"
    },
    {
      icon: <Users className="w-5 h-5 text-rose-600" />,
      text: "Fostering genuine connection — with yourself and others"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleConnectClick = () => {
    // Replace with your navigation logic
    navigate('/booking');
  };

  return (
    <section 
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-rose-50/30 overflow-hidden" 
      id="about" 
      ref={ref}
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-200/25 to-slate-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-slate-300/20 to-rose-200/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-rose-100/30 to-slate-200/30 rounded-full blur-2xl"></div>
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-700 via-gray-800 to-rose-700 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-rose-600 mb-8 mx-auto rounded-full shadow-sm"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Empowering you to discover your inner strength and create meaningful change
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">

              <motion.img
                src="SalmaAboutMe.jpg"
                alt="Professional Life Coach"
                className="relative rounded-2xl shadow-2xl w-full h-[450px] sm:h-[550px] lg:h-[650px] object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              />
              
          
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-slate-700 text-lg leading-relaxed font-light"
                variants={staggerItem}
              >
                Life can feel overwhelming when you're holding the weight of
                limiting beliefs, emotional pain, or the fear of not being enough.
                Whether you're navigating heartbreak, imposter syndrome, or life
                transitions — this space is for you.
              </motion.p>

              <motion.p 
                className="text-slate-800 text-xl leading-relaxed font-semibold"
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
                    className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl border border-rose-100/50 hover:bg-white/95 hover:border-rose-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                  > 
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      {feature.icon}
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg font-medium">{feature.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p 
                className="text-slate-700 text-lg leading-relaxed font-light pt-2"
                variants={staggerItem}
              >
                If you're ready to take the next step toward healing and
                self-discovery, I'm here to walk beside you.
              </motion.p>
            </div>

            <motion.div 
              className="pt-8"
              variants={staggerItem}
            >
              <motion.button 
                onClick={handleConnectClick}
                className="  px-10 py-5 cursor-pointer bg-red-600 text-white rounded-2xl font-bold text-lg hover:scale-105 "
                
              >
                <span className="  flex items-center gap-3">
                  Connect Now
                  <motion.span
                    className=" transition-transform duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                
             
                
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;