import { useState } from "react";
import { Sparkles, Menu, X, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CarMastersHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-white/20 overflow-hidden">
      
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950" />
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-[0.2em] text-white">CAR MASTERS</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Detailing & Protection</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#casos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#estudio" className="hover:text-white transition-colors">El Estudio</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+523141012929"
              className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              314-101-2929
            </a>
            <button 
              onClick={() => navigate('/admin')}
              className="text-xs font-bold tracking-widest text-zinc-600 hover:text-white transition-colors"
            >
              ACCESO CLIENTES
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-xl font-light tracking-widest uppercase">
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#casos" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
            <a href="#estudio" onClick={() => setIsMenuOpen(false)}>El Estudio</a>
            <button onClick={() => { navigate('/admin'); setIsMenuOpen(false); }} className="text-left text-zinc-500">Acceso Clientes</button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Aceptando Proyectos 2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.9] tracking-tighter text-white">
            ELEVANDO EL<br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">ESTÁNDAR</span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            Especialistas en protección y estética automotriz de alto nivel. 
            PPF, Recubrimientos Cerámicos y Restauración para quienes exigen perfección.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button 
              onClick={() => navigate('/configurador')}
              className="group relative px-8 py-4 bg-white text-black min-w-[200px] overflow-hidden transition-all duration-300 hover:bg-zinc-200"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                Cotizar Proyecto <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 border border-zinc-800 text-zinc-400 min-w-[200px] hover:border-white hover:text-white transition-all duration-300">
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                Ver Portafolio
              </span>
            </button>
          </div>

          {/* Minimalist Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-24 border-t border-white/5 pt-12 max-w-3xl mx-auto">
            {[
              { label: 'Años Exp.', value: '05+' },
              { label: 'Proyectos', value: '500+' },
              { label: 'Garantía', value: '100%' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-4xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-white to-zinc-900 opacity-20"></div>
    </div>
  );
}
