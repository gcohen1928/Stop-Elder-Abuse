import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    complete : false,
    failed: false, 
  },
  reducers: {
    setData(state, action) {
      state.complete = action.payload.complete;
      state.failed = action.payload.failed;
    },
    resetData(state, action){
      state.complete = false;
      state.failed = false;
    }
  },
});

export const formActions = formSlice.actions;
export default formSlice;
