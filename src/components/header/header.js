import React from "react";

import { MdDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import NavItems from "./navitems";
import { MdMenu } from "react-icons/md";

const Header = ({ toggleSidebar }) => {
  return (
    <>
      <header className="w-full sticky top-0 left-0 md:z-[999] z-[999] px-1.5 flex items-center justify-between h-[13vh] md:h-[11vh] bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <div className="px-2">
            <MdDashboard className="hidden md:block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cyan-700 cursor-pointer" />
            <MdMenu
              className="md:hidden w-8 h-8 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          <div className="relative text-sm md:text-xl flex items-center">
            <FaSearch className="absolute left-4 text-gray-500" />
            <input
              id="searchInput"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center pr-7 space-x-4">
          <NavItems />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.BHI-bf_xIJUNIsSCsVH58AHaHa&pid=Api&P=0&h=180"
            alt=""
            width={40}
            height={40}
            className="md:w-10 md:h-10 w-8 h-8 bg-gray-500 rounded-full text-gray-700 cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
