import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-red-500 font-semibold tracking-widest uppercase mb-2">Get in Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-6">
            CONTACT <span className="text-gradient">US</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-zinc-950 text-red-500 rounded-lg">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    PowerFit Gym<br/>
                    Madhapur, Hyderabad,<br/>
                    Telangana 500081,<br/>
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-zinc-950 text-red-500 rounded-lg">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-zinc-950 text-red-500 rounded-lg">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-400">info@powerfit.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-zinc-950 border border-zinc-800 relative overflow-hidden group rounded-xl">
              <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                 <iframe 
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.72767078319!2d78.31012977508688!3d17.447547565985834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7beed5f3dd5!2sMadhapur%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-2">
              <a 
                href="https://maps.google.com/?q=Madhapur,+Hyderabad,+Telangana,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-bold uppercase tracking-wider transition-colors duration-300"
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-zinc-950 p-8 md:p-10 border border-zinc-800"
          >
            <h3 className="text-2xl font-bold font-oswald text-white uppercase mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                required
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                required
              ></textarea>
              
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 w-full uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
