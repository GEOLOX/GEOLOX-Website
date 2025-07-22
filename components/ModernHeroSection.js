import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ModernHeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToContact = (e) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToServices = (e) => {
        e.preventDefault();
        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 188, 212, 0.3) 0%, transparent 50%)`
                    }}
                />
            </div>

            {/* Simple Particle Effect */}
            <div className="absolute inset-0">
                {isLoaded && [...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                        initial={{
                            x: Math.random() * 1200,
                            y: Math.random() * 800,
                        }}
                        animate={{
                            y: [null, -100, 900],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10,
                        }}
                    />
                ))}
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]" />

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-24 text-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <Image
                        src="/geolox-logo.png"
                        alt="GEOLOX"
                        width={200}
                        height={200}
                        className="mx-auto drop-shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-hero gradient-text mb-6 font-extrabold"
                >
                    Unlocking Location Intelligence
                </motion.h1>

                {/* Subheading */}
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Transform complex geospatial data into actionable insights. 
                    <span className="text-cyan-400 font-semibold"> Real-time intelligence</span> that drives 
                    <span className="text-green-400 font-semibold"> smarter decisions</span> across industries.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <button 
                        onClick={scrollToContact}
                        className="btn-primary text-lg px-8 py-4 font-bold"
                    >
                        Request Investor Deck
                    </button>
                    <button
                        onClick={scrollToServices}
                        className="btn-secondary text-lg px-8 py-4 font-bold"
                    >
                        Explore Solutions
                    </button>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    <div className="card text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">$2.5B+</div>
                        <div className="text-gray-400">Market Opportunity</div>
                    </div>
                    <div className="card text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                        <div className="text-gray-400">Data Accuracy*</div>
                    </div>
                    <div className="card text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                        <div className="text-gray-400">Uptime & Support</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-6 text-sm text-gray-500"
                >
                    *Accuracy metric based on internal platform benchmarks, available upon request.
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

