import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Zap } from 'lucide-react';

export default function VideoSection() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Tracking points data
    const trackingPoints = [];
    const maxPoints = 8;
    
    // Generate random tracking points
    for (let i = 0; i < maxPoints; i++) {
      trackingPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        speed: 0.02 + Math.random() * 0.03,
        pulse: Math.random() * Math.PI * 2,
        color: i % 3 === 0 ? '#0891b2' : i % 3 === 1 ? '#059669' : '#1e40af'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid background
      ctx.strokeStyle = 'rgba(30, 64, 175, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Update and draw tracking points
      trackingPoints.forEach((point, index) => {
        // Move towards target
        point.x += (point.targetX - point.x) * point.speed;
        point.y += (point.targetY - point.y) * point.speed;
        
        // If close to target, set new target
        if (Math.abs(point.x - point.targetX) < 5 && Math.abs(point.y - point.targetY) < 5) {
          point.targetX = Math.random() * canvas.width;
          point.targetY = Math.random() * canvas.height;
        }

        // Pulse effect
        point.pulse += 0.1;
        const pulseSize = 8 + Math.sin(point.pulse) * 4;

        // Draw tracking point
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw tracking ring
        ctx.strokeStyle = point.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize + 8, 0, Math.PI * 2);
        ctx.stroke();

        // Draw connection lines to nearby points
        trackingPoints.forEach((otherPoint, otherIndex) => {
          if (otherIndex !== index) {
            const distance = Math.sqrt(
              Math.pow(point.x - otherPoint.x, 2) + Math.pow(point.y - otherPoint.y, 2)
            );
            if (distance < 150) {
              ctx.strokeStyle = `rgba(8, 145, 178, ${0.3 * (1 - distance / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real-Time Location <span className="text-cyan-400">Intelligence</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Watch our advanced tracking system in action. Monitor assets, optimize routes, and gain insights from live geospatial data with precision and reliability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Navigation className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">&lt;1s</div>
                  <div className="text-sm text-gray-400">Response</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105"
            >
              See It In Action
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Live Tracking Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-emerald-400">Live</span>
                </div>
              </div>
              
              <div className="relative h-80 bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/30">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                />
                
                {/* Overlay UI elements */}
                <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50">
                  <div className="text-xs text-gray-400 mb-1">Active Assets</div>
                  <div className="text-xl font-bold text-white">8</div>
                </div>
                
                <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50">
                  <div className="text-xs text-gray-400 mb-1">Data Updates</div>
                  <div className="text-xl font-bold text-cyan-400">Real-time</div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-emerald-400 font-medium">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 