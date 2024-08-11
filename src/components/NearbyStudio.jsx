import React from "react";

const NearbyStudio = () => {
  return (
    <div className=" mt-8">
      <div className="flex mx-4 items-center justify-between">
        <h1 className=" sm:text-2xl md:text-3xl">Nearby Studios</h1>
        <div className="text-right">
          <a className="text-xl text-blue-900 mr-8 pr-4 font-semibold" href="">
            See all
          </a>
        </div>
      </div>

      {/* card */}

      <div className="mx-4 my-6 flex flex-wrap justify-center">
        <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
          <div className="">
            <img
              className="w-full h-auto sm:w-44 sm:h-22"
              src="./images/capturevision.svg"
              alt=""
            />
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
              <img className="w-3 h-3" src="./images/locationimg.svg" alt="" />
              <span className="text-xs mx-1">Pune, Maharastra</span>
            </p>
            <p className="text-xs">
              <span className="text-blue-800 font-medium">$1500</span>/month
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
          <div className="">
            <img
              className="w-full h-auto sm:w-44 sm:h-22"
              src="./images/artistichaven.svg"
              alt=""
            />
          </div>
          <div className="mt-1 mx-3 flex">
            <p className="text-blue-600 text-xs">Dance</p>
            <span className="flex ml-9">
              <img className="w-4 h-4" src="./images/star.svg" alt="" />
              <p className="text-xs">4.8</p>
            </span>
          </div>
          <div className="my-2 mx-2">
            <p className="text-xs font-semibold">Artistic Haven</p>
            <p className="flex my-2">
              <img className="w-3 h-3" src="./images/locationimg.svg" alt="" />
              <span className="text-xs mx-1">Pune, Maharastra</span>
            </p>
            <p className="text-xs">
              <span className="text-blue-800 font-medium">$900</span>/month
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
          <div className="">
            <img
              className="w-full h-auto sm:w-44 sm:h-22"
              src="./images/capturevision.svg"
              alt=""
            />
          </div>
          <div className="mt-1 mx-3 flex">
            <p className="text-blue-600 text-xs">Dance</p>
            <span className="flex ml-9">
              <img className="w-4 h-4" src="./images/star.svg" alt="" />
              <p className="text-xs">4.8</p>
            </span>
          </div>
          <div className="my-2 mx-2">
            <p className="text-xs font-semibold">Artistic Haven</p>
            <p className="flex my-2">
              <img className="w-3 h-3" src="./images/locationimg.svg" alt="" />
              <span className="text-xs mx-1">Pune, Maharastra</span>
            </p>
            <p className="text-xs">
              <span className="text-blue-800 font-medium">$900</span>/month
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
          <div className="">
            <img
              className="w-full h-auto sm:w-44 sm:h-22"
              src="./images/capturevision.svg"
              alt=""
            />
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
              <img className="w-3 h-3" src="./images/locationimg.svg" alt="" />
              <span className="text-xs mx-1">Pune, Maharastra</span>
            </p>
            <p className="text-xs">
              <span className="text-blue-800 font-medium">$1500</span>/month
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[12vw] rounded overflow-hidden shadow-lg mt-5 mx-auto">
          <div className="">
            <img
              className="w-full h-auto sm:w-44 sm:h-22"
              src="./images/artistichaven.svg"
              alt=""
            />
          </div>
          <div className="mt-1 mx-3 flex">
            <p className="text-blue-600 text-xs">Dance</p>
            <span className="flex ml-9">
              <img className="w-4 h-4" src="./images/star.svg" alt="" />
              <p className="text-xs">4.8</p>
            </span>
          </div>
          <div className="my-2 mx-2">
            <p className="text-xs font-semibold">Artistic Haven</p>
            <p className="flex my-2">
              <img className="w-3 h-3" src="./images/locationimg.svg" alt="" />
              <span className="text-xs mx-1">Pune, Maharastra</span>
            </p>
            <p className="text-xs">
              <span className="text-blue-800 font-medium">$900</span>/month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyStudio;
