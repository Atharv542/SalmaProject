import { useState } from "react";
import { ChevronDown, HelpCircle, Heart, Brain, Sparkles, Target, Lightbulb } from "lucide-react";

const faqs = [
  {
    question: "What is coaching, and how can it help me?",
    icon: <Lightbulb className="w-6 h-6" />,
    answer: (
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
          <p className="text-gray-700">A guided process to gain clarity and confidence in your life journey</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"></div>
          <p className="text-gray-700">Helps you create actionable strategies to achieve personal or professional goals</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-rose-500 rounded-full"></div>
          <p className="text-gray-700">Empowers you to overcome obstacles and unlock your full potential</p>
        </div>
      </div>
    ),
  },
  {
    question: "Who is a life coach?",
    icon: <Heart className="w-6 h-6" />,
    answer: (
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
          <p className="text-gray-700">A life coach is a trained professional who helps people bridge the gap between where they are now and where they want to be in life.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"></div>
          <p className="text-gray-700">Unlike therapy, which often focuses on healing past wounds, life coaching is future-oriented and centered on personal growth, mindset shifts, and goal achievement.</p>
        </div>
        
      </div>
    ),
  },
  {
    question: "What is the difference between coaching and therapy?",
    icon: <Brain className="w-6 h-6" />,
    answer: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-800">Therapy</h4>
          </div>
          <p className="text-blue-700">Focuses on healing the past, processing trauma, and addressing mental health concerns</p>
        </div>
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border-l-4 border-rose-400">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <h4 className="font-semibold text-rose-800">Coaching</h4>
          </div>
          <p className="text-rose-700">Focuses on creating the future with clear goals, actionable strategies, and measurable progress</p>
        </div>
      </div>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-500 to-red-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-red-400 to-rose-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-6 shadow-2xl">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-6xl leading-[1.5] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-500 drop-shadow-sm mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Get answers to common questions about your transformation journey.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group faq-item bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border transition-all duration-500 overflow-hidden transform hover:scale-[1.02] hover:-translate-y-1 ${
                openIndex === index
                  ? "border-pink-300 shadow-2xl ring-4 ring-pink-100"
                  : "border-rose-100 hover:border-pink-200 hover:shadow-2xl"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question w-full px-4 py-3 md:px-8 md:py-6 text-left flex items-center justify-between cursor-pointer transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-rose-50 group-hover:to-pink-50"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg"
                        : "bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 group-hover:from-rose-200 group-hover:to-pink-200"
                    }`}
                  >
                    {faq.icon}
                  </div>
                  <span className="text-md md:text-xl font-bold text-rose-700 group-hover:text-pink-700 pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-center w-5 h-5 md:w-10 md:h-10 rounded-xl transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-br from-pink-500 to-rose-600 shadow-lg"
                      : "bg-gradient-to-br from-rose-100 to-pink-100 group-hover:from-rose-200 group-hover:to-pink-200"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-white"
                        : "rotate-0 text-rose-600 group-hover:text-pink-600"
                    }`}
                  />
                </div>
              </button>
              <div
                className={`faq-answer transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 bg-gradient-to-r from-rose-50 to-pink-50">
                  <div className="pt-2 border-t border-rose-100">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-rose-600 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Still have questions? We're here to help!</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
