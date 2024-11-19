export enum cartTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export const initialCartState = {
  cartItems: [],
  loading: false,
  error: null,
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export type CartState = {
  cartItems: Product[];
  loading: boolean;
  error: string | null;
};

export interface cartRequestAction {
  type: cartTypes.ADD_TO_CART;
  payload: Product;
}

export interface cartRemoveAction {
  type: cartTypes.REMOVE_FROM_CART;
  payload: Product;
}

export interface cartClearAction {
  type: cartTypes.CLEAR_CART;
}

export type cartAction = cartRequestAction | cartRemoveAction | cartClearAction;
