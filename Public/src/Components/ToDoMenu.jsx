import { useNavigate } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { listItems, menuItems, tagItems } from "../constants";
import MenuList from "../Containers/MenuList";
import { useEffect } from "react";
const ToDoMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    if (!localStorage.getItem("ToDo-user")) navigate("/login");
  }, []);
  return (
    <div className="flex-1 flex flex-col justify-between bg-base h-full max-w-[250px] p-4 rounded-md overflow-y-auto menuContainer">
      <div>
        <div className="flex flex-row items-center justify-between relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
          <h1 className="font-black text-primary">Menu</h1>
          <PiHamburger />
        </div>
        <div className="mt-8">
          <h3 className="font-black text-[0.6rem] text-secondary mb-4">TASK</h3>
          <div className="relative after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
            <ul>
              {menuItems.map((list, index) => {
                const { title, icon } = list;
                return <MenuList key={index} title={title} icon={icon} />;
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-black text-[0.6rem] text-secondary mb-4">
            LISTS
          </h3>
          <div className="relative after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
            <ul>
              {listItems.map((list, index) => {
                const { title, color } = list;
                return <MenuList key={index} title={title} color={color} />;
              })}
            </ul>
            <div className="flex flex-row items-center justify-start cursor-pointer p-2">
              <CiCirclePlus className="mr-3 w-[15px]" />
              <span className="font-bold text-secondary text-[0.8rem]">
                Add New List
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-black text-[0.6rem] text-secondary mb-4">TAGS</h3>
          <div>
            <ul className="flex flex-row gap-4">
              {tagItems.map((tag, index) => {
                const { title, color } = tag;
                return (
                  <li
                    key={index}
                    className={`bg-${color}-200 p-2 font-bold text-[0.8rem] rounded-md text-primary`}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="mt-10 flex flex-row items-center justify-start cursor-pointer max-w-max"
        onClick={() => handleLogout()}
      >
        <TbLogout2 className="mr-2" />
        <span className="font-bold text-secondary text-[0.8rem]">Sign-Out</span>
      </div>
    </div>
  );
};

export default ToDoMenu;
