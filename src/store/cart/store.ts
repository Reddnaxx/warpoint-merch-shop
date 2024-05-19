import { create } from "zustand";
import { IItem } from "@/core/catalog/models/item.interface";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface CartState {
  items: IItem[];
  addToCart: (item: IItem) => void;
  removeOneFromCart: (item: IItem) => void;
  removeAllFromCart: (item: IItem) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addToCart: item => set(state => ({ items: [...state.items, item] })),
        removeOneFromCart: item => {
          const items = get().items;
          items.splice(
            items.findLastIndex(i => i.id === item.id),
            1,
          );
          set(state => ({
            items: [...items],
          }));
        },
        removeAllFromCart: item => {
          set(state => ({
            items: [...state.items.filter(i => i.id !== item.id)],
          }));
        },
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
