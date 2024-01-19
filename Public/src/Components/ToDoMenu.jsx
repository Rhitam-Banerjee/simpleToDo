/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { menuItems } from "../constants";
import { MenuList } from "../Containers";
import { useDispatch, useSelector } from "react-redux";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { logOut } from "../Features/Users/userSlice";
import { useEffect, useState } from "react";
import { addListItems } from "../Features/ListItems/listItemsSlice";
const ToDoMenu = () => {
  const { username } = useSelector((store) => store.user);
  const { Items } = useSelector((store) => store.listItems);
  const [color, setColor] = useColor("cyan");
  const [isAddListFormVisible, setIsAddListFormVisible] = useState(false);
  const [newList, setNewList] = useState({
    listName: "",
    color: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    setNewList({
      listName: e.target[0].value,
      color: e.target[1].value,
    });
    setIsAddListFormVisible(false);
  };
  const handleLogout = () => {
    dispatch(logOut());
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    dispatch(addListItems(newList));
  }, [newList]);
  return (
    <div className="flex-1 flex flex-col justify-between bg-base h-full max-w-[250px] p-4 rounded-md overflow-y-auto menuContainer">
      <div>
        <div className="flex flex-row items-center justify-between relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-[0.1px] after:w-[90%] after:bg-tertiary_transparent">
          <h1 className="font-black text-[1.1rem] text-primary">{username}</h1>
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
          <div>
            <ul>
              {Items.map((list, index) => {
                const { listName, color } = list;
                return <MenuList key={index} title={listName} color={color} />;
              })}
            </ul>
            {isAddListFormVisible && (
              <>
                <form className="w-full" onSubmit={(e) => formSubmit(e)}>
                  <input
                    className="w-full rounded-md mb-4 p-2 font-bold text-[0.8rem] text-secondary outline-none"
                    type="text"
                    placeholder="Enter List name"
                  />
                  <label className="font-black text-[0.8rem] text-secondary">
                    Choose Color
                  </label>
                  <ColorPicker
                    color={color}
                    hideInput={["rgb", "hsv"]}
                    onChange={setColor}
                  />
                  <button
                    type="submit"
                    className="bg-secondary_transparent text-base font-bold !text-[0.8rem] mt-4 rounded-md px-2 py-1"
                  >
                    Add New
                  </button>
                </form>
                <button
                  className="bg-secondary_transparent text-base font-bold !text-[0.8rem] mt-4 rounded-md px-2 py-1"
                  onClick={() => setIsAddListFormVisible(false)}
                >
                  Cancel
                </button>
              </>
            )}
            {!isAddListFormVisible && (
              <div
                className="flex flex-row items-center justify-start cursor-pointer p-2 text-secondary"
                onClick={() => setIsAddListFormVisible(true)}
              >
                <TiPlus className="mr-3 w-[15px] " />
                <span className="font-bold text-[0.8rem]">Add New List</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 cursor-pointer max-w-max">
          <Link
            to="/settings"
            className="flex flex-row items-center justify-start"
          >
            <LuSettings2 className="mr-2" />
            <span className="font-bold text-secondary text-[0.8rem]">
              Settings
            </span>
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
