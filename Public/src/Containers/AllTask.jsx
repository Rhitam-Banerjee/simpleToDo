import { TiPlus } from "react-icons/ti";
import { Task } from ".";
import { useSelector } from "react-redux";
const AllTask = () => {
  const tasks = useSelector((store) => store.task);
  const handleClick = () => {
    // console.log(e.target);
  };
  return (
    <div className="flex-1 flex flex-col justify-between h-full min-w-[200px] p-4 pt-0 rounded-md overflow-y-auto menuContainer">
      <div className="pb-8">
        <div className="flex flex-row items-center justify-between w-max">
          <h1 className="font-bold text-[2.5rem] text-primary">All</h1>
          <div className="mt-[8px] ml-3 w-[30px] h-[30px] border-tertiary_transparent_max border-2 grid place-items-center rounded-md">
            <span className="text-secondary font-bold">10</span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-row items-center justify-start cursor-pointer p-2 text-secondary border-tertiary_transparent_max border-2 rounded-md">
          <TiPlus className="mr-3 w-[15px] " />
          <span className="font-bold text-[0.8rem]">Add New Task</span>
        </div>
        <div>
          {tasks.map((task, index) => {
            return <Task key={index} task={task} handleClick={handleClick} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
