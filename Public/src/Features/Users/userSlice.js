import { createSlice } from "@reduxjs/toolkit";
// import { host } from "../../utils/APIroutes";

const initialState = {
  userId: "",
  username: "",
  tabToShow: "All",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.username = actions.payload;
    },
    logOut: (state) => {
      state.username = "";
    },
    switchTask: (state, actions) => {
      state.tabToShow = actions.payload;
    },
  },
});
export const { login, logOut, switchTask } = userSlice.actions;
export default userSlice.reducer;
