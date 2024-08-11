import React from "react";
import { Link, useNavigate } from "react-router-dom";
import notificationdash from "../assets/notificationdash.svg";
import messages from "../assets/messages.svg";
import taraimg from "../assets/taraimg.svg";


const NavbarDashboard = () => {
  const navigate = useNavigate();
  const openDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col sm:flex-row border-gray-300 border-b-2">
      {/* title */}
      <Link to="/" className="flex flex-row items-center">
        <div className="mt-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 10.5L14 2.33337L24.5 10.5V23.3334C24.5 23.9522 24.2542 24.5457 23.8166 24.9833C23.379 25.4209 22.7855 25.6667 22.1667 25.6667H5.83333C5.21449 25.6667 4.621 25.4209 4.18342 24.9833C3.74583 24.5457 3.5 23.9522 3.5 23.3334V10.5Z"
              stroke="#3A57E8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 25.6667V14H17.5V25.6667"
              stroke="#3A57E8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-medium mx-2 text-xl ">Studio On Rent</p>
      </Link>
      {/* //search bar */}
      <div className="relative mt-4 sm:mt-0 ml-0 sm:ml-28">
        <input
          className=" bg-slate-100 pl-10 py-1 mt-2 w-full sm:w-[20vw] rounded-xl"
          type="search"
          name="search"
          id=""
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="659" height="50" rx="6" fill="#F4F6F9" />
            <path
              d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
              stroke="#ADB5BD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.25 26.25L20.8125 20.8125"
              stroke="#ADB5BD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* notification and profile */}
      <div className="mt-4 ml-0 sm:ml-auto sm:pl-12 flex items-center">
        <div className="pl-8 ml-4 flex">
                  <img src={notificationdash} alt="" />
                  <img className="ml-6" src={messages} alt="" />
        </div>
        <div className="flex">
          <div className="flex items-center ml-4 sm:ml-8">
            <button onClick={openDashboard}>
              <img className="w-8 h-8" src={taraimg} alt="" />
            </button>
          </div>
          <p className=" ml-6 text-xl">Tara Chaudhary</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
