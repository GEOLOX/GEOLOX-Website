import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const scrollToContact = (e) => {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/30 via-emerald-700/20 to-blue-900/40 blur-2xl opacity-60 z-0" />
            <div className="absolute inset-0 bg-grid-slate-700/[0.15] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-0" />

            <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
                >
                    Geolox: <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Unlocking Location Intelligence</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium"
                >
                    GEOLOX empowers organisations to make smarter, faster decisions with real-time geospatial intelligence. Our platform transforms complex location data into actionable insights, driving efficiency, growth, and competitive advantage across industries.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="flex flex-col md:flex-row gap-4 justify-centre items-centre"
                >
                    <a 
                        href="#contact" 
                        onClick={scrollToContact}
                        className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        Request an Investor Deck
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#services').scrollIntoView({ behavior: 'smooth' }); }}
                        className="bg-slate-900 border border-cyan-400 text-cyan-300 font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        Explore Solutions
                    </a>
                </motion.div>
                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="bg-slate-800/70 rounded-2xl px-8 py-6 shadow-xl border border-cyan-500/20">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">$2.5B+</div>
                        <div className="text-gray-300 text-lg">Market Opportunity</div>
                    </div>
                    <div className="bg-slate-800/70 rounded-2xl px-8 py-6 shadow-xl border border-emerald-500/20">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                        <div className="text-gray-300 text-lg">Data Accuracy*</div>
                    </div>
                    <div className="bg-slate-800/70 rounded-2xl px-8 py-6 shadow-xl border border-blue-500/20">
                        <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-gray-300 text-lg">Uptime & Support</div>
                    </div>
                </div>
                <div className="mt-4 text-xs text-grey-400"> Accuracy metric based on internal platform benchmarks, available upon request.</div>
            </div>
        </section>
    );
} 
