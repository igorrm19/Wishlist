import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      removeItem: (itemToRemove) =>
        set((state) => ({
          items: state.items.filter((item) => item !== itemToRemove),
        })),
    }),
    {
      name: "wishlist-storage", 
    }
  )
);

export default useCartStore;
