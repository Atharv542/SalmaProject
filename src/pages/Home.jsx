import { ArrowRight, Sparkles, Heart, Shield, Leaf } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
const navigate= useNavigate();
  const handleConnectNow = () => {
    navigate("/booking");
  };

  const handleBecomeGuest = () => {
    navigate("/podcast-booking");
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800 min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-red-200/30 via-red-100/20 to-gray-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-100/30 to-gray-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-gray-200/20 to-red-100/20 rounded-full blur-3xl" />

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-400/60 rounded-full animate-float" />
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-red-300/70 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-red-200/60 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-gray-400/50 rounded-full animate-float" />
      </div>

      {/* Overlay for subtle contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/60" />

      {/* Content */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-12 lg:py-20 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start lg:items-center">

          {/* Text Section */}
          <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">
            {/* Badge/Label Above Heading */}
            <div className="animate-slide-in-left flex items-center justify-center lg:justify-start gap-2 mb-2">
              <div className="px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 rounded-full border border-red-200 shadow-sm">
                <p className="text-[11px] sm:text-[10px] font-semibold text-red-600 tracking-wide uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mindset & Relationship Breakthrough Coach
                </p>
              </div>
            </div>

            {/* Main Heading - Enhanced with better spacing */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight">
                <span className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  YOU ARE STRONGER
                </span>
                <span className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  THAN YOUR STRUGGLES.
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse" />
                <p className="text-lg sm:text-xl lg:text-2xl font-light italic text-gray-700">
                  Your breakthrough begins within
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-5 animate-fade-in-delay">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At The Inner Bloom Journey, we guide you to let go, and evolve — from heartbreak, self-doubt, or limiting beliefs that hold you back.
              </p>

              <div className="space-y-3">
                <p className="text-base sm:text-lg font-medium text-gray-800">
                  As a Mindset & Relationship Breakthrough Coach, together we can:
                </p>
                <div className="space-y-2.5">
                  {[
                    "Reconnect with your self-worth",
                    "Rebuild your confidence",
                    "Transform pain into purpose"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                      <div className="p-1.5 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                        <Sparkles className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                This is your safe space to release the past, rise above your struggles, and step into the most authentic version of yourself — one filled with clarity, courage, and peace.
              </p>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-4 animate-fade-in-delay-2">
              {[
                { icon: Heart, label: "Healing", value: "Heart-Centered" },
                { icon: Shield, label: "Safe Space", value: "Confidential" },
                { icon: Leaf, label: "Growth", value: "Transformative" }
              ].map((item, index) => (
                <div key={index} className="group text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <item.icon className="w-6 h-6 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className=" text-[10px] md:text-xs font-semibold text-gray-800">{item.value}</p>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Bottom Tagline */}
            <div className="space-y-2 animate-fade-in-delay-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  LET GO. GROW. TRANSFORM. EVOLVE.
                </span>
              </h2>
              <p className="text-lg sm:text-xl font-light italic text-gray-700">
                Your healing begins here
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-fade-in-delay-4">
              {/* Connect Now - Primary CTA */}
              <button
                onClick={handleConnectNow}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative cursor-pointer z-10 flex items-center justify-center gap-3">
                  Connect Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-full blur-xl" />
              </button>

              {/* Become a Guest - Secondary CTA */}
              <button
                onClick={handleBecomeGuest}
                className="group relative px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg shadow-md hover:shadow-xl hover:border-red-300 hover:text-red-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 flex cursor-pointer items-center justify-center gap-3">
                  Become a Guest
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-right">
            <div className="relative group max-w-md lg:max-w-lg xl:max-w-xl w-full">
              {/* Animated rings around image */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute -inset-2 border-2 border-red-200/30 rounded-3xl animate-ping-slow" />
                <div className="absolute -inset-4 border border-red-300/20 rounded-3xl animate-pulse" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-red-300/40 via-orange-200/30 to-red-200/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 animate-pulse-slow" />

              {/* Main Image */}
              <div className="relative">
                <img
                  src="Main.jpg"
                  alt="Life Coaching - Inner Bloom Journey"
                  className="relative rounded-3xl w-full h-[350px] sm:h-[450px] lg:h-[520px] xl:h-[580px] object-cover shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 border-4 border-white"
                />

                {/* Image Overlay with gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-gray-900/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-fade-in-delay-4 hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Start</p>
                    <p className="text-xs text-gray-600 font-medium">Your Journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
