import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToDoAll, ToDoMenu, ToDoTaskDetails } from "../Components";
import { login } from "../Features/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
const ToDo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { taskEditShow } = useSelector((store) => store.user);
  useEffect(() => {
    if (!localStorage.getItem("ToDo-user")) navigate("/login");
  }, []);
  useEffect(() => {
    const { _id, username } = JSON.parse(localStorage.getItem("ToDo-user"));
    dispatch(login({ _id, username }));
  }, []);
  return (
    <section className="p-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row sm:flex-col items-center justify-center overflow-hidden">
      <ToDoMenu />
      <ToDoAll />
      {taskEditShow && <ToDoTaskDetails />}
    </section>
  );
};

export default ToDo;
