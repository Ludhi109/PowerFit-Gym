import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-6 text-red-600"
      >
        <Dumbbell size={64} />
      </motion.div>
      <h1 className="font-oswald text-4xl font-bold tracking-widest text-white flex items-center gap-2">
        POWER<span className="text-red-600">FIT</span>
      </h1>
      
      <div className="w-48 h-1 bg-zinc-800 mt-8 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full bg-red-600"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
