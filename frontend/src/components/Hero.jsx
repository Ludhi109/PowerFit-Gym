import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left mt-32 md:mt-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-red-600 font-oswald text-xl md:text-2xl font-semibold mb-4 tracking-widest"
          >
            BECOME YOUR STRONGEST SELF
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-oswald text-white leading-[1.1] mb-8"
          >
            TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">BODY</span><br />
            <div className="mt-2 md:mt-4">
              TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">LIFE</span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl"
          >
            Join PowerFit Gym today and experience world-class equipment, elite trainers, and a community that pushes you to your limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#pricing"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-300 text-center uppercase tracking-wider border-2 border-red-600 hover:border-red-700"
            >
              Join Now
            </a>
            <a
              href="#services"
              className="bg-transparent hover:bg-white text-white hover:text-zinc-950 font-semibold py-4 px-8 rounded-none transition-colors duration-300 text-center uppercase tracking-wider border-2 border-white"
            >
              View Plans
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
