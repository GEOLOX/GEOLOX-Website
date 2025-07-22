import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner({ size = 'md', color = 'cyan' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    cyan: 'border-cyan-400',
    green: 'border-green-400',
    blue: 'border-blue-400',
    white: 'border-white'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}

export function SkeletonLoader({ className = "" }) {
  return (
    <div className={`animate-pulse bg-slate-700 rounded ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <img
            src="/geolox-logo.png"
            alt="GEOLOX"
            className="w-16 h-16 mx-auto"
          />
        </motion.div>
        <LoadingSpinner size="lg" color="cyan" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-4"
        >
          Loading GEOLOX...
        </motion.p>
      </div>
    </div>
  );
}

