import React from "react";
import { Action, CartContextType, State } from "./cart-context.types";

const initialState = { products: [], total: 0 };

const CartContext = React.createContext<CartContextType>([
  initialState,
  (): void => {
    throw new Error("setContext function must be overriden");
  },
]);

function cartReducer(state: State, action: Action): State {
  return { products: [], total: 0 };
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
