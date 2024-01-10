import { menuList, allTasks, calader } from "../assets";
export const menuItems = [
  {
    title: "All Tasks",
    icon: allTasks,
  },
  {
    title: "Today",
    icon: menuList,
  },
  {
    title: "Calander",
    icon: calader,
  },
];
export const listItems = [
  {
    title: "Personal",
    color: "red",
  },
  {
    title: "Work",
    color: "blue",
  },
];
export const tagItems = [
  {
    title: "Tag 1",
    color: "blue",
  },
  {
    title: "Tag 2",
    color: "red",
  },
];
export const tasks = [
  {
    title: "Research Content Idea",
    description:
      "Talk to the barber and get how to contribute to his internet presence",
    date: "2017-06-01",
    list: "Personal",
    tags: "Tag 1",
    subTasks: ["Cut hair", "Submit the research docs. to him"],
    isComplete: false,
  },
  {
    title: "Create a database for project",
    description:
      "Help client customize his own database and demonstrate the use",
    date: "2019-05-21",
    list: "Work",
    tags: "Tag 1",
    subTasks: ["Deploy Application on Supabase"],
    isComplete: false,
  },
  {
    title: "Consult Accountat",
    description: "Talk to the accountant and get how to renew liscence",
    date: "2019-05-11",
    list: "Work",
    tags: "Tag 2",
    subTasks: [],
    isComplete: false,
  },
  {
    title: "Print Business Card",
    description: "Design and Print Business Cards",
    date: "2020-09-25",
    list: "Personal",
    tags: "Tag 2",
    subTasks: [],
    isComplete: false,
  },
];
