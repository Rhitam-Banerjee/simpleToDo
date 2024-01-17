/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { showTask, showTaskEdit } from "../Features/Users/userSlice";
const Task = ({ task }) => {
  const { title, date, list, isComplete } = task;
  const { Items } = useSelector((store) => store.listItems);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col justify-between py-4 px-2 text-primary_transparent font-bold cursor-pointer relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-base_transparent"
      onClick={() => {
        dispatch(showTaskEdit());
        dispatch(showTask(task));
      }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center text-[0.8rem]">
          <input
            type="checkbox"
            name="Complete"
            value={isComplete}
            className="mr-3 accent-green-500"
          />
          <div>
            <span>{title}</span>
          </div>
        </div>
        <div>
          <IoIosArrowForward className="text-primary" />
        </div>
      </div>
      <div className="flex flex-row justify-start text-[0.6rem] ml-[7px] mt-[20px] ">
        <div className="flex flex-row justify-start items-center w-[100px] ml-4 border-tertiary_transparent border-r-[1px]">
          <MdOutlineDateRange className="text-[1rem] mr-2 mb-[1px]" />
          <span>{date}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-[100px] ml-4">
          <div
            className={`w-[13px] h-[13px] mr-2 rounded-sm`}
            style={{
              background: `${Items.filter(
                (listItems) => listItems.listName === list
              ).map((item) => item.color)}`,
            }}
          ></div>
          <span>{list}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
