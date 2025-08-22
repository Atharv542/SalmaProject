import React from 'react';
import { Clock, Star, Calendar, BookOpen, Target, Users } from 'lucide-react';

const PricingCard = () => {
  const pricingPlans = [
    {
      duration: '6 Weeks',
      price: 'Starting at $299',
      sessions: 'Weekly 60-min Zoom',
      popular: false,
      features: [
        '✨ Custom worksheets tailored to your goals',
        '🎯 Weekly accountability & progress tracking',
        '💬 Dedicated follow-up support',
        '🚀 Results-driven methodology'
      ]
    },
    {
      duration: '12 Weeks',
      price: 'Starting at $549',
      sessions: 'Weekly 60-min Zoom',
      popular: true,
      features: [
        '⭐ Everything in 6-week program',
        '📈 Extended accountability & mentoring',
        '🎨 Advanced personalized worksheets',
        '⚡ Priority support & faster responses',
        '💯 Success guarantee or money back'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Life Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect program duration for your journey to success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-rose-400 ring-4 ring-rose-100' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 md:px-6 md:py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.duration}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{plan.sessions}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center ">
                    
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                <Clock className="w-5 h-5" />
                {plan.duration} Program
              </div>
            </div>
          ))}
        </div>

        {/* Program Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-rose-400">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">Personalized goal-setting framework</span>
                </div>
               
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">Custom worksheets and exercises</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">One-on-one mentoring sessions</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Format</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Weekly Sessions</p>
                    <p className="text-sm text-gray-600">60-minute focused coaching calls</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Flexible Scheduling</p>
                    <p className="text-sm text-gray-600">Sessions scheduled around your availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;