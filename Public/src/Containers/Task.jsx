/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { listItems } from "../constants";
const Task = ({ task, handleClick }) => {
  const { title, date, list, isComplete } = task;
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-between py-4 px-2 text-primary_transparent font-bold cursor-pointer relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-base_transparent"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center text-[0.8rem]">
          <input
            type="checkbox"
            checked={isComplete}
            readOnly={true}
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
            className={`w-[13px] h-[13px] bg-${listItems
              .filter((listCol) => listCol.title === list)
              .map((listCol) => listCol.color)} mr-2 rounded-sm`}
          ></div>
          <span>{list}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
