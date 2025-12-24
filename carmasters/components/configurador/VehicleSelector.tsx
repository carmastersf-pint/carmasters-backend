"use client";

import { useEffect, useState } from "react";

export default function CarMastersHero() {
  // isVisible empieza en true, no necesitamos setearlo dentro de un efecto
  const [isVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ setState solo dentro de un callback de suscripción
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = isVisible ? 1 : 0;
  const blur = Math.min(scrollY / 100, 10);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-[#050816] to-black text-white flex flex-col"
      style={{
        opacity,
        filter: `blur(${blur}px)`,
        transition: "opacity 0.8s ease-out, filter 0.8s ease-out",
      }}
    >
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-xs font-black">
            CM
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              CAR MASTERS
            </p>
            <p className="text-xs text-white/60 -mt-1">Excelencia Automotriz</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white/70">
          <a href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#casos" className="hover:text-white transition-colors">
            Casos reales
          </a>
          <a href="#configurador" className="hover:text-white transition-colors">
            Configurador
          </a>
          <a
            href="tel:3141012929"
            className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-cyan-400 hover:text-black transition-colors"
          >
            Llamar ahora
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">
            EXCELENCIA AUTOMOTRIZ
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Ceramic coating, PPF, detailing profesional y personalización de
            alta gama.
          </h1>
          <p className="text-base text-white/70">
            Tu auto merece lo mejor. Protegemos y elevamos el valor estético de
            tu vehículo con procesos de alto nivel y enfoque obsesivo en el
            detalle.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#configurador"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-sm font-semibold hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all"
            >
              Descubre tu proyecto ideal
            </a>
            <a
              href="#casos"
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Ver casos reales
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 mt-6">
            <div>
              <p className="text-2xl font-black">5+</p>
              <p className="text-xs text-white/60">años de experiencia</p>
            </div>
            <div>
              <p className="text-2xl font-black">500+</p>
              <p className="text-xs text-white/60">proyectos detallados</p>
            </div>
            <div>
              <p className="text-2xl font-black">100%</p>
              <p className="text-xs text-white/60">clientes satisfechos</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[420px] lg:w-[460px]">
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-black border border-white/10 p-1 overflow-hidden">
            <div className="rounded-2xl bg-black/80 backdrop-blur-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs text-white/60">Clima Manzanillo</p>
                  <p className="text-sm font-semibold">22°C · Despejado</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-xs text-white/60">Disponible hoy</p>
                  <p className="text-sm font-semibold">314-101-2929</p>
                </div>
              </div>

              <div className="h-40 rounded-xl bg-gradient-to-br from-white/10 via-cyan-500/10 to-violet-500/20 border border-white/10 flex items-center justify-center text-white/70 text-xs">
                Aquí va una foto espectacular del proyecto
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-1">
                  <p className="font-semibold text-sm">Protección integral</p>
                  <p className="text-white/60">
                    PPF, ceramic y corrección de pintura para un acabado de
                    catálogo.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-1">
                  <p className="font-semibold text-sm">Experiencia premium</p>
                  <p className="text-white/60">
                    Proceso guiado, asesoría honesta y seguimiento post-servicio.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-white/60">
                  “Un proyecto a la vez. Sin atajos.”
                </p>
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10">
                  CAR MASTERS 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
