import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 ${
        isDark ? 'bg-slate-700' : 'bg-gray-300'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
          isDark ? 'bg-cyan-400' : 'bg-yellow-400'
        }`}
        animate={{
          x: isDark ? 0 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <Moon size={12} className="text-slate-900" />
        ) : (
          <Sun size={12} className="text-orange-600" />
        )}
      </motion.div>
    </motion.button>
  );
}

