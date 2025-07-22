import React from 'react';
import ModernHeroSection from '../components/ModernHeroSection';
import VideoSection from '../components/VideoSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import BrandsSection from '../components/BrandsSection';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <section id="hero" className="pt-20">
          <ModernHeroSection />
        </section>
        <section id="video">
          <VideoSection />
        </section>
        <section id="brands">
          <BrandsSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
} 