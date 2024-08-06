import React, { useState } from "react";
import BooktourSchedule from "../components/bookTourSchedule";
import CustomSchedule from "./CustomSchedule";
import RequestTour from "./RequestTour";
import { Outlet, useNavigate } from "react-router-dom";
import share from "../assets/share.svg";
import heart1 from "../assets/heart1.svg";
import booktour1 from "../assets/booktour1.svg";
import booktour2 from "../assets/booktour2.svg";
import booktour3 from "../assets/booktour3.svg";
import star from "../assets/star.svg";
import profilebooktour from "../assets/profilebooktour.svg";
import call from "../assets/call.svg";
import message from "../assets/message.svg";
import NavBarPage from "./NavBarPage";

const ScheduleTour = () => {
  const navigate = useNavigate();
  const openCustomSchedule = () => {
    navigate("/scheduleTour/requesttour");
   
  };

  return (
    <>
      <NavBarPage/>
      <div className=" relative z-10">
        {/* {showSchedule ?<RequestTour/> : <></>} */}

        <Outlet />
        <div className="mt-12 flex flex-col sm:flex-row">
          <div className="w-full sm:w-3/4 flex justify-center sm:ml-16 ml-auto">
            <div className="flex flex-col sm:flex-row">
              <div>
                <div className="">
                  {/* <div className="absolute top-0 right-0 flex mt-4">
                  <img
                    className="w-6 h-6 mx-2 bg-blue-600 rounded-full py-1"
                    src={share}
                    alt=""
                  />
                  <img
                    className="w-6 h-6 mx-2 bg-blue-600 rounded-full py-1"
                    src={heart1}
                    alt=""
                  />
                </div> */}
                  <img className="sm:h-80 h-auto" src={booktour1} alt="" />
                </div>
                <p className="text-lg font-semibold text-blue-600 mt-6">
                  Photography
                </p>
              </div>
              <div className="flex flex-col mt-4 sm:mt-0">
                <img className="h-auto sm:h-40" src={booktour2} alt="" />
                <img className="h-auto sm:h-40" src={booktour3} alt="" />
                <div className="flex mt-6">
                  <img src={star} alt="" />
                  <p className="text-lg font-semibold text-slate-400 ml-2">
                    4.8 (300 reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/4 mr-8 mt-4">
            <div className=" w-full sm:w-3/4 rounded-xl px-2 py-1 mt-6">
              <p className="text-lg font-semibold mx-2">Listing Agent</p>
              <div className="flex mx-2 my-1">
                <img className="w-8 h-8" src={profilebooktour} alt="" />
                <div className="ml-2">
                  <p className="text-sm">Emily Johnson</p>
                  <p className=" text-slate-400 text-xs">Owner</p>
                </div>
                <div className="flex ml-auto">
                  <img
                    className="w-6 h-6 bg-slate-200 rounded-full py-1"
                    src={call}
                    alt=""
                  />
                  <img
                    className="w-6 h-6 bg-slate-200 rounded-full py-1 mx-2"
                    src={message}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-3/4 shadow-xl rounded-xl px-2 py-3 mt-6 flex">
              <div className="mt-2 mx-2">
                <p className="text-slate-400 font-medium text-lg">
                  Total Price
                </p>
                <div className="flex">
                  <p className=" text-blue-500">$1500</p>
                  <p className=" text-xs mt-1 mx-1 text-slate-400">/month</p>
                </div>
              </div>
              <div className="ml-auto  mt-3">
                <button
                  onClick={openCustomSchedule}
                  className="text-white bg-blue-500 rounded-2xl py-1 px-4 text-xs font-semibold"
                >
                  Schedule tour
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4 flex justify-center mt-8">
          <div className="md:mr-96">
            <p className=" text-3xl font-semibold ">CaptureVision Studios</p>
            <p className=" text-slate-500 font-semibold mt-2">
              Aram Cottage,Pune, Maharashtra
            </p>
          </div>
        </div>
        <BooktourSchedule />
      </div>
    </>
  );
};

export default ScheduleTour;
