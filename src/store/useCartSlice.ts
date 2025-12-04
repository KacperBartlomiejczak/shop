import { StateCreator } from "zustand";
import { Product } from "@/types/product";

interface ItemsInCart {
  id: number;
  title: string;
  count: number;
  image: string;
}

interface Cart {
  shoppingCartNumber: number;
  itemsInCart: ItemsInCart[];
}

interface CartAction {
  addToCart: (item: ItemsInCart) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export type CartSlice = CartAction & Cart;

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  shoppingCartNumber: 0,
  itemsInCart: [],

  addToCart: (item: ItemsInCart) => {
    set((state) => {
      const updatedItems = [...state.itemsInCart, item];
      return {
        itemsInCart: updatedItems,
        shoppingCartNumber: updatedItems.length,
      };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      itemsInCart: state.itemsInCart.filter((product) => product.id !== id),
      shoppingCartNumber: state.shoppingCartNumber - 1,
    }));
  },

  clearCart: () => {
    set({ itemsInCart: [], shoppingCartNumber: 0 });
  },
});
