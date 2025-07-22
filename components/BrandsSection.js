import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, GitBranch, Cloud, Globe } from 'lucide-react';

const brands = [
  { name: 'QuantumLeap', icon: Briefcase, alt: 'QuantumLeap logo' },
  { name: 'StellarForge', icon: Zap, alt: 'StellarForge logo' },
  { name: 'ApexIndustries', icon: GitBranch, alt: 'ApexIndustries logo' },
  { name: 'NovaCloud', icon: Cloud, alt: 'NovaCloud logo' },
  { name: 'GeoGlobal', icon: Globe, alt: 'GeoGlobal logo' },
];

export default function BrandsSection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900/10 to-emerald-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/10 via-emerald-700/10 to-blue-900/10 blur-2xl opacity-30 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-200 mb-10 tracking-tight">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <div className="bg-slate-800/70 p-4 rounded-full shadow-md mb-2">
                <brand.icon className="h-8 w-8" aria-label={brand.alt} />
              </div>
              <span className="text-lg font-medium">{brand.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="text-cyan-400 hover:underline font-semibold text-base" aria-label="See case studies of how Geolox delivers value to industry leaders">
            See our Case Studies &rarr;
          </a>
        </div>
      </div>
    </section>
  );
} 