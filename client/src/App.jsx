import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CarMastersHero from "./components/CarMastersHero";
import PrioridadSelector from "./components/PrioridadSelector";
import VehicleSelector from "./components/VehicleSelector";
import Recomendacion from "./components/Recomendacion";

import AdminPanel from "./components/AdminPanel";

// Configurar Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarMastersHero />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/configurador" element={<PrioridadSelector />} />
        <Route path="/configurador/vehiculo" element={<VehicleSelector />} />
        <Route path="/configurador/recomendacion" element={<Recomendacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
