/* eslint-disable react/prop-types */
const Task = ({ task, handleClick }) => {
  const { title } = task;
  return <div onClick={handleClick}>{title}</div>;
};

export default Task;
