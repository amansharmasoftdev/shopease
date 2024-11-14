// src/types/productTypes.ts

// Define the Product interface to match the data structure
export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductErorr {
  error: string;
}

// Define the state interface
export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Define action types
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// Define action interfaces
interface FetchProductsRequest {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccess {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailure {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

// Combine all action types
export type ProductActionTypes =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure;
