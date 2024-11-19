import { Product } from "../types/cartType";
import { getProductTypes } from "../types/productType";

const getProductRequestAction = () => {
  return {
    type: getProductTypes.GET_PRODUCTS_REQUEST,
  };
};

const getProductSuccessAction = (payload: Product[]) => {
  return {
    type: getProductTypes.GET_PRODUCTS_SUCCESS,
    payload,
  };
};

const getProductFailureAction = (error: any) => {
  return {
    type: getProductTypes.GET_PRODUCTS_FAILURE,
    error,
  };
};

export {
  getProductRequestAction,
  getProductSuccessAction,
  getProductFailureAction,
};
