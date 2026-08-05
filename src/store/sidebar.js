import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSidebarStore = create(
  persist(
    (set) => ({
      open: false,

      setOpen: (value) => set({ open: value }),

      toggleOpen: () =>
        set((state) => ({
          open: !state.open,
        })),
    }),
    {
      name: "sidebar-storage",
    }
  )
);

export default useSidebarStore;