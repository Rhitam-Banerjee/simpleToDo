import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    title: "Personal",
    color: "red-300",
    notification: 4,
  },
  {
    title: "Work",
    color: "blue-300",
    notification: 5,
  },
  {
    title: "Important",
    color: "yellow-300",
    notification: 1,
  },
];
const listItemsSlice = createSlice({
  name: "listItems",
  initialState: initialState,
});
export default listItemsSlice.reducer;
