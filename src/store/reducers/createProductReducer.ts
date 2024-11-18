import {
  CreateProductActionTypes,
  CreateProductResponse,
} from "../types/createProductType";

const initialState = {
  createdProducts: [],
  loading: false,
  error: null,
};
export interface createProductState {
  createdProducts: CreateProductResponse[];
  loading: boolean;
  error: string | null;
}
const createProductReducer = (
  state = initialState,
  action: any
): createProductState => {
  console.log(action, "==action in reducer for products");

  switch (action.type) {
    case CreateProductActionTypes.CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case CreateProductActionTypes.CREATE_PRODUCT_SUCCESS:
      return { ...state, createdProducts: action.payload, loading: false };
    case CreateProductActionTypes.CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default createProductReducer;
