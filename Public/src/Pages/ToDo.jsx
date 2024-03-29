import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToDoAll, ToDoMenu, ToDoTaskDetails } from "../Components";
import { login } from "../Features/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../assets";
const ToDo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { taskEditShow } = useSelector((store) => store.user);
  useEffect(() => {
    if (!localStorage.getItem("ToDo-user")) navigate("/login");
  }, []);
  useEffect(() => {
    if (localStorage.getItem("ToDo-user")) {
      const { _id, username } = JSON.parse(localStorage.getItem("ToDo-user"));
      dispatch(login({ _id, username }));
    }
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section className="p-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row sm:flex-col items-center justify-center overflow-hidden">
      {isLoading ? (
        <img src={Loader} alt="loader" />
      ) : (
        <>
          <ToDoMenu />
          <ToDoAll />
          {taskEditShow && <ToDoTaskDetails />}
        </>
      )}
    </section>
  );
};

export default ToDo;
