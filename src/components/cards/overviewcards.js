import { IoMdArrowUp } from "react-icons/io";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { BsFillBagCheckFill } from "react-icons/bs";

import { BsFillBagXFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
const DashboardOverViewCard = () => {
  return (
    <div className="w-[100%] md:w-[67vw] flex-col md:flex-row  flex  ">
      {/* subscribers */}
      <div className="w-[100%] md:w-[20%] m-1 border-gray-800 p-5 text-lg bg-gray-800 ">
        <div className="flex items-end justify-between">
          <div className="w-full flex flex-col items-center justify-between">
            <div className="">
              <IoMdCart className="w-[50px] h-[50px] text-blue-900 cursor-pointer rounded-full border-r-1 m-1 p-1 bg-blue-600" />
            </div>
            <h5 className="text-sm text-white">Orders</h5>
            <span className="text-sm text-white p-2"> 75</span>
          </div>
          <div className="h-[30px] flex p-2 items-end bg-[#DCFCE6] rounded-full">
            <span className="text-[#21C55D]">
              <IoIosArrowDropupCircle />
            </span>
            <span className="text-sm pl-1">3%</span>
          </div>
        </div>
      </div>

      {/* Open Rate */}
      <div className="w-[100%] md:w-[20%] m-1 border-gray-900 p-5 text-lg bg-gray-800 ">
        <div className="flex items-end justify-between">
          <div className="w-full flex flex-col items-center justify-between">
            <div className="">
              <BsFillBagCheckFill className="w-[50px] h-[50px] text-cyan-700 cursor-pointer rounded-full border-r-1 m-1 p-1 bg-cyan-300" />
            </div>
            <h5 className="text-sm text-white">Delivered</h5>
            <span className="text-sm text-white p-2"> 75</span>
          </div>
          <div className="h-[30px] flex p-2 items-end bg-red-200 rounded-full">
            <span className="text-[#761717]">
              <IoIosArrowDropdownCircle />
            </span>
            <span className="text-sm pl-1">3%</span>
          </div>
        </div>
      </div>

      {/* Click Rate */}
      <div className="w-[100%] md:w-[20%] m-1 border-gray-900 p-5 text-lg bg-gray-800 ">
        <div className="flex items-end justify-between">
          <div className="w-full flex flex-col items-center justify-between">
            <div className="">
              <BsFillBagXFill className="w-[50px] h-[50px] text-red-900 cursor-pointer rounded-full border-r-1 m-1 p-1 bg-red-500" />
            </div>
            <h5 className="text-sm text-white">Cancelled</h5>
            <span className="text-sm text-white p-2"> 75</span>
          </div>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <span className="text-[#21C55D]">
              <IoIosArrowDropupCircle />
            </span>
            <span className="text-sm pl-1">3%</span>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[20%] m-1 border-gray-900 p-5 text-lg bg-gray-800 ">
        <div className="flex items-end justify-between">
          <div className="w-full flex flex-col items-center justify-between">
            <div className="">
              <FaMoneyBillTrendUp className="w-[50px] h-[50px] text-purple-900 cursor-pointer rounded-full border-r-1 m-1 p-1 bg-purple-600" />
            </div>
            <h5 className="text-sm  text-white">Revenue</h5>
            <span className="text-sm text-white p-2"> 75</span>
          </div>
          <div className="h-[30px] flex p-2 items-center bg-red-200 rounded-full">
            <span className="text-[#761717]">
              <IoIosArrowDropdownCircle />
            </span>
            <span className="text-sm pl-1">3%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverViewCard;
