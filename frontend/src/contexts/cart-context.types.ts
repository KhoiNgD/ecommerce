import React from "react";

export type ProductState = {
  slug: string;
  name: string;
  price: string;
  quantity: number;
};

export type State = {
  products: ProductState[];
  total: number;
};

export type Action = {};

export type CartContextType = [state: State, dispatch: React.Dispatch<Action>];
