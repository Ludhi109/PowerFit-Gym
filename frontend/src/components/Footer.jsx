import React from 'react';
import { Dumbbell, ChevronRight } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <Dumbbell className="text-red-600 w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-oswald text-2xl font-bold tracking-wider text-white">
                POWER<span className="text-red-600">FIT</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming lives through fitness. Join the strongest community in the city and become the best version of yourself.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-oswald text-xl uppercase mb-6 border-l-4 border-red-600 pl-3">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-zinc-700 group-hover:text-red-500 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold font-oswald text-xl uppercase mb-6 border-l-4 border-red-600 pl-3">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-white font-medium">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-gray-400">Saturday</span>
                <span className="text-white font-medium">6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold font-oswald text-xl uppercase mb-6 border-l-4 border-red-600 pl-3">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get the latest fitness tips, news, and special offers.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-zinc-900 border border-zinc-800 p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                required
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 uppercase tracking-wider transition-colors duration-300 w-full">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} PowerFit Gym. All rights reserved. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
