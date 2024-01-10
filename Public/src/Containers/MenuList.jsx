/* eslint-disable react/prop-types */
const MenuList = ({
  title,
  icon = undefined,
  color = undefined,
  notification = undefined,
}) => {
  return (
    <li className="flex flex-row items-center justify-between p-2 cursor-pointer rounded-md hover:bg-tertiary group">
      <div className="flex flex-row items-center justify-start">
        {icon && <img className="w-[15px] mr-3" src={icon} alt={title} />}
        {color && (
          <div
            className={`h-[15px] w-[15px] bg-${color} mr-3 rounded-sm`}
          ></div>
        )}
        <span className="font-semibold text-[0.8rem] text-secondary">
          {title}
        </span>
      </div>
      {notification && (
        <div className="w-[15px] h-[15px] bg-tertiary group-hover:bg-base rounded-sm grid place-items-center">
          <span className="font-black text-[0.6rem] text-secondary">
            {notification}
          </span>
        </div>
      )}
    </li>
  );
};

export default MenuList;
