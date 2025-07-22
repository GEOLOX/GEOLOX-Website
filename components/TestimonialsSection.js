import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Lee',
    role: 'COO, QuantumLeap',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Geolox transformed our logistics with real-time insights. Their platform is a game-changer for data-driven businesses.'
  },
  {
    name: 'James Carter',
    role: 'CTO, NovaCloud',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The accuracy and reliability of Geolox is unmatched. We trust them for mission-critical operations.'
  },
  {
    name: 'Priya Patel',
    role: 'VP of Product, StellarForge',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Our investors were impressed by the clarity and impact of Geolox’s analytics. Highly recommended.'
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-slate-900/20 to-blue-900/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/10 via-emerald-700/10 to-blue-900/10 blur-2xl opacity-30 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12 drop-shadow-lg">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800/80 p-8 rounded-2xl shadow-xl border border-slate-700/40 flex flex-col items-center text-center hover:border-cyan-400/40 transition-all duration-300">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-4 border-cyan-400 mb-4 shadow-lg" />
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-emerald-400" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-200 italic mb-4">“{t.quote}”</blockquote>
              <div className="text-cyan-300 font-bold">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 