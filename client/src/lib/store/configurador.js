import { create } from 'zustand'

export const useConfigStore = create((set) => ({
  prioridad: null,
  setPrioridad: (prioridad) => set({ prioridad }),
  vehiculo: null,
  setVehiculo: (vehiculo) => set({ vehiculo }),
}))
