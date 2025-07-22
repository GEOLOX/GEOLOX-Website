import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Lock, Scaling } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: "Real-Time Data for Instant Decision Making",
    description: "Empower your team with up-to-the-second geospatial intelligence, enabling rapid, informed business decisions.",
  },
  {
    icon: Zap,
    title: "Predictive Insights for Growth",
    description: "Leverage AI-driven analytics to forecast trends, optimise operations, and identify new opportunities ahead of the market.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security & Reliability",
    description: "Protect your data and operations with robust security and 99.9% uptime, trusted by industry leaders.",
  },
  {
    icon: Scaling,
    title: "Scalable Infrastructure for Every Business",
    description: "From startups to global enterprises, Geolox adapts to your needs and grows with your ambitions.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900/10 to-emerald-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/10 via-emerald-700/10 to-blue-900/10 blur-2xl opacity-40 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Platform Capabilities</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Geolox delivers actionable geospatial intelligence to drive efficiency, growth, and competitive advantage. <span className="text-cyan-300 font-semibold">See how our platform powers real-world success in our <a href='#' className='underline hover:text-emerald-400'>Industry Solutions</a>.</span>
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-slate-800/80 p-8 rounded-2xl text-center shadow-xl border border-slate-700/40 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 p-4 rounded-full">
                  <feature.icon className="w-8 h-8 text-teal-400" aria-label={feature.title} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
