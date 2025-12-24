import { motion } from "framer-motion";
import { useConfigStore } from "../lib/store/configurador";
import { useNavigate } from "react-router-dom";
import { Check, ChevronLeft, Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function Recomendacion() {
  const { prioridad, vehiculo } = useConfigStore();
  const navigate = useNavigate();

  // Lógica simple de recomendación (Simulada)
  const getRecomendacion = () => {
    if (prioridad === 'PROTECCION') return {
      paquete: "FULL FRONT PPF + CERAMIC",
      descripcion: "La máxima protección disponible para conducción en carretera y ciudad.",
      precio: "$25,000 MXN",
      tiempo: "3 - 4 Días",
      garantia: "10 Años",
      detalles: [
        "PPF en defensa, cofre, salpicaderas y espejos",
        "Recubrimiento cerámico 9H en resto de carrocería",
        "Protección de rines y calipers",
        "Hidratación de plásticos exteriores"
      ]
    };
    if (prioridad === 'ESTETICA') return {
      paquete: "CORRECCIÓN DE PINTURA LEVEL 2",
      descripcion: "Eliminación del 85-95% de defectos para un acabado de concurso.",
      precio: "$8,500 MXN",
      tiempo: "2 Días",
      garantia: "1 Año (Brillo)",
      detalles: [
        "Descontaminación férrica y mecánica",
        "Corte agresivo, pulido medio y abrillantado",
        "Aplicación de sellador sintético premium",
        "Limpieza profunda de motor"
      ]
    };
    if (prioridad === 'RESTAURACION') return {
      paquete: "INTERIOR SPA & RESTORATION",
      descripcion: "Devuelve el olor y tacto de auto nuevo a tu cabina.",
      precio: "$4,800 MXN",
      tiempo: "1 - 2 Días",
      garantia: "Satisfacción Total",
      detalles: [
        "Inyección-succión de alfombras y cielo",
        "Limpieza y acondicionamiento de piel",
        "Eliminación de olores con ozono",
        "Restauración de plásticos dañados"
      ]
    };
    return { 
      paquete: "EVALUACIÓN PERSONALIZADA", 
      descripcion: "Su vehículo requiere un diagnóstico presencial para una cotización exacta.",
      precio: "A Cotizar",
      tiempo: "Variable",
      garantia: "N/A",
      detalles: ["Inspección física requerida", "Pruebas de pintura", "Asesoría técnica"] 
    };
  };

  const data = getRecomendacion();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20 flex flex-col items-center justify-center p-6">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white text-black overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Columna Izquierda: Detalles */}
          <div className="p-8 md:p-12 flex flex-col justify-between bg-zinc-50">
            <div>
              <div className="flex items-center gap-2 mb-8 text-zinc-400 text-xs font-bold tracking-widest uppercase">
                <span>Propuesta</span>
                <span className="w-8 h-[1px] bg-zinc-300"></span>
                <span>001-2024</span>
              </div>

              <h1 className="text-3xl font-light tracking-tight text-zinc-900 mb-2">
                {data.paquete}
              </h1>
              <p className="text-zinc-500 font-light text-sm mb-8 leading-relaxed">
                {data.descripcion}
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Tiempo Estimado</p>
                    <p className="text-sm font-medium text-zinc-900">{data.tiempo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Garantía</p>
                    <p className="text-sm font-medium text-zinc-900">{data.garantia}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Inversión Total</p>
              <p className="text-3xl font-light tracking-tight text-zinc-900">{data.precio}</p>
              <p className="text-[10px] text-zinc-400 mt-1">* Precios más IVA. Sujeto a inspección final.</p>
            </div>
          </div>

          {/* Columna Derecha: Inclusiones y CTA */}
          <div className="p-8 md:p-12 bg-zinc-900 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern subtle */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #ffffff 0%, transparent 50%)' }} />

            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
                Incluye
              </h3>
              <ul className="space-y-6">
                {data.detalles.map((detalle, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="mt-1 w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center group-hover:border-white transition-colors">
                      <Check className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-sm font-light text-zinc-300 leading-relaxed group-hover:text-white transition-colors">
                      {detalle}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-12 space-y-4 relative z-10">
              <a 
                href={`https://wa.me/523141012929?text=Hola,%20me%20interesa%20el%20paquete%20${encodeURIComponent(data.paquete)}%20para%20mi%20${encodeURIComponent(vehiculo || 'auto')}`}
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-4 bg-white text-black hover:bg-zinc-200 transition-all duration-300 text-center text-sm font-bold tracking-widest uppercase"
              >
                Agendar Cita
              </a>
              <button
                onClick={() => navigate('/configurador/vehiculo')}
                className="block w-full py-4 border border-zinc-700 hover:border-white text-zinc-400 hover:text-white transition-all duration-300 text-center text-xs font-medium tracking-widest uppercase"
              >
                Modificar Selección
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
