import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus('Normal Weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setStatus('Overweight');
      else setStatus('Obesity');
    }
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 transform origin-top hidden lg:block"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">Know Your Body</h3>
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6">
              CALCULATE YOUR <span className="text-gradient">BMI</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Check your fitness level to determine your ideal workout plan.
            </p>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full">
                  <input 
                    type="number" 
                    placeholder="Height / cm" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                    required
                  />
                </div>
                <div className="w-full">
                  <input 
                    type="number" 
                    placeholder="Weight / kg" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 w-full sm:w-auto uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2">
                <Calculator size={20} /> Calculate Now
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-12">
              <h4 className="text-2xl font-bold font-oswald text-white uppercase mb-8 border-b border-zinc-800 pb-4">BMI Chart</h4>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between pb-2 border-b border-zinc-800/50"><span>Below 18.5</span> <span className="text-blue-400">Underweight</span></li>
                <li className="flex justify-between pb-2 border-b border-zinc-800/50"><span>18.5 - 24.9</span> <span className="text-green-500">Normal Weight</span></li>
                <li className="flex justify-between pb-2 border-b border-zinc-800/50"><span>25.0 - 29.9</span> <span className="text-yellow-500">Overweight</span></li>
                <li className="flex justify-between"><span>30.0 and Above</span> <span className="text-red-500">Obese</span></li>
              </ul>

              {bmi && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-6 bg-zinc-950 border border-red-600/30 text-center"
                >
                  <p className="text-gray-400 mb-2 uppercase tracking-widest text-sm">Your BMI Is</p>
                  <div className="text-5xl font-bold font-oswald text-white mb-2">{bmi}</div>
                  <div className="text-red-500 font-medium uppercase tracking-wider">{status}</div>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
