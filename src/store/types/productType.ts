export enum getProductTypes {
  GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE",
}

export const initialProductState = {
  products: [],
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
export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export interface getProductRequestAction {
  type: getProductTypes.GET_PRODUCTS_REQUEST;
}

export interface getProductSuccessAction {
  type: getProductTypes.GET_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface getProductFailureAction {
  type: getProductTypes.GET_PRODUCTS_FAILURE;
}

export type getProductActions =
  | getProductRequestAction
  | getProductSuccessAction
  | getProductFailureAction;
