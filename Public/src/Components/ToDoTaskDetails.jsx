import { MdAddTask } from "react-icons/md";
const ToDoTaskDetails = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-base h-full max-w-[500px] p-4 rounded-md overflow-y-auto menuContainer">
      <div>
        <div className="flex flex-row items-center justify-between relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
          <h1 className="font-black text-[1.1rem] text-primary">Task:</h1>
          <MdAddTask />
        </div>
      </div>
    </div>
  );
};

export default ToDoTaskDetails;
