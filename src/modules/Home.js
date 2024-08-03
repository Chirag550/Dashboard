import React from "react";
import { Link } from "react-router-dom";
import DashboardOverViewCard from "../components/cards/overviewcards";
import SubscribersChart from "../components/charts/SubsribersChart";
import RecentOrders from "../components/RecentOrders.js/RecentOrders";
import { PiUsersFourLight } from "react-icons/pi";
import { Box, CircularProgress } from "@mui/material";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaGgCircle } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import Feedback from "../components/Feedback/Feedback";

const CircularProgressWithLabel = ({ open, value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={65}
        color={value && value > 60 ? "info" : "error"}
        thickness={6}
        style={{ zIndex: 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const Home = () => {
  return (
    <div className="p-0.5 w-[100%] md:w-[100%] bg-gray-900">
      <h1 className="text-3xl text-surface-900 text-white font-medium">
        Dashboard 👋
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[55vw] min-h-[88vh] ">
          <br />
          <DashboardOverViewCard />
          <br />
          <SubscribersChart />
          <br />
          <RecentOrders />
        </div>
        <div className="md:w-[35vw] md:p-5 pt-6">
          <div className="w-[85vw] md:w-full bg-gray-800 rounded-sm shadow p-3 md:p-5 md:m-1">
            <div className="flex items-center justify-between ">
              <div className="">
                <PiUsersFourLight className="dark:text-[#45CBA0] text-[#000] text-[30px]" />
                <h5 className="pt-1 font-Poppins m-1 dark:text-[#fff] text-black text-xl md:text-4xl">
                  $6345.76
                </h5>
                <div className="h-[30px] m-1 flex min-w-[10px] items-end rounded-full">
                  <span className="text-[#761717]">
                    <IoIosArrowDropdownCircle />
                  </span>
                  <span className="text-sm pl-1 text-white">3%</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div>
                  <CircularProgressWithLabel
                    value={70}
                    className="absolute bg-gray-500"
                  />
                  <span className="text-center relative text-white bottom-6 right-11">
                    70%
                  </span>
                </div>
                <div className="text-xs text-white">
                  *the values here have been rounded off
                </div>
              </div>
            </div>
          </div>
          <br />

          {/* Need help? */}
          <div className="w-[85vw] md:w-full bg-gray-800 md:h-[48vh] flex flex-col items-center  rounded p-7 my-1">
            <div className="h-[7vh] w-full m-4 flex items-center justify-between">
              <div className="flex items-center justify-between">
                <FaGgCircle className="w-[50px] h-[50px] text-cyan-700 cursor-pointer rounded-full border-r-1 m-2 p-1 bg-cyan-300" />
                <span className="text-white text-xl md:text-2xl">Goals</span>
              </div>
              <div className="h-[30px] flex p-2 items-end bg-red-200 rounded-full">
                <IoIosArrowDroprightCircle className="text-[#2b2929] cursor-pointer" />
              </div>
            </div>

            <div className="h-[7vh] w-full m-4 flex items-center justify-between">
              <div className="flex items-center justify-between">
                <MdOutlineFoodBank className="w-[50px] h-[50px] text-red-900 cursor-pointer rounded-full border-r-1 m-2 p-1 bg-red-400" />
                <span className="text-white text-xl md:text-2xl">
                  Popular dishes
                </span>
              </div>
              <div className="h-[30px] flex p-2 items-end bg-red-200 rounded-full">
                <IoIosArrowDroprightCircle className="text-[#2b2929] cursor-pointer" />
              </div>
            </div>

            <div className="h-[7vh] w-full m-4 flex items-center justify-between">
              <div className="flex items-center justify-between">
                <RiMenuSearchFill className="w-[50px] h-[50px] text-violet-900 cursor-pointer rounded-full border-r-1 m-2 p-1 bg-violet-300" />
                <span className="text-white text-xl md:text-2xl">Menus</span>
              </div>
              <div className="h-[30px] flex p-2 items-end bg-red-200 rounded-full">
                <IoIosArrowDroprightCircle className="text-[#2b2929] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-7">
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
