import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Image
                  src="/geolox-logo.png"
                  alt="GEOLOX"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                GEOLOX
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                    activeSection === link.href.substring(1) ? 'text-cyan-400' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Theme Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <motion.button 
                onClick={() => setMobileMenuOpen(true)} 
                className="text-white p-2 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 z-50 p-6 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <motion.button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-white p-2 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-xl text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                {/* Mobile CTA */}
                <motion.button
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="btn-primary font-semibold text-lg mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

