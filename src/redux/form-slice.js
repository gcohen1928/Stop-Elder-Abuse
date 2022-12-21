import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "Joh!",
  },
  reducers: {
    setData(state, action) {
      state.name = action.payload;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
