import { createSlice } from "@reduxjs/toolkit";

const greetSlice = createSlice({
  name: 'greet',
  initialState: {
    value: 'Hello'
  },
  reducers: {
    concate: (state)=>{state.value = state.value + 'Shradha'}
  }
})
export const {concate} = greetSlice.actions
export default greetSlice.reducer;