import { useSelector } from "react-redux";
import { TodayTask, AllTask } from "../Containers";

const ToDoAll = () => {
  const { tabToShow } = useSelector((store) => store.user);
  return (
    <>
      {tabToShow === "All" && <AllTask />}
      {tabToShow === "Today" && <TodayTask />}
    </>
  );
};

export default ToDoAll;
