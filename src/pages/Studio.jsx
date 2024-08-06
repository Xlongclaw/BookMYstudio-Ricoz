import React, { useState } from "react";
import Footer from "../components/Footers";
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
import backarrow from "../assets/backarrow.svg";
import bold from "../assets/bold.svg";
import color from "../assets/color.svg";
import underline from "../assets/underline.svg";
import code from "../assets/code.svg";
import italic from "../assets/italic.svg";
import dash1 from "../assets/dash1.svg";
import dash2 from "../assets/dash2.svg";
import dash3 from "../assets/dash3.svg";
import cross from "../assets/cross.svg";
import dropdown from "../assets/dropdown.svg";
import formatdash from "../assets/formatdash.svg";
import { Outlet, useNavigate } from "react-router-dom";

const Studio = () => {
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

  // description
  const [description, setDescription] = useState("");
  const [format, setFormat] = useState("");

  const applyFormat = (style) => {
    let formattedDescription = description;
    switch (style) {
      case "bold":
        formattedDescription = `<strong>${description}</strong>`;
        break;
      case "italic":
        formattedDescription = `<em>${description}</em>`;
        break;
      case "underline":
        formattedDescription = `<u>${description}</u>`;
        break;
      case "code":
        formattedDescription = `<code>${description}</code>`;
        break;
      default:
        break;
    }
    setFormat(formattedDescription);
  };
  return (
    <div>
      <NavbarDashboard />
      <Outlet />
      <div className="flex">
        <div className="w-[18vw] shadow-xl rounded-lg mt-10">
          <div className="ml-4">
            <button
              className=" bg-blue-600 text-white py-1 rounded-lg w-full sm:w-[13rem] pr-5 flex "
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
        <div className=" w-[82vw]">
          <div className="flex mt-3 mx-3 py-1">
            <img
              className="w-5 h-5 mt-1"
              src={backarrow}
              alt=""
              onClick={backDashboard}
            />
            <p className=" font-semibold ml-4 text-lg">Add studio</p>
            <div className="ml-auto">
              <button className=" bg-slate-500 text-white py-2 px-4 rounded-lg shadow-xl mx-4">
                Discard
              </button>
              <button className="py-2 px-4 rounded-lg shadow-2xl border-slate-400 bg-white mx-4 mr-12 ">
                Save
              </button>
            </div>
          </div>
          <div className="flex">
            <div className=" w-[50vw] mx-12 mt-4">
              <div className="px-4 py-4 border border-slate-400 shadow-lg rounded-lg">
                <p className="text-lg">Add Location</p>
                <input
                  className="w-full border border-slate-200 shadow-2xl py-2 font-semibold rounded-md px-4 mt-2"
                  type="text"
                  placeholder="Pune"
                />
                <p className="text-lg mt-2">Add Title</p>
                <input
                  className="w-full border border-slate-200 shadow-2xl py-2 font-semibold rounded-md px-4 mt-2"
                  type="text"
                  placeholder="Dance Studio"
                />

                <p className="text-lg mt-2">Description</p>
                <div className="container mx-auto p-4">
                  <div className="flex justify-between mb-4 bg-slate-300">
                    <p className=" text-slate-500 py-2 px-4">Paragraph |</p>
                    <button
                      className=" py-2 px-4"
                      onClick={() => applyFormat("bold")}
                    >
                      <img className="w-5 h-5" src={bold} alt="" />
                    </button>
                    <button
                      className=" py-2 px-4"
                      onClick={() => applyFormat("italic")}
                    >
                      <img className="w-5 h-5" src={italic} alt="" />
                    </button>
                    <button
                      className="py-2 px-4 "
                      onClick={() => applyFormat("underline")}
                    >
                      <img className="w-5 h-5" src={underline} alt="" />
                    </button>
                    <button className="py-2 px-4">
                      <img className="w-5 h-5" src={color} alt="" />
                    </button>
                    <button className="py-2 px-4 ">
                      <img className="w-5 h-5" src={formatdash} alt="" />
                    </button>
                    <button
                      className=" py-2 px-4"
                      onClick={() => applyFormat("code")}
                    >
                      <img className="w-5 h-5" src={code} alt="" />
                    </button>
                  </div>
                  <div
                    contentEditable="true"
                    className="border border-gray-400 rounded px-3 py-2 mb-4 h-[17rem]"
                    dangerouslySetInnerHTML={{ __html: format }}
                    onInput={(e) => setDescription(e.target.innerText)}
                  />
                </div>
              </div>
              <div className="px-4 py-4 border border-slate-400 shadow-lg rounded-lg mt-4">
                <p className="text-2xl">Upload images or Videos</p>
                <div className="flex mt-8 justify-between">
                  <div className=" bg-slate-400 w-[12rem] h-[9rem] rounded-lg flex justify-center items-center">
                    <img className="mx-2" src={dash1} alt="" />
                  </div>
                  <img src={dash2} alt="" />
                  <img src={dash3} alt="" />
                </div>
              </div>
            </div>
            <div className=" w-[25vw] mt-4">
              <div className="px-4 py-4 border border-slate-400 shadow-lg rounded-xl">
                <p className="text-xl">Facilities</p>
                <div className="flex mt-4">
                  <div className=" bg-blue-500 py-1 px-3 flex  rounded-lg shadow-lg mx-3">
                    <p className="text-lg text-white">Easels</p>
                    <img className="mx-3 h-6 w-6 mt-1" src={cross} alt="" />
                  </div>
                  <div className=" bg-blue-500 py-1 px-3 flex rounded-lg shadow-lg">
                    <p className="text-lg text-white">Storage</p>
                    <img className="mx-3 h-6 w-6 mt-1" src={cross} alt="" />
                  </div>
                </div>
                <div className=" bg-blue-500 py-1 px-3 flex rounded-lg shadow-lg mx-3 mt-4 w-[12rem]">
                  <p className="text-lg text-white">Work Surfaces</p>
                  <img className="ml-3 h-6 w-6 mt-1" src={cross} alt="" />
                </div>
                <p className="text-lg text-blue-500 underline underline-offset-3 mt-4 ml-2">
                  See More
                </p>
              </div>
              <div className="px-4 py-4 border border-slate-400 shadow-lg rounded-xl mt-4">
                <p className="text-xl">Studio Type</p>
                <div class="relative mb-4">
                  <input
                    class="w-full border border-slate-200 shadow shrink py-2 rounded-md px-4 placeholder:text-black text-lg mt-4"
                    type="text"
                    placeholder="Dance"
                  />
                  <img
                    class="absolute top-0 right-0 mr-4 mt-8 z-20 w-4 h-4"
                    src={dropdown}
                    alt=""
                  />
                </div>
              </div>
              <div className="px-4 py-4 border border-slate-400 shadow-lg rounded-xl mt-4">
                <p className="text-xl">Status</p>
                <div class="relative mb-4">
                  <input
                    class="w-full border border-slate-200 shadow shrink py-2 rounded-md px-4 placeholder:text-black text-lg mt-4"
                    type="text"
                    placeholder="Available"
                  />
                  <img
                    class="absolute top-0 right-0 mr-4 mt-8 z-20 w-4 h-4"
                    src={dropdown}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
