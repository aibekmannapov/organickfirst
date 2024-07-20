import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  deteilsPro: JSON.parse(localStorage.getItem("det")) || {},
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
const addProductSlice = createSlice({
  name: "CREATE",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
    deleteProd(state, action) {
      state.product = state.product.filter((el) => el._id !== action.payload);
    },
    productDet(state, action) {
      state.deteilsPro = action.payload;
      localStorage.setItem("det", JSON.stringify(action.payload));
    },
    basketProduct(state, action) {
      let bas = [...state.basket, action.payload];
      state.basket = bas;
      localStorage.setItem("basket", JSON.stringify(bas));
    },
    basketDelete(state, action) {
      let delBasket = state.basket.filter((el) => el._id !== action.payload);
      state.basket = delBasket;
      localStorage.setItem("basket", JSON.stringify(delBasket));
    },
    inCriment(state, action) {
      let plus = state.basket.map((el) => el._id === action.payload ? { ...el, quentity: el.quentity + 1 } : el);
      state.basket = plus;
      localStorage.setItem("basket", JSON.stringify(plus));
    },
    desCriment(state, action) {
      let minus = state.basket.map((el) => el._id === action.payload ? {...el,quentity: el.quentity > 1 ? el.quentity - 1 : 1}: el)
      state.basket = minus
      localStorage.setItem("basket", JSON.stringify(minus))
    }
  },
});
export const {
  getProduct,
  deleteProd,
  productDet,
  basketProduct,
  basketDelete,
  inCriment,
  desCriment,
} = addProductSlice.actions;
export default addProductSlice.reducer;
