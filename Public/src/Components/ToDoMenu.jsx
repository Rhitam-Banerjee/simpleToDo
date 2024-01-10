import { Link, useNavigate } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { listItems, menuItems, tagItems } from "../constants";
import { MenuList } from "../Containers";
const ToDoMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex-1 flex flex-col justify-between bg-base h-full max-w-[250px] p-4 rounded-md overflow-y-auto menuContainer">
      <div>
        <div className="flex flex-row items-center justify-between relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
          <h1 className="font-black text-[1.1rem] text-primary">Menu</h1>
          <PiHamburger />
        </div>
        <div className="mt-8">
          <h3 className="font-black text-[0.6rem] text-secondary mb-4">TASK</h3>
          <div className="relative after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
            <ul>
              {menuItems.map((list, index) => {
                const { title, icon, notification } = list;
                return (
                  <MenuList
                    key={index}
                    title={title}
                    icon={icon}
                    notification={notification}
                  />
                );
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
                const { title, color, notification } = list;
                return (
                  <MenuList
                    key={index}
                    title={title}
                    color={color}
                    notification={notification}
                  />
                );
              })}
            </ul>
            <div className="flex flex-row items-center justify-start cursor-pointer p-2 text-secondary">
              <TiPlus className="mr-3 w-[15px] " />
              <span className="font-bold text-[0.8rem]">Add New List</span>
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
      <div>
        <div className="mt-10 flex flex-row items-center justify-start cursor-pointer max-w-max">
          <LuSettings2 className="mr-2" />
          <Link
            to="/settings"
            className="font-bold text-secondary text-[0.8rem]"
          >
            Settings
          </Link>
        </div>
        <div
          className=" mt-4 flex flex-row items-center justify-start cursor-pointer max-w-max"
          onClick={() => handleLogout()}
        >
          <TbLogout2 className="mr-2" />
          <span className="font-bold text-secondary text-[0.8rem]">
            Sign-Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToDoMenu;
