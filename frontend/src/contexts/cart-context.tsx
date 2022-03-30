import React from "react";

const CartContext = React.createContext();

type Props = { children: React.ReactNode };
function CartProvider({ children }: Props) {
  return <CartContext.Provider value="" children={children} />;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("The component is not nested in Product Context Provider");
  }

  return context;
}

export { CartProvider, useCart };
