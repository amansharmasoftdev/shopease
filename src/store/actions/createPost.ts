import {
  CreateProductActionTypes,
  CreateProductFailure,
  CreateProductRequest,
  CreateProductResponse,
  CreateProductSuccess,
} from "../types/createProductType";

const createProductRequest = (action: any): CreateProductRequest => {
  return {
    type: CreateProductActionTypes.CREATE_PRODUCT_REQUEST,
    payload: action.payload,
  };
};

const createProductSuccess = (
  data: CreateProductResponse[]
): CreateProductSuccess => {
  return {
    type: CreateProductActionTypes.CREATE_PRODUCT_SUCCESS,
    payload: data,
  };
};

const createProductFailure = (error: string): CreateProductFailure => {
  return {
    type: CreateProductActionTypes.CREATE_PRODUCT_FAILURE,
    payload: error,
  };
};

export { createProductRequest, createProductSuccess, createProductFailure };
