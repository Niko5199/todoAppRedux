import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "../reducers/results";

export default configureStore({
  reducer: resultReducer,
});
