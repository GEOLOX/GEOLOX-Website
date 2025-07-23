import React from 'react';
import { motion } from 'framer-motion';
import { Map, BarChart2, Share2, Target } from 'lucide-react';

const services = [
  {
    icon: BarChart2,
    title: 'Geospatial Analytics',
    description: 'Transform raw location data into actionable business intelligence for smarter strategy and operations.',
    industry: 'Ideal for: Retail, Real Estate, Urban Planning',
  },
  {
    icon: Share2,
    title: 'Route Optimisation',
    description: 'Create hyper-efficient routes for logistics and field services, reducing costs and improving delivery times.',
    industry: 'Ideal for: Logistics, Transportation, Field Services',
  },
  {
    icon: Target,
    title: 'Asset Tracking',
    description: 'Monitor valuable assets in real-time with secure, scalable tracking solutions for total operational visibility.',
    industry: 'Ideal for: Supply Chain, Utilities, Construction',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-emerald-900 via-slate-900/20 to-blue-900/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/10 via-emerald-700/10 to-blue-900/10 blur-2xl opacity-40 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Industry Solutions</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Geolox delivers tailored geospatial intelligence solutions for every industry. <span className="text-cyan-300 font-semibold">Discover how we drive measurable results for your sector.</span>
          </p>
        </motion.div>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-slate-800/80 backdrop-blur-sm p-10 rounded-2xl border border-slate-700/40 shadow-xl hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 inline-block p-5 rounded-full mb-6">
                <service.icon className="h-10 w-10 text-cyan-400" aria-label={service.title} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-lg mb-2">{service.description}</p>
              <div className="text-sm text-cyan-300 font-medium">{service.industry}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
