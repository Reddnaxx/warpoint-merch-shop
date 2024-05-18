import { create } from "zustand";
import { IItem } from "@/core/catalog/models/item.interface";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface CartState {
  items: IItem[];
  addToCart: (item: IItem) => void;
  removeFromCart: (item: IItem) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      set => ({
        items: [],
        addToCart: item => set(state => ({ items: [...state.items, item] })),
        removeFromCart: item =>
          set(state => ({ items: state.items.filter(i => i.id !== item.id) })),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
