import { motion } from "framer-motion";
import { useConfigStore } from "../lib/store/configurador";
import { useNavigate } from "react-router-dom";
import { Car, Truck, Zap, ChevronLeft } from 'lucide-react';

const vehiculos = [
  { 
    id: "SEDAN", 
    nombre: "SEDÁN / COUPE", 
    desc: "Vehículos compactos, ejecutivos y de dos puertas.",
    icono: Car 
  },
  { 
    id: "SUV", 
    nombre: "SUV / PICKUP", 
    desc: "Vehículos familiares, utilitarios y de gran tamaño.",
    icono: Truck 
  },
  { 
    id: "DEPORTIVO", 
    nombre: "EXÓTICO / DEPORTIVO", 
    desc: "Superdeportivos y vehículos de alto rendimiento.",
    icono: Zap 
  },
];

export default function VehicleSelector() {
  const { setVehiculo, vehiculo } = useConfigStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20">
      {/* Header Minimalista */}
      <div className="pt-20 pb-12 px-6 text-center">
        <h2 className="text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase mb-4">
          Paso 02 / 03
        </h2>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
          Tipo de <span className="font-semibold">Vehículo</span>
        </h1>
        <p className="text-zinc-400 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed">
          Seleccione la categoría que mejor describa su unidad para calcular los requerimientos exactos de material y tiempo.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehiculos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onClick={() => setVehiculo(item.id)}
              className={`group cursor-pointer relative p-8 h-64 flex flex-col items-center justify-center text-center transition-all duration-300 border
                ${
                  vehiculo === item.id
                    ? "bg-zinc-900 border-white/40 shadow-xl"
                    : "bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/60 hover:border-zinc-700"
                }`}
            >
              <item.icono 
                strokeWidth={1}
                className={`w-12 h-12 mb-6 transition-colors duration-300 ${vehiculo === item.id ? 'text-white' : 'text-zinc-600 group-hover:text-white'}`} 
              />
              
              <h3 className="text-lg font-medium tracking-widest text-white mb-2 uppercase">
                {item.nombre}
              </h3>
              
              <p className="text-xs text-zinc-500 font-light max-w-[200px]">
                {item.desc}
              </p>

              <div className={`absolute bottom-6 w-1 h-1 rounded-full transition-all duration-300 ${vehiculo === item.id ? 'bg-white scale-150' : 'bg-transparent'}`} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-between items-center max-w-lg mx-auto">
          <button
            onClick={() => navigate('/configurador')}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4" /> Atrás
          </button>
          
          <button
            disabled={!vehiculo}
            onClick={() => navigate('/configurador/recomendacion')}
            className={`group flex items-center gap-4 pl-8 pr-6 py-4 bg-white text-black transition-all duration-300 rounded-sm
              ${!vehiculo ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-200'}`}
          >
            <span className="text-sm font-semibold tracking-widest uppercase">Ver Propuesta</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
