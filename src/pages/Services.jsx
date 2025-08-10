import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const supportAreas = [
  {
    icon: "💡",
    title: "Break Free from Limiting Beliefs",
    desc: "Move beyond the thoughts that keep you stuck.",
  },
  {
    icon: "🌱",
    title: "Rebuild Self-Worth",
    desc: "Rediscover your value after heartbreak or personal loss.",
  },
  {
    icon: "🚀",
    title: "Overcome Imposter Syndrome",
    desc: "Step into your confidence and own your success story.",
  },
  {
    icon: "❤️",
    title: "Heal After Divorce or Separation",
    desc: "Release the pain and begin your journey of emotional healing.",
  },
  {
    icon: "🔑",
    title: "Empower Your Beliefs",
    desc: "Transform your mindset around love, life, and your own worth.",
  },
];

function AreasOfSupportWithCircle() {
  return (
    <section className="relative py-24 bg-gray-100/70 px-6">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-red-400 mb-10">Transformational Guidance</h2>

        {/* Desktop Circular Layout */}
        <div className="relative group w-[500px] h-[500px] mx-auto hidden lg:block">
          <img
            src="https://i.pinimg.com/originals/43/9a/fe/439afeaaef35fe16887016faa2bb1eb5.png"
            alt="Helping Hands"
            className="absolute top-[65%] left-[53%] w-[250px] opacity-80 group-hover:opacity-95 -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <SupportCard area={supportAreas[0]} style="top-0 left-1/2 -translate-x-1/2" />
          <SupportCard area={supportAreas[1]} style="top-[20%] left-[100%] -translate-x-1/2" />
          <SupportCard area={supportAreas[2]} style="bottom-0 left-[100%] -translate-x-1/2" />
          <SupportCard area={supportAreas[3]} style="bottom-0 left-[5%] -translate-x-1/2" />
          <SupportCard area={supportAreas[4]} style="top-[20%] left-[5%] -translate-x-1/2" />
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden space-y-6 mt-10">
          {supportAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-5 border border-red-100 hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-3">{area.icon}</div>
              <h3 className="text-lg font-semibold text-red-700 mb-1">{area.title}</h3>
              <p className="text-gray-600 text-sm">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
  <button
  onClick={() => {
    const aboutSection = document.getElementById("aboutme");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="relative group px-7 animate-bounce mt-10 py-4 bg-white mx-auto border border-red-400 text-red-700 rounded-full font-medium inline-flex items-center justify-center transition-all cursor-pointer duration-500 shadow-md hover:shadow-xl hover:pl-5 hover:bg-red-600 hover:text-white hover:pr-12"
>
  <span className="z-10">Get To Know Me More!</span>
  <span className="absolute right-4 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
    <FaArrowDownLong className="text-xl" />
  </span>
</button>
      </div>
    </section>
  );
}

function SupportCard({ area, style }) {
  return (
    <div
      className={`absolute ${style} bg-white rounded-full shadow-lg p-4 w-48 border border-red-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="text-2xl mb-2 ">{area.icon}</div>
      <h3 className="text-md font-semibold text-black mb-1">{area.title}</h3>
      <p className="text-gray-600 text-sm">{area.desc}</p>
    </div>
  );
}

export default AreasOfSupportWithCircle;




