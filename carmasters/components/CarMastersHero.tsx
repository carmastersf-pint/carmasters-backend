"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Shield, Zap } from 'lucide-react';

const CarMastersHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-hidden font-sans">
      {/* Video Background con overlay gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-[#FF6B35]/10 to-[#00F0FF]/20" />
        <div className="absolute inset-0 bg-[#080808]/40" />
        <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#080808]">
          <div className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 240, 255, 0.1) 0%, transparent 50%)',
               }} />
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FF6B35] rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#080808]" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">CAR MASTERS</h1>
            <p className="text-xs text-[#D4D4D4]">Excelencia Automotriz</p>
          </div>
        </div>
        <a 
          href="tel:+523141012929"
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-white/20 transition-all duration-300"
        >
          314-101-2929
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#00F0FF]/20 backdrop-blur-sm rounded-full border border-[#FFD700]/30 mb-8">
            <Shield className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm text-[#D4D4D4]">Un proyecto a la vez</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <span className="block text-white">EXCELENCIA</span>
            <span className="block bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00F0FF] bg-clip-text text-transparent">
              AUTOMOTRIZ
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#D4D4D4] max-w-2xl mx-auto mb-12 leading-relaxed">
            Ceramic coating, PPF, detailing profesional y personalización de alta gama.
            <span className="block mt-2 text-[#FFD700]">Tu auto merece lo mejor.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]">
              <span className="relative z-10">Descubre tu proyecto ideal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-[#FFD700]/30">
              Ver casos reales
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: 'Protección', value: '5+ años' },
              { icon: Sparkles, label: 'Proyectos', value: '500+' },
              { icon: Zap, label: 'Satisfacción', value: '100%' }
            ].map((stat, i) => (
              <div 
                key={i}
                className={`transition-all duration-1000 delay-${i * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#FFD700]" />
                <div className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#00F0FF] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-[#D4D4D4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FFD700]" />
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

export default CarMastersHero;
