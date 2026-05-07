import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Heart, UserCheck, Flame, Users } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="w-10 h-10 text-red-500" />,
    title: 'Weight Training',
    desc: 'Build strength and muscle with our state-of-the-art free weights and resistance machines.'
  },
  {
    icon: <Activity className="w-10 h-10 text-red-500" />,
    title: 'Cardio Training',
    desc: 'Improve stamina and burn calories with our top-tier treadmills, ellipticals, and bikes.'
  },
  {
    icon: <UserCheck className="w-10 h-10 text-red-500" />,
    title: 'Personal Training',
    desc: 'Get customized 1-on-1 coaching from certified experts tailored to your specific goals.'
  },
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: 'Yoga Classes',
    desc: 'Enhance flexibility, core strength, and mental focus with our guided yoga sessions.'
  },
  {
    icon: <Flame className="w-10 h-10 text-red-500" />,
    title: 'Diet Consultation',
    desc: 'Receive personalized nutrition plans to fuel your workouts and optimize your results.'
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: 'CrossFit',
    desc: 'Experience high-intensity functional training designed to improve overall fitness.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6">
            WHAT WE <span className="text-gradient">OFFER</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Push your limits with our wide range of fitness programs designed for all levels.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-8 group hover:border-red-600 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-zinc-950/50 inline-block rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
