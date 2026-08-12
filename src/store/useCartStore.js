import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      AddToCart: (product) => {
        set((state) => {
          const productExistance = state.cart.find(
            (item) => item.id === product.id
          );

          if (productExistance) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
              },
            ],
          };
        });
      },

      RemoveFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.id !== id
          ),
        }));
      },

      IncreamentProduct: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        }));
      },

      DecreamentProduct: (id) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);

export default useCartStore;