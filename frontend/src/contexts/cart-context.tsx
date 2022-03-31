import React from "react";
import {
  Action,
  ActionType,
  CartContextType,
  State,
} from "./cart-context.types";

const initialState = { products: [], total: 0 };

const CartContext = React.createContext<CartContextType | null>(null);

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ADD:
      return {
        products: [...state.products, action.payload],
        total: state.total + action.payload.price,
      };
    case ActionType.REMOVE:
      return {
        products: [
          ...state.products.filter(
            (product) => product.slug === action.payload.slug
          ),
        ],
        total: state.total - action.payload.price * action.payload.quantity,
      };
    case ActionType.UPDATE:
      const updatedProducts = state.products.map((product) => {
        if (product.slug === action.payload.slug) {
          return action.payload;
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
    case ActionType.CLEAR:
      return initialState;
    default:
      return { ...state };
  }
}

type Props = { children: React.ReactNode };
function CartProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const value = { state, dispatch };
  return <CartContext.Provider value={value} children={children} />;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("The component is not nested in Product Context Provider");
  }

  return context;
}

function useCheckAddedToCart(productSlug: string) {
  const { state } = useCart();
  return Boolean(
    state.products.find((product) => product.slug === productSlug)
  );
}

export { CartProvider, useCart, useCheckAddedToCart };
