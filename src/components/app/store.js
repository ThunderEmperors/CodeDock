import { configureStore } from "@reduxjs/toolkit";
import elementReducer from "../../features/elementselector/elementsSlice";

export default configureStore({
  reducer: {
    elementselector: elementReducer
  }
})