import { create } from "zustand";

export const useStore = create((set) => ({
  isOpen: false,
  openModal: () => set(() => ({ isOpen: true })),
  closeModal: () => set(() => ({ isOpen: false })),
}));
