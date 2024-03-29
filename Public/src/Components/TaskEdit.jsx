import { MdAddTask } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closeTaskEdit } from "../Features/Users/userSlice";
import { useState } from "react";
import { editTask } from "../Features/Task/taskSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskEdit = () => {
  const { tasktoShow } = useSelector((store) => store.user);
  const { Items } = useSelector((store) => store.listItems);
  const { id, title, description, date, list, isComplete } = tasktoShow;
  const [editedTask, setEditedTask] = useState({
    title: title,
    description: description,
    date: date,
    list: list,
    isComplete: isComplete,
  });
  const toastPreference = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };
  const dispatch = useDispatch();
  const handleChandeTaskDetails = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = editedTask;
    if (title.trim().length === 0 || description.trim().length === 0) {
      toast.error("Field cannot be empty", toastPreference);
    } else {
      dispatch(editTask({ ...editedTask, id: id }));
      dispatch(closeTaskEdit());
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
            id="title"
            className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
            type="text"
            name="title"
            value={editedTask.title}
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
            id="description"
            className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
            name="description"
            value={editedTask.description}
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
            id="date"
            name="date"
            value={editedTask.date}
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
            value={editedTask.list}
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
        <div className="flex flex-col items-start justify-start">
          <label
            htmlFor="isComplete"
            className="font-black text-[0.8rem] text-secondary"
          >
            Task
          </label>
          <div>
            <input
              id="isComplete"
              type="checkbox"
              name="isComplete"
              value={editedTask.isComplete}
              checked={editedTask.isComplete}
              onChange={(e) => handleChandeTaskDetails(e)}
            />
            {editedTask.isComplete ? (
              <h3>Task Completed</h3>
            ) : (
              <h3>Task Pending</h3>
            )}
          </div>
        </div>
        <button
          className="ml-auto w-max bg-secondary_transparent text-base font-bold !text-[0.8rem] mt-4 rounded-md px-2 py-1"
          type="submit"
        >
          Edit
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

export default TaskEdit;
