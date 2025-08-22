import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CertificateSection = () => {
  const achievements = [
    "Internationally Recognized Certification",
    "Evidence-Based Coaching Methodologies", 
    "Ethical Practice Standards",
    "Continuous Professional Development"
  ];

  const stats = [
    { icon: Award, value: "100%", label: "Trusted" },
    { icon: Star, value: "Fresh", label: "Perspective" },
    { icon: Users, value: "Ready", label: "To Help You" }
  ];

  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl  md:text-5xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent mb-4 leading-[1.5]">
          My Certification
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto">
          Accredited Life Coach Certification – Empowering Growth & Transformation
        </p>
      </motion.div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Certificate Image - Mobile */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group w-full max-w-sm">
            <motion.div 
              className="bg-white rounded-2xl p-4 -mt-10 shadow-2xl border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="certificate.jpg"
                  alt="Life Coach Certificate"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
              </div>
              
              <div className="mt-4 text-center">
                <h4 className="text-gray-800 font-bold text-lg">Professional Life Coach Certification</h4>
                <p className="text-gray-500 text-sm mt-1">International Coach Federation</p>
              </div>
            </motion.div>

            {/* Verification Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Verified</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid - Mobile */}
        <motion.div 
          className="grid grid-cols-3 gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
           <motion.div 
          className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center w-66 justify-between">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="text-center h-20 group flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className=" text-red-500 mx-auto  mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
                {index < stats.length - 1 && (
                  <div className="w-px h-12 bg-gray-200 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Left Side - Desktop Content */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Title with Icon */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              Certified Life Coach
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-gray-600 leading-relaxed text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I am a certified Life Coach, trained to help individuals unlock 
            their true potential, overcome challenges, and create a fulfilling 
            life. This certification validates my skills, dedication, and 
            passion for guiding others on their journey of growth and 
            transformation.
          </motion.p>

          {/* Stats Grid - Desktop */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md text-center group hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-6 h-6 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements List */}
          <div className="space-y-4 mb-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
                <p className="text-gray-700 font-medium leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 cursor-pointer hover:scale-105 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
            onClick={() => { navigate('/booking') }}
          >
            Book Your Transformation Session
          </motion.button>
        </motion.div>

        {/* Right Side - Certificate Image Desktop */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end max-w-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative group w-full">
            {/* Certificate Container */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Certificate Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="certificate.jpg"
                  alt="Life Coach Certificate"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
              </div>
              
              {/* Certificate Label */}
              <div className="mt-6 text-center">
                <h4 className="text-gray-800 font-bold text-lg">Professional Life Coach Certification</h4>
                <p className="text-gray-500 text-sm mt-1">International Coach Federation</p>
              </div>
            </motion.div>

            {/* Verification Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Verified</span>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 rounded-full opacity-60"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/4 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-70"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/3 -left-2 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;