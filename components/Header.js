import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Solutions', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-white">GEOLOX</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')} 
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900 z-50 p-4 md:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
               <a 
                 href="#contact" 
                 onClick={(e) => scrollToSection(e, '#contact')} 
                 className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 font-semibold px-6 py-3 rounded-lg text-xl mt-4 inline-block"
               >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 