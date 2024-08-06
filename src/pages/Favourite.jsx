import React, { useState } from "react";
import NavBarPage from "./NavBarPage";

const Favourite = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (

    <div>
      <NavBarPage/>
      {/* collection filter */}
      <div className="mt-10 flex flex-wrap justify-center">
        <button
          className={`px-6 py-1 rounded-xl mx-2 my-2 sm:mx-10 sm:my-0 ${
            activeButton === "All"
              ? "bg-blue-600 text-white font-semibold"
              : "bg-white text-gray-600 font-semibold"
          }`}
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          className={`px-6 py-1 rounded-xl mx-2 my-2 sm:mx-10 sm:my-0 ${
            activeButton === "Photography"
              ? "bg-blue-600 text-white font-semibold"
              : "bg-white text-gray-500 font-semibold"
          }`}
          onClick={() => handleClick("Photography")}
        >
          Photography
        </button>
        <button
          className={`px-6 py-1 rounded-xl mx-2 my-2 sm:mx-10 sm:my-0 ${
            activeButton === "Dance"
              ? "bg-blue-600 text-white font-semibold"
              : "bg-white text-gray-500 font-semibold"
          }`}
          onClick={() => handleClick("Dance")}
        >
          Dance
        </button>
        <button
          className={`px-6 py-1 rounded-xl mx-2 my-2 sm:mx-10 sm:my-0 ${
            activeButton === "Art"
              ? "bg-blue-600 text-white font-semibold"
              : "bg-white text-gray-500 font-semibold"
          }`}
          onClick={() => handleClick("Art")}
        >
          Art
        </button>
      </div>
      <div className=" mt-8">
        {/* card */}
        <div className="mx-4 my-6 flex flex-wrap justify-center">
          <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
            <div className="relative">
              <img
                className="w-full h-auto sm:w-44 sm:h-22"
                src="./images/capturevision.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-white p-1">
                <img src="./images/faviocon.svg" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-1 mx-3 flex">
              <p className="text-blue-600 text-xs">Photography</p>
              <span className="flex ml-9">
                <img className="w-4 h-4" src="./images/star.svg" alt="" />
                <p className="text-xs">4.8</p>
              </span>
            </div>
            <div className="my-2 mx-2">
              <p className="text-xs font-semibold">CaptureVision Studios</p>
              <p className="flex my-2">
                <img
                  className="w-3 h-3"
                  src="./images/locationimg.svg"
                  alt=""
                />
                <span className="text-xs mx-1">Pune, Maharastra</span>
              </p>
              <p className="text-xs">
                <span className="text-blue-800 font-medium">$1500</span>/month
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
            <div className="relative">
              <img
                className="w-full h-auto sm:w-44 sm:h-22"
                src="./images/artistichaven.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-white p-1">
                <img src="./images/faviocon.svg" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-1 mx-3 flex">
              <p className="text-blue-600 text-xs">Dance</p>
              <span className="flex ml-9">
                <img className="w-4 h-4" src="./images/star.svg" alt="" />
                <p className="text-xs">4.8</p>
              </span>
            </div>
            <div className="my-2 mx-2">
              <p className="text-xs font-semibold">Artistic Heaven</p>
              <p className="flex my-2">
                <img
                  className="w-3 h-3"
                  src="./images/locationimg.svg"
                  alt=""
                />
                <span className="text-xs mx-1">Pune, Maharastra</span>
              </p>
              <p className="text-xs">
                <span className="text-blue-800 font-medium">$900</span>/month
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
            <div className="relative">
              <img
                className="w-full h-auto sm:w-44 sm:h-22"
                src="./images/capturevision.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-white p-1">
                <img src="./images/faviocon.svg" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-1 mx-3 flex">
              <p className="text-blue-600 text-xs">Photography</p>
              <span className="flex ml-9">
                <img className="w-4 h-4" src="./images/star.svg" alt="" />
                <p className="text-xs">4.8</p>
              </span>
            </div>
            <div className="my-2 mx-2">
              <p className="text-xs font-semibold">CaptureVision Studios</p>
              <p className="flex my-2">
                <img
                  className="w-3 h-3"
                  src="./images/locationimg.svg"
                  alt=""
                />
                <span className="text-xs mx-1">Pune, Maharastra</span>
              </p>
              <p className="text-xs">
                <span className="text-blue-800 font-medium">$1500</span>/month
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
            <div className="relative">
              <img
                className="w-full h-auto sm:w-44 sm:h-22"
                src="./images/artistichaven.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-white p-1">
                <img src="./images/faviocon.svg" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-1 mx-3 flex">
              <p className="text-blue-600 text-xs">Dance</p>
              <span className="flex ml-9">
                <img className="w-4 h-4" src="./images/star.svg" alt="" />
                <p className="text-xs">4.8</p>
              </span>
            </div>
            <div className="my-2 mx-2">
              <p className="text-xs font-semibold">Artistic Heaven</p>
              <p className="flex my-2">
                <img
                  className="w-3 h-3"
                  src="./images/locationimg.svg"
                  alt=""
                />
                <span className="text-xs mx-1">Pune, Maharastra</span>
              </p>
              <p className="text-xs">
                <span className="text-blue-800 font-medium">$900</span>/month
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
            <div className="relative">
              <img
                className="w-full h-auto sm:w-44 sm:h-22"
                src="./images/capturevision.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-white p-1">
                <img src="./images/faviocon.svg" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-1 mx-3 flex">
              <p className="text-blue-600 text-xs">Photography</p>
              <span className="flex ml-9">
                <img className="w-4 h-4" src="./images/star.svg" alt="" />
                <p className="text-xs">4.8</p>
              </span>
            </div>
            <div className="my-2 mx-2">
              <p className="text-xs font-semibold">CaptureVision Studios</p>
              <p className="flex my-2">
                <img
                  className="w-3 h-3"
                  src="./images/locationimg.svg"
                  alt=""
                />
                <span className="text-xs mx-1">Pune, Maharastra</span>
              </p>
              <p className="text-xs">
                <span className="text-blue-800 font-medium">$1500</span>/month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
