import { PRODUCT_LIST, ADD_TO_CART, CART_LIST, ERROR } from "../types/index";

const initialState = {
  productList: [],
  addToCart: false,
  cartList: [],
};

export const productReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action,
      };
    case CART_LIST:
      return {
        ...state,
        cartList: action.payload,
      };

    case ERROR:
      return {
        ...state,
        productList: [],
      };
    default:
      return state;
  }
};
