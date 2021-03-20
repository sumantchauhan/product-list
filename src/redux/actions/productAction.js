import { PRODUCT_LIST, ADD_TO_CART, ERROR, CART_LIST } from "../types/index";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { v4 as uuidv4 } from "uuid";

export const getProductList = () => (dispatch) => {
  axios
    .get(`${apiUrl}/users`)
    .then((resp) => {
      let productList = resp.data;
      productList.forEach((item, index) => {
        item["mobile"] = `99000000${index + 1}`;
        item["product"] = uuidv4().toString().substring(15);
      });
      let temp = productList;
      for (let i = 10; i < 50; i++) {
        let newItem = {
          id: i,
          username: `name${i + 1}`,
          mobile: `99000000${i + 1}`,
          product: uuidv4().toString().substring(15),
        };
        temp.push(newItem);
      }
      dispatch({
        type: PRODUCT_LIST,
        payload: temp,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: [],
      });
    });
};

export const addCartList = (data) => (dispatch) => {
  dispatch({
    type: CART_LIST,
    payload: data,
  });
};
