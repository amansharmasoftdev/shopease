import {
  getProductActions,
  getProductTypes,
  initialProductState,
  ProductState,
} from "../types/productType";

const getProductReducer = (
  state = initialProductState,
  action: getProductActions
): ProductState => {
  switch (action.type) {
    case getProductTypes.GET_PRODUCTS_REQUEST:
      return state;
    case getProductTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case getProductTypes.GET_PRODUCTS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default getProductReducer;
