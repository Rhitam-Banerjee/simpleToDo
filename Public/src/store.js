import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/Users/userSlice";
import listItemsSlice from "./Features/ListItems/listItemsSlice";
import taskSlice from "./Features/Task/taskSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    listItems: listItemsSlice,
    task: taskSlice,
  },
});
export { store };
