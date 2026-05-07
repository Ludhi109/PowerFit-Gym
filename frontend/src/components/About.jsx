import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-scroll';

const About = () => {
  const features = [
    'State-of-the-art Equipment',
    'Expert Personal Trainers',
    'Open 24/7 for Members',
    'Customized Diet Plans',
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 p-2 bg-zinc-900 border border-zinc-800 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Red Accent Box */}
            <div className="absolute top-10 -right-5 w-full h-full border-4 border-red-600 -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6 leading-tight">
              MORE THAN JUST A <span className="text-gradient">GYM</span>. A LIFESTYLE.
            </h2>
            
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              At PowerFit Gym, we believe that fitness is a journey, not a destination. Our mission is to empower individuals to achieve their ultimate physical and mental well-being through innovative training programs and a supportive community.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              We provide a high-energy environment, cutting-edge equipment, and expert guidance to help you smash your goals. Whether you are a beginner or a seasoned athlete, PowerFit is your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-600 w-6 h-6" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-10 inline-block bg-white text-zinc-950 hover:bg-red-600 hover:text-white font-bold py-3 px-8 uppercase tracking-wider transition-colors duration-300 cursor-pointer"
            >
              Learn More
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
