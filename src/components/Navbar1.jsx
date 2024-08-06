import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar1 = () => {
  const navigate = useNavigate();
  
  const openBookTour = () => {
    navigate("/booktour");
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
          className=" bg-slate-100 pl-10 py-1 mt-2 w-full sm:w-[40vw]"
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

      {/* other things */}
      <div className="ml-0 mt-4 sm:mt-0 sm:ml-3 flex items-center">
        <button onClick={openBookTour}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="50" rx="6" fill="#246BFD" />
            <g clipPath="url(#clip0_355_50)">
              <path
                d="M21.8928 30.75C21.8928 29.0241 20.4937 27.625 18.7678 27.625C17.0419 27.625 15.6428 29.0241 15.6428 30.75C15.6428 32.4759 17.0419 33.875 18.7678 33.875C20.4937 33.875 21.8928 32.4759 21.8928 30.75Z"
                stroke="#EDEDED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.9761 30.75H36.4761"
                stroke="#EDEDED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.2261 18.25C30.2261 19.9759 31.6252 21.375 33.3511 21.375C35.077 21.375 36.4761 19.9759 36.4761 18.25C36.4761 16.5241 35.077 15.125 33.3511 15.125C31.6252 15.125 30.2261 16.5241 30.2261 18.25Z"
                stroke="#EDEDED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6428 18.25H28.1428"
                stroke="#EDEDED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_355_50">
                <rect
                  width="25"
                  height="25"
                  fill="white"
                  transform="matrix(0 -1 1 0 12 37)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {/* notification and profile */}
      <div className="mt-4 ml-0 sm:ml-20 sm:pl-12 flex items-center">
        <div className="pl-8 ml-4">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 13.3334C30 10.6812 28.9464 8.13767 27.0711 6.26231C25.1957 4.38694 22.6522 3.33337 20 3.33337C17.3478 3.33337 14.8043 4.38694 12.9289 6.26231C11.0536 8.13767 10 10.6812 10 13.3334C10 25 5 28.3334 5 28.3334H35C35 28.3334 30 25 30 13.3334Z"
              fill="#939393"
            />
            <path
              d="M22.8829 29C22.5899 29.5051 22.1693 29.9244 21.6633 30.2159C21.1572 30.5073 20.5835 30.6608 19.9995 30.6608C19.4156 30.6608 18.8419 30.5073 18.3358 30.2159C17.8298 29.9244 17.4092 29.5051 17.1162 29"
              fill="#939393"
            />
            <circle cx="26.6666" cy="3.33333" r="3.33333" fill="#FF2323" />
          </svg>
        </div>
        <div className="flex">
          <div className="flex items-center ml-4 sm:ml-8">
            <button>
              <img className="w-8 h-8" src="./images/taraimg.svg" alt="" />
            </button>
          </div>
          <p className=" ml-6 text-xl">Tara Chaudhary</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
