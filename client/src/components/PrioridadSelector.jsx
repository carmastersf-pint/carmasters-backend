import { useConfigStore } from "../lib/store/configurador";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Sparkles, Wrench } from 'lucide-react';

const opciones = [
  {
    id: "PROTECCION",
    titulo: "PROTECCIÓN",
    subtitulo: "Preservación de Inversión",
    descripcion: "Blindaje estético invisible. PPF y recubrimientos cerámicos para mantener la pintura impecable.",
    icono: Shield,
  },
  {
    id: "ESTETICA",
    titulo: "ESTÉTICA",
    subtitulo: "Perfección Visual",
    descripcion: "Corrección de pintura de alto nivel. Eliminación de defectos para un acabado espejo superior.",
    icono: Sparkles,
  },
  {
    id: "RESTAURACION",
    titulo: "RESTAURACIÓN",
    subtitulo: "Renovación Integral",
    descripcion: "Recuperación de vehículos con desgaste. Devolvemos la gloria original a interiores y exteriores.",
    icono: Wrench,
  },
];

export default function PrioridadSelector() {
  const { prioridad, setPrioridad } = useConfigStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20">
      {/* Header Minimalista */}
      <div className="pt-20 pb-12 px-6 text-center">
        <h2 className="text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase mb-4">
          Paso 01 / 03
        </h2>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
          Defina su <span className="font-semibold">Objetivo</span>
        </h1>
        <p className="text-zinc-400 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed">
          Seleccione el enfoque principal para su proyecto. Cada servicio está diseñado para cumplir con los estándares más exigentes.
        </p>
      </div>

      {/* Grid de Opciones */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opciones.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              onClick={() => setPrioridad(item.id)}
              className={`group relative cursor-pointer p-8 h-full flex flex-col justify-between transition-all duration-500 ease-out border
                ${
                  prioridad === item.id
                    ? "bg-zinc-900/80 border-white/40 shadow-2xl shadow-black/50"
                    : "bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/60 hover:border-zinc-700"
                }`}
            >
              <div>
                <div className={`mb-6 p-3 w-fit rounded-lg transition-colors duration-300 ${prioridad === item.id ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-400 group-hover:text-white'}`}>
                  <item.icono strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium tracking-wide mb-1 text-white group-hover:text-white transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4 group-hover:text-zinc-400">
                  {item.subtitulo}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300">
                  {item.descripcion}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className={`text-xs tracking-widest uppercase transition-colors duration-300 ${prioridad === item.id ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                  Seleccionar
                </span>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${prioridad === item.id ? 'bg-white scale-125' : 'bg-zinc-800 group-hover:bg-zinc-600'}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: prioridad ? 1 : 0 }}
          className={`mt-16 flex justify-center transition-all duration-500 ${prioridad ? 'translate-y-0' : 'translate-y-4 pointer-events-none'}`}
        >
          <button
            onClick={() => navigate('/configurador/vehiculo')}
            className="group flex items-center gap-4 pl-8 pr-6 py-4 bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-sm"
          >
            <span className="text-sm font-semibold tracking-widest uppercase">Continuar</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
