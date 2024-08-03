import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { sidebarItems } from "../../configs/constants";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 min-h-[150vh] w-[40vw] md:w-[11vh] bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-[999] md:z-[0] md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="flex flex-col items-center mt-6">
          <MdClose
            className="md:hidden w-8 h-8 cursor-pointer self-end mr-4 mt-2 mb-4"
            onClick={toggleSidebar}
          />
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="w-full hover:bg-slate-750 hover:text-cyan-700 cursor-pointer hover:border-l-[#0e7490] hover:border-l-4 m-5 flex flex-col justify-center items-center"
            >
              <Link className="w-10 h-10" to={item.url}>
                {item.icons}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
