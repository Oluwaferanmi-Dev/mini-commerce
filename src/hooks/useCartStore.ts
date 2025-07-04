'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { CartItem, Product } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartState {
  cart: CartItem[];
  addItem: (item: { product: Product, quantity: number }) => void;
  removeItem: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: ({ product, quantity }) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.product.id === product.id);

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ cart: updatedCart });
        } else {
          set({ cart: [...cart, { product, quantity }] });
        }
      },
      removeItem: (productId) => {
        set({
          cart: get().cart.filter((item) => item.product.id !== productId),
        });
        toast({ title: 'Item removed from cart' });
      },
      increaseQuantity: (productId) => {
        set({
          cart: get().cart.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },
      decreaseQuantity: (productId) => {
        set({
          cart: get().cart.map((item) =>
            item.product.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        });
      },
      clearCart: () => set({ cart: [] }),
      totalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      totalPrice: () => {
        return get().cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
