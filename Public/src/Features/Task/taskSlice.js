import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    title: "Research Content Idea",
    description:
      "Talk to the barber and get how to contribute to his internet presence",
    date: "2017-06-01",
    list: "Important",
    tags: ["Tag 1", "Tag 2"],
    subTasks: ["Cut hair", "Submit the research docs. to him"],
    isComplete: false,
  },
  {
    title: "Create a database for project",
    description:
      "Help client customize his own database and demonstrate the use",
    date: "2019-05-21",
    list: "Work",
    tags: ["Tag 1"],
    subTasks: ["Deploy Application on Supabase"],
    isComplete: false,
  },
  {
    title: "Consult Accountat",
    description: "Talk to the accountant and get how to renew liscence",
    date: "2019-05-11",
    list: "Work",
    tags: ["Tag 2"],
    subTasks: [],
    isComplete: true,
  },
  {
    title: "Print Business Card",
    description: "Design and Print Business Cards",
    date: "2020-09-25",
    list: "Personal",
    tags: ["Tag 1", "Tag 2"],
    subTasks: [],
    isComplete: false,
  },
];
const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
});
export default taskSlice.reducer;
