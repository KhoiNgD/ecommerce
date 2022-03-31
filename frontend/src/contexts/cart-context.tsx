import React from "react";
import {
  Action,
  ActionType,
  CartContextType,
  State,
} from "./cart-context.types";

const initialState = { products: [], total: 0 };

const CartContext = React.createContext<CartContextType>([
  initialState,
  (): void => {
    throw new Error("setContext function must be overriden");
  },
]);

function cartReducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case ActionType.ADD:
      return {
        products: [...state.products, payload],
        total: state.total + payload.price,
      };
    case ActionType.REMOVE:
      return {
        products: [
          ...state.products.filter((product) => product.slug === payload.slug),
        ],
        total: state.total - payload.price * payload.quantity,
      };
    case ActionType.UPDATE:
      const updatedProducts = state.products.map((product) => {
        if (product.slug === payload.slug) {
          return payload;
        }
        return product;
      });
      const updatedTotal = updatedProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );

      return {
        products: updatedProducts,
        total: updatedTotal,
      };
    default:
      return { ...state };
  }
}

type Props = { children: React.ReactNode };
function CartProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const value: CartContextType = [state, dispatch];
  return <CartContext.Provider value={value} children={children} />;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("The component is not nested in Product Context Provider");
  }

  return context;
}

export { CartProvider, useCart };
