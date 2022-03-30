import React from "react";

const ProductContext = React.createContext();

type Props = { children: React.ReactNode };
function ProductProvider({ children }: Props) {
  return <ProductContext.Provider value="" children={children} />;
}

function useProduct() {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error("The component is not nested in Product Context Provider");
  }

  return context;
}

export { ProductProvider, useProduct };
