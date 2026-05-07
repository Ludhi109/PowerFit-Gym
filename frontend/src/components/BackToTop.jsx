import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl shadow-red-900/50 cursor-pointer transition-colors duration-300"
          >
            <ArrowUp size={24} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
