import { createSlice } from "@reduxjs/toolkit";
// import { host } from "../../utils/APIroutes";

const initialState = {
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
      console.log(payload);
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
  login,
  logOut,
  switchTask,
  showTaskEdit,
  closeTaskEdit,
  showTask,
} = userSlice.actions;
export default userSlice.reducer;
