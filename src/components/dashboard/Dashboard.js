import React from "react";
import Header from "../header/header";
import Sidebar from "../Sidebar/sidebar";
import { useState } from "react";

const Dashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow flex-col md:flex-row mt-0">
        <Sidebar
          className="w-full md:w-1/4 lg:w-1/5"
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex-grow p-7">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
