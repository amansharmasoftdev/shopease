import { cartTypes, Product } from "../types/cartType";

const addToCart = (product: Product[]) => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: product,
  };
};

const removeFromCart = (product: Product) => {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

const clearCart = () => {
  return {
    type: cartTypes.CLEAR_CART,
  };
};

export { addToCart, removeFromCart, clearCart };
