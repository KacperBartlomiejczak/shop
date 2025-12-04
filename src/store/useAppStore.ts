import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type CartSlice, createCartSlice } from "./useCartSlice";

type AppStore = CartSlice;

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
    }),
    {
      name: "shopping-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
