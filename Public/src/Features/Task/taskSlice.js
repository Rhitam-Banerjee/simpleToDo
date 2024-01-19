import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    {
      id: 1,
      title: "Research Content Idea",
      description:
        "Talk to the barber and get how to contribute to his internet presence",
      date: "2024-01-31",
      list: "Important",
      isComplete: false,
    },
    {
      id: 2,
      title: "Create a database for project",
      description:
        "Help client customize his own database and demonstrate the use",
      date: "12-18-2023",
      list: "Work",
      isComplete: false,
    },
    {
      id: 3,
      title: "Consult Accountat",
      description: "Talk to the accountant and get how to renew liscence",
      date: "12-18-2024",
      list: "Work",
      isComplete: true,
    },
    {
      id: 4,
      title: "Print Business Card",
      description: "Design and Print Business Cards",
      date: "1-18-2024",
      list: "Personal",
      isComplete: false,
    },
  ],
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
      console.log(payload);
    },
  },
});
export const { addTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
