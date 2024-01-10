import { menuList, allTasks, calader } from "../assets";
export const menuItems = [
  {
    title: "All Tasks",
    icon: allTasks,
    notification: 10,
  },
  {
    title: "Today",
    icon: menuList,
    notification: 5,
  },
  {
    title: "Calander",
    icon: calader,
  },
];
export const listItems = [
  {
    title: "Personal",
    color: "red-300",
    notification: 4,
  },
  {
    title: "Work",
    color: "blue-300",
    notification: 5,
  },
  {
    title: "Important",
    color: "yellow-300",
    notification: 1,
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
