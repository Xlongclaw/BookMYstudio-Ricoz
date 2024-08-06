import React from "react";
import rightIcon from "../assets/rightIcon.svg";
import profilebooktour from "../assets/profilebooktour.svg";
import leftarrowblack from "../assets/leftarrowblack.svg";
const RequestTour = () => {
  return (
    <div className="flex justify-center items-center absolute z-50 ">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/6 mt-10 sm:mt-20 h-auto p-8 rounded-lg shadow-lg px-10">
        <h1 className="font-semibold text-xl text-center mb-4">Tour Request</h1>
        <div className="flex justify-center">
          <img
            className="bg-blue-600 rounded-full py-1 px-1 w-14 h-14 mt-10"
            src={rightIcon}
            alt=""
          />
        </div>
        <p className=" font-semibold text-center text-2xl mt-5">
          Request Recieved!
        </p>
        <p className=" text-slate-500 text-center text-sm mt-3">
          we’re Checking if the Studio can be seenon
        </p>
        <p className="mt-3 text-center">Mon, September 11, 7:00 PM</p>
        <p className="mt-6 text-center text-sm text-slate-500">
          Agent Will Take you on the tour!
        </p>
        <div className="flex justify-center">
          <div className="flex mx-2 my-1 w-full sm:w-3/4 lg:w-3/5 mt-5 ">
            <img className="w-8 h-8" src={profilebooktour} alt="" />
            <div className="ml-2 ">
              <p className="text-sm">Emily Johnson</p>
              <p className=" text-slate-500 text-xs">Owner</p>
            </div>
            <button className="sm:mb-0 sm:mr-4 ml-auto w-2 h-2 mt-3">
              <img src={leftarrowblack} alt="" />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-8 sm:px-16 py-1 rounded-xl font-semibold mt-5">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestTour;
