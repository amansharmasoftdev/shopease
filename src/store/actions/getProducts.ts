// src/actions/productActions.ts

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ProductActionTypes,
} from "../types/getProductTypes";

// Action creators
export const fetchProductsRequest = (): ProductActionTypes => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: any): ProductActionTypes => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string): ProductActionTypes => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
