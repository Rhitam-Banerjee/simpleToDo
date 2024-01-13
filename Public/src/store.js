import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/Users/userSlice";
import listItemsSlice from "./Features/ListItems/listItemsSlice";
import tagSlice from "./Features/Tags/tagSlice";
import taskSlice from "./Features/Task/taskSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    listItems: listItemsSlice,
    tags: tagSlice,
    task: taskSlice,
  },
});
export { store };
