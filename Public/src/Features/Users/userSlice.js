import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTablet: "",
  userId: "",
  username: "",
  tabToShow: "All",
  taskEditShow: false,
  tasktoShow: {},
  taskDetail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsTablet: (state, { payload }) => {
      state.isTablet = payload;
    },
    login: (state, actions) => {
      state.userId = actions.payload._id;
      state.username = actions.payload.username;
    },
    logOut: (state) => {
      state.username = "";
    },
    switchTask: (state, actions) => {
      state.tabToShow = actions.payload;
    },
    showTaskEdit: (state, { payload }) => {
      state.taskEditShow = true;
      if (payload === "Add") state.taskDetail = "Add";
      else state.taskDetail = "Edit";
    },
    closeTaskEdit: (state) => {
      state.taskEditShow = false;
      state.tasktoShow = {};
    },
    showTask: (state, { payload }) => {
      state.tasktoShow = payload;
    },
  },
});
export const {
  setIsTablet,
  login,
  logOut,
  switchTask,
  showTaskEdit,
  closeTaskEdit,
  showTask,
} = userSlice.actions;
export default userSlice.reducer;
