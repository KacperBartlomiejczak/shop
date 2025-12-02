import { StateCreator } from "zustand";
import { Product } from "@/types/product";

interface Cart {
  shoppingCartNumber: number;
  itemsInCart: Product[];
}

interface CartAction {
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

type CartSlice = CartAction & Cart;

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  shoppingCartNumber: 0,
  itemsInCart: [],

  addToCart: (item: Product) => {
    set((state) => {
      const updatedItems = [...state.itemsInCart, item];
      return {
        itemsInCart: updatedItems,
        shoppingCartNumber: updatedItems.length,
      };
    });
  },

  removeFromCart: (id) => {
    set((state)=> {
        itemsInCart: state.itemsInCart.filter((product) => product.id !== id),
        shoppingCartNumber: state.itemsInCart -1;
    })
  },
  clearCart: () => {
    set({ itemsInCart: [], shoppingCartNumber: 0 });
  },
});
