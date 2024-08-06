import React, { useState } from "react";

import NavbarDashboard from "../components/NavbarDashboard";
import dashboardicon from "../assets/dashboardicon.svg";
import user from "../assets/user.svg";
import leftarrowdash from "../assets/leftarrowdash.svg";
import cameradash from "../assets/cameradash.svg";
import content from "../assets/content.svg";
import communication from "../assets/communication.svg";
import finance from "../assets/finance.svg";
import docs from "../assets/docs.svg";
import settingdash from "../assets/settingdash.svg";
import report from "../assets/report.svg";
import maintenance from "../assets/maintenance.svg";
import isOpenarrow from "../assets/isOpenarrow.svg";
import openCamera from "../assets/openCamera.svg";

import { Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const openDashboardStudio = () => {
    navigate("/dashboard/studio");
  };

  const openDashboardUser = () => {
    navigate("/dashboard/users");
  };

  

  const [isOpen, setIsOpen] = useState(false);

  const opentoggledropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavbarDashboard />
      <Outlet />

      <div className="flex">
        <div className="w-[18vw] shadow-xl rounded-lg mt-10">
          <div className="ml-4">
            <button className=" bg-blue-600 text-white py-1 rounded-lg w-full sm:w-[13rem] pr-5 flex">
              <img className="mx-2" src={dashboardicon} alt="" /> Dashboard
            </button>
            <p className=" text-slate-400 mt-4 ml-3">Pages</p>
            <button
              className="my-6 text-slate-400 flex w-full sm:w-[12rem]"
              onClick={openDashboardUser}
            >
              <img className="mx-3 mt-1" src={user} alt="" />
              Users
              <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
            </button>
            <button
              className={` w-full sm:w-[12rem] ${
                isOpen
                  ? " bg-blue-500 py-2 pr-4 rounded-lg text-white mb-6"
                  : "text-slate-400 "
              }`}
              onClick={opentoggledropdown}
            >
              <div className="relative flex">
                {isOpen ? (
                  <img className="mx-3" src={openCamera} alt="" />
                ) : (
                  <img className="mx-3 " src={cameradash} alt="" />
                )}
                Studios
                {isOpen ? (
                  <img className="mt-2 ml-auto" src={isOpenarrow} alt="" />
                ) : (
                  <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
                )}
                <div className="absolute">
                  {isOpen && (
                    <div className="absolute w-[10rem] rounded-lg mt-7">
                      <button className=" cursor-pointer text-slate-400 mt-1">
                        Listed Studio
                      </button>
                      <button
                        onClick={openDashboardStudio}
                        className=" cursor-pointer text-blue-500"
                      >
                        Add New Studio
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </button>
            <button
              className={` text-slate-400 flex w-full sm:w-[12rem] ${
                isOpen ? "mt-8" : "mt-4"
              }`}
            >
              <img className="mx-3 " src={content} alt="" />
              Content
              <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
            </button>
            <button className="my-6 text-slate-400 flex w-full sm:w-[12rem]">
              <img className="mx-3 " src={communication} alt="" />
              Communication
              <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
            </button>
            <button className="my-6 text-slate-400 flex w-full sm:w-[12rem]">
              <img className="mx-3 " src={finance} alt="" />
              Finance
              <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
            </button>
            <button className="my-6 text-slate-400 flex w-full sm:w-[12rem]">
              <img className="mx-3 " src={docs} alt="" />
              Docs
              <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
            </button>
            <button className="my-6 text-slate-400 flex w-full sm:w-[12rem]">
              <img className="mx-3 " src={settingdash} alt="" />
              Settingdash
              <img className="mt-2 ml-auto" src={leftarrowdash} alt="" />
            </button>
            <button className="my-6 text-slate-400 flex w-full sm:w-[12rem]">
              <img className="mx-3 " src={report} alt="" />
              Report
            </button>
            <button className="my-6 text-slate-400 flex w-full sm:w-[12rem]">
              <img className="mx-3 " src={maintenance} alt="" />
              Maintenance
            </button>
          </div>
        </div>
        <div className=" w-[82vw]"></div>
      </div>
    </div>
  );
};

export default Dashboard;
