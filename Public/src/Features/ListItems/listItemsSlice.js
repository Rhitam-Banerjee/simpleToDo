import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Items: [
    {
      listName: "Important",
      color: "rgb(247, 255, 0)",
    },
    {
      listName: "Personal",
      color: "rgb(255, 114, 0)",
    },
    {
      listName: "Work",
      color: "rgb(0, 211, 255)",
    },
  ],
};
const listItemsSlice = createSlice({
  name: "listItems",
  initialState,
  reducers: {
    addListItems: (state, { payload }) => {
      if (payload.listName !== "") {
        state.Items = [...state.Items, payload];
      }
    },
  },
});
export const { addListItems } = listItemsSlice.actions;
export default listItemsSlice.reducer;
