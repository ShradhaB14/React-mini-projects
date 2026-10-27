import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import greetReducer from "./greetSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    greet: greetReducer
  }
})

export default store;