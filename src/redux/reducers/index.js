import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./addProduct.Slice";

export const store = configureStore({
  reducer: {
    add: addProductSlice,
  },
});
