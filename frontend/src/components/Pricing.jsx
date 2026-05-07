import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-scroll';

const plans = [
  {
    name: 'Basic',
    price: '1500',
    features: [
      'Access to Gym Equipment',
      'Locker Room Access',
      'Free Wi-Fi',
      '1 Group Class / Week'
    ],
    recommended: false
  },
  {
    name: 'Standard',
    price: '2500',
    features: [
      'Everything in Basic',
      'Unlimited Group Classes',
      'Free Diet Consultation',
      'Access to Pool & Sauna'
    ],
    recommended: true
  },
  {
    name: 'Premium',
    price: '4000',
    features: [
      'Everything in Standard',
      'Personal Trainer (2x/Week)',
      'Free Massage Therapy',
      'Exclusive VIP Lounge'
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">Pricing Plans</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6">
            CHOOSE YOUR <span className="text-gradient">MEMBERSHIP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                y: plan.recommended ? -20 : -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 border ${
                plan.recommended 
                  ? 'bg-zinc-950 border-red-600 shadow-2xl shadow-red-900/40 md:-translate-y-4' 
                  : 'bg-zinc-950/50 border-zinc-800 hover:border-red-600/50 shadow-xl'
              } transition-all duration-300 z-10 hover:z-20`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold font-oswald text-white uppercase mb-4">{plan.name}</h4>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-red-500 font-bold text-2xl">₹</span>
                  <span className="text-5xl font-bold font-oswald text-white">{plan.price}</span>
                  <span className="text-gray-400">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.recommended ? 'text-red-500' : 'text-gray-400'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-4 uppercase tracking-wider font-bold transition-colors cursor-pointer text-center block ${
                  plan.recommended 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-zinc-800 hover:bg-white hover:text-zinc-950 text-white'
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
