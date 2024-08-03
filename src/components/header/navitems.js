import { navItems } from "../../configs/constants";

const NavItems = () => {
  return (
    <div className="w-full flex  md:flex items-center">
      {navItems.map((i, index) => (
        <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-gray-500 rounded-full text-gray-700 ml-2  md:m-2 cursor-pointer">
          {i.icons}
        </div>
      ))}
    </div>
  );
};

export default NavItems;
