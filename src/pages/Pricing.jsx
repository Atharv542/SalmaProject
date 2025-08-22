import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Zap, ArrowRight } from 'lucide-react';

const PricingCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('12-week');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const programs = {
    '6-week': {
      title: '6 Week Program',
      price: '$1,200',
      sessions: '6 Sessions',
      popular: false
    },
    '12-week': {
      title: '12 Week Program',
      price: '$2,200',
      sessions: '12 Sessions',
      popular: true
    }
  };

  const included = [
    'Weekly 60-min Zoom sessions',
    'Custom worksheets',
    'Follow-up support',
    'Accountability tracking'
  ];

  const outcomes = [
    'Build clarity & confidence',
    'Overcome challenges with accountability',
    'Achieve your personal/professional goals'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-25 to-red-50 flex items-center justify-center p-4">
      <div className={`max-w-2xl w-full transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-200 overflow-hidden hover:shadow-3xl transition-all duration-500">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white text-center py-6">
            <h2 className="text-3xl font-bold mb-2">Coaching Program</h2>
            <p className="text-lg opacity-95">Transform Your Journey</p>
          </div>

          <div className="p-8 space-y-8">
            
            {/* Program Selection */}
            <div className={`transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                Choose Your Program
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(programs).map(([key, program]) => (
                  <div
                    key={key}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedProgram === key
                        ? 'border-rose-500 bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-rose-300'
                    }`}
                    onClick={() => setSelectedProgram(key)}
                  >
                    {program.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{program.title}</h4>
                      <div className="text-3xl font-bold text-rose-600 mb-1">{program.price}</div>
                      <p className="text-sm text-gray-600">{program.sessions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Details */}
            <div className={`transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  Session Format
                </h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Weekly 60-min Zoom Sessions</div>
                  <p className="text-gray-700">One-on-one personalized coaching calls</p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className={`transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
              <div className="grid grid-cols-2 gap-3">
                {included.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105"
                  >
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className={`transform transition-all duration-700 delay-900 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Outcomes</h3>
              <div className="space-y-3">
                {outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <CheckCircle className="text-rose-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`text-center transform transition-all duration-700 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative w-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transform transition-all duration-300 group-hover:shadow-2xl flex items-center justify-center gap-3">
                  <span>Schedule Your Complimentary Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mt-3">
                Selected: <span className="font-semibold text-rose-600">{programs[selectedProgram].title}</span> - {programs[selectedProgram].price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
