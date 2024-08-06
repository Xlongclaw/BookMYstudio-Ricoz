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
import Footer from "../components/Footers";
import { Outlet, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const openDashboardStudio = () => {
    navigate("/dashboard/studio");
  };

  const openDashboardUser = () => {
    navigate("/dashboard/users");
  };

  const backDashboard = () => {
    navigate("/dashboard");
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
            <button
              className=" bg-blue-600 text-white py-1 rounded-lg w-full sm:w-[13rem] pr-5 flex"
              onClick={backDashboard}
            >
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
        <div className=" w-[82vw] mx-5 mt-4">
          <p className=" text-xl font-semibold">Users List</p>

          <div className="flex flex-col mt-5">
            {/* <!-- First Row --> */}
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sr. no
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          User Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {/* <!-- Second Row --> */}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">1</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Emily Johnson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          emilyjohnson@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Daniel Martinez
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          daniel123@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Sophia William
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">Online</td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          sophia2004@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">4</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Liam Anderson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          LiamAnderson@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">5</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Ava Thompson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap ">Online</td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          avathompson123@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">6</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Emily Johnson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          emilyjohnson@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">7</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Daniel Martinez
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          daniel123@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">8</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Sophia William
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">Online</td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          sophia2004@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">9</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Liam Anderson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          LiamAnderson@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Ava Thompson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap ">Online</td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          avathompson123@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">11</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Emily Johnson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          emilyjohnson@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">12</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Daniel Martinez
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          daniel123@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">13</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Sophia William
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">Online</td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          sophia2004@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">14</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Liam Anderson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-green-500">
                          Online
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          LiamAnderson@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">15</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Ava Thompson
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap ">Online</td>
                        <td class="px-6 py-4 whitespace-nowrap text-blue-500">
                          avathompson123@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button className="px-4 py-1 bg-blue-200 text-blue-600 rounded-lg font-semibold">
                            View More
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Users;
