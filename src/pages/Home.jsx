import React from "react";
import RecommendedStudio from "../components/RecommendedStudio";
import NearbyStudio from "../components/NearbyStudio";
import Footers from "../components/Footers";
import NavBarPage from "./NavBarPage";
const Home = () => {
  return (
    <div>
      <NavBarPage/>
      <div className="mt-8 mx-10 flex flex-wrap justify-center md:justify-between">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img
            className="w-full md:w-[14vw] mx-auto"
            src="./images/photography.svg"
            alt=""
          />
          <div className="text-center mt-2">
            <span className="text-2xl">Photography</span>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img
            className="w-full md:w-[14vw] mx-auto"
            src="./images/artimg.svg"
            alt=""
          />
          <div className="text-center mt-2">
            <span className="text-2xl">Art</span>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img
            className="w-full md:w-[14vw] mx-auto"
            src="./images/musicimg.svg"
            alt=""
          />
          <div className="text-center mt-2">
            <span className="text-2xl">Music</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-full md:w-[14vw] mx-auto"
            src="./images/danceimg.svg"
            alt=""
          />
          <div className="text-center mt-2">
            <span className="text-2xl">Dance</span>
          </div>
        </div>
      </div>

      <RecommendedStudio />
      <NearbyStudio />
      <Footers />
    </div>
  );
};

export default Home;
