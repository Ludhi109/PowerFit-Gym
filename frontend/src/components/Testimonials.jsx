import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    text: 'PowerFit Gym completely changed my lifestyle. The trainers are incredibly supportive and the facility is top-notch. I\'ve lost 20lbs in just 3 months!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    text: 'The group classes here are phenomenal. High energy, great music, and instructors who push you to your absolute limits. It\'s the best part of my day.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop'
  },
  {
    name: 'David Thompson',
    role: 'Amateur Athlete',
    text: 'As someone training for a triathlon, I needed a gym with serious equipment. PowerFit has everything I need and more. The recovery zone is a lifesaver.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6">
            WHAT OUR <span className="text-gradient">MEMBERS</span> SAY
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 relative"
            >
              <Quote className="absolute top-6 left-6 text-zinc-800 w-20 h-20 -z-0" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-red-500 fill-red-500' : 'text-zinc-700'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 italic mb-10 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-red-600"
                  />
                  <h4 className="text-lg font-bold text-white uppercase">{testimonials[currentIndex].name}</h4>
                  <span className="text-red-500 text-sm">{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-zinc-800 hover:bg-red-600 text-white transition-colors duration-300 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-zinc-800 hover:bg-red-600 text-white transition-colors duration-300 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
