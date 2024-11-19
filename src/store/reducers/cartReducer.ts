import {
  cartTypes,
  initialCartState,
  cartAction,
  CartState,
} from "../types/cartType";

const cartReducer = (
  state: CartState = initialCartState,
  action: cartAction
): CartState => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
        error: null,
      };

    case cartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        loading: false,
        error: null,
      };

    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default cartReducer;
