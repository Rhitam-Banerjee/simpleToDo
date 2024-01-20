import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeTaskEdit } from "../Features/Users/userSlice";
import { MdAddTask } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../Features/Task/taskSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const { Items } = useSelector((store) => store.listItems);
  const [addTaskDetails, setAddTaskDetails] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    date: "",
    list: Items[0].listName,
    isComplete: false,
  });
  const toastPreference = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };
  const handleChandeTaskDetails = (e) => {
    setAddTaskDetails({ ...addTaskDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = addTaskDetails;
    if (title.trim().length === 0 || description.trim().length === 0) {
      toast.error("Fields cannot be blank", toastPreference);
    } else {
      dispatch(addTask({ ...addTaskDetails }));
      dispatch(closeTaskEdit());
      setAddTaskDetails({});
    }
  };
  return (
    <>
      <div className="pb-8">
        <div className="flex flex-row items-center justify-between relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
          <h1 className="font-black text-[1.1rem] text-primary">Edit Task:</h1>
          <MdAddTask />
        </div>
      </div>
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col items-start justify-start">
          <label
            className="font-black text-[0.8rem] text-secondary"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
            type="text"
            id="title"
            name="title"
            required={true}
            value={addTaskDetails.title}
            onChange={(e) => handleChandeTaskDetails(e)}
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <label
            className="font-black text-[0.8rem] text-secondary"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
            name="description"
            id="description"
            required={true}
            value={addTaskDetails.description}
            onChange={(e) => handleChandeTaskDetails(e)}
            rows="10"
          ></textarea>
        </div>
        <div className="flex flex-col items-start justify-start">
          <label
            className="font-black text-[0.8rem] text-secondary"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
            type="date"
            name="date"
            id="date"
            required={true}
            value={addTaskDetails.date}
            onChange={(e) => handleChandeTaskDetails(e)}
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <label
            className="font-black text-[0.8rem] text-secondary"
            htmlFor="list"
          >
            List
          </label>
          <select
            className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
            name="list"
            id="list"
            value={addTaskDetails.list}
            onChange={(e) => handleChandeTaskDetails(e)}
          >
            {Items.map((item, index) => {
              const { listName } = item;
              return (
                <option key={index} value={listName}>
                  {listName}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="ml-auto w-max bg-secondary_transparent text-base font-bold !text-[0.8rem] mt-4 rounded-md px-2 py-1"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <button
        className="ml-auto w-max bg-secondary_transparent text-base font-bold !text-[0.8rem] mt-4 rounded-md px-2 py-1"
        onClick={() => dispatch(closeTaskEdit())}
      >
        Cancle
      </button>
      <ToastContainer />
    </>
  );
};

export default AddTask;
