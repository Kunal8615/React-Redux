import { configureStore, createSlice } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/Index";

const store = createSlice(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;