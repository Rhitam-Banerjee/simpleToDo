import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    editTask: (state, { payload }) => {
      const { tasks } = state;
      const newTask = tasks
        .filter((task) => task.id === payload.id)
        .map((task) => {
          return JSON.parse(JSON.stringify(task));
        });
      const keysArrPayload = Object.keys(payload);
      keysArrPayload.map((key) => {
        newTask[0][`${key}`] = payload[`${key}`];
      });
      state.tasks.map((task) => {
        if (task.id === payload.id) {
          keysArrPayload.forEach((key) => {
            task[`${key}`] = newTask[0][`${key}`];
          });
        }
      });
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
  },
});
export const { addTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
