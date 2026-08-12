import { create } from "zustand";

const useCartDrawerStore = create((set) => ({
  isOpen: true,

  openDrawer: () => set({ isOpen: true }),

  closeDrawer: () => set({ isOpen: false }),

  toggleDrawer: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

export default useCartDrawerStore;