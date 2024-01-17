import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Items: [],
};
const listItemsSlice = createSlice({
  name: "listItems",
  initialState,
  reducers: {
    addListItems: (state, { payload }) => {
      if (payload.listName !== "") {
        state.Items = [...state.Items, payload];
        console.log(state.Items);
      }
    },
  },
});
export const { addListItems } = listItemsSlice.actions;
export default listItemsSlice.reducer;
