import { useSelector } from "react-redux";
import { TaskEdit } from "./";
import AddTask from "./AddTask";
const ToDoTaskDetails = () => {
  const { taskDetail } = useSelector((store) => store.user);
  return (
    <div className="flex-1 flex flex-col justify-start bg-base h-full max-w-[500px] p-4 rounded-md overflow-y-auto menuContainer">
      {taskDetail === "Edit" && <TaskEdit />}
      {taskDetail === "Add" && <AddTask />}
    </div>
  );
};

export default ToDoTaskDetails;
