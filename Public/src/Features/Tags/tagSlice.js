import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    title: "Tag 1",
    color: "blue",
  },
  {
    title: "Tag 2",
    color: "red",
  },
];
const tagSlice = createSlice({
  name: "tags",
  initialState: initialState,
});
export default tagSlice.reducer;
