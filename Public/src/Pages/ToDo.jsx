import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToDoAll, ToDoMenu, ToDoTaskDetails } from "../Components";
import { login } from "../Features/Users/userSlice";
import { useDispatch } from "react-redux";
const ToDo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("ToDo-user")) navigate("/login");
  }, []);
  useEffect(() => {
    const { username } = JSON.parse(localStorage.getItem("ToDo-user"));
    dispatch(login(username));
  }, []);
  return (
    <section className="p-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row sm:flex-col items-center justify-center">
      <ToDoMenu />
      <ToDoAll />
      <ToDoTaskDetails />
    </section>
  );
};

export default ToDo;
