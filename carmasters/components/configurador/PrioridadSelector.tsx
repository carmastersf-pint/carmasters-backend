"use client";

import { useConfigStore } from "@/lib/store/configurador";
import { motion } from "framer-motion";

const opciones = [
  {
    id: "PROTECCION",
    titulo: "Protección",
    descripcion: "PPF, ceramic coating y blindaje estético para preservar tu inversión.",
    icono: "🛡️",
  },
  {
    id: "ESTETICA",
    titulo: "Estética",
    descripcion: "Corrección de pintura, detalles premium y acabados de catálogo.",
    icono: "✨",
  },
  {
    id: "RESTAURACION",
    titulo: "Restauración",
    descripcion: "Recuperación profunda para autos con desgaste o daños visibles.",
    icono: "🔧",
  },
];

export default function PrioridadSelector() {
  const { prioridad, setPrioridad } = useConfigStore();

  return (
    <div className="min-h-screen bg-[#080808] text-white px-6 py-16">
      <h1 className="text-4xl font-black text-center mb-10">
        ¿Cuál es tu prioridad principal?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {opciones.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setPrioridad(item.id)}
            className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 bg-white/5 backdrop-blur-md
              ${
                prioridad === item.id
                  ? "border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                  : "border-white/10 hover:border-white/30"
              }`}
          >
            <div className="text-5xl mb-4">{item.icono}</div>
            <h3 className="text-2xl font-bold mb-2">{item.titulo}</h3>
            <p className="text-white/70 text-sm">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>

      {prioridad && (
        <div className="text-center mt-12">
          <a
            href="/configurador/recomendacion"
            className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] rounded-full font-bold text-lg hover:scale-105 transition-all"
          >
            Continuar →
          </a>
        </div>
      )}
    </div>
  );
}
