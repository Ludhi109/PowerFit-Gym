import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const trainers = [
  {
    name: 'John Doe',
    specialization: 'Head Coach & CrossFit',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop',
  },
  {
    name: 'Sarah Connor',
    specialization: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
  },
  {
    name: 'Mike Tyson',
    specialization: 'Boxing & Cardio',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop',
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">Our Team</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6">
            EXPERT <span className="text-gradient">TRAINERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold font-oswald text-white uppercase">{trainer.name}</h4>
                <p className="text-red-500 mb-4">{trainer.specialization}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
