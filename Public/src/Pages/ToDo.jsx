import { ToDoAll, ToDoMenu, ToDoTaskDetails } from "../Components";

const ToDo = () => {
  return (
    <section className="p-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row sm:flex-col items-center justify-center">
      <ToDoMenu />
      <ToDoAll />
      <ToDoTaskDetails />
    </section>
  );
};

export default ToDo;
