import React from "react";

export type ProductState = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

export type State = {
  products: ProductState[];
  total: number;
};

export enum ActionType {
  ADD = "add",
  REMOVE = "remove",
  UPDATE = "update",
  CLEAR = "clear",
}

export type Action =
  | { type: ActionType.ADD; payload: ProductState }
  | { type: ActionType.REMOVE; payload: ProductState }
  | { type: ActionType.UPDATE; payload: ProductState }
  | { type: ActionType.CLEAR };

export type CartContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
