import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    {
      id: 1,
      title: "Research Content Idea",
      description:
        "Talk to the barber and get how to contribute to his internet presence",
      date: "2017-06-01",
      list: "Important",
      subTasks: ["Cut hair", "Submit the research docs. to him"],
      isComplete: false,
    },
    {
      id: 2,
      title: "Create a database for project",
      description:
        "Help client customize his own database and demonstrate the use",
      date: "2019-05-21",
      list: "Work",
      subTasks: ["Deploy Application on Supabase"],
      isComplete: false,
    },
    {
      id: 3,
      title: "Consult Accountat",
      description: "Talk to the accountant and get how to renew liscence",
      date: "2019-05-11",
      list: "Work",
      subTasks: [],
      isComplete: true,
    },
    {
      id: 4,
      title: "Print Business Card",
      description: "Design and Print Business Cards",
      date: "2020-09-25",
      list: "Personal",
      subTasks: [],
      isComplete: false,
    },
  ],
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    editTask: (state, { payload }) => {
      // console.log(state.tasks.filter((task) => task.id === payload.id));
      console.log(payload.id);
    },
  },
});
export const { editTask } = taskSlice.actions;
export default taskSlice.reducer;
