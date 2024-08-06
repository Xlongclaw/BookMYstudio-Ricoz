import React from "react";
import { Link } from "react-router-dom";
import dashboardicons from "../assets/dashboardicons.svg";
import profileicon from "../assets/profileicon.svg";
import signinicon from "../assets/signinicon.svg";
import signupicon from "../assets/signupicon.svg";
const NavabarLogin = () => {
  return (
    <div className="mt-4">
      <nav className="bg-white shadow-md w-1/2 mx-auto rounded-lg py-2">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-1">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <Link to="#" className="font-bold text-gray-800">
                  StudioOnRent
                </Link>
              </div>
              <div className="ml-6 flex space-x-8">
                <div className="flex">
                  <img src={dashboardicons} alt="" />
                  <Link
                    to="/dashboard"
                    className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                </div>
                <div className="flex">
                  <img src={profileicon} alt="" />
                  <Link
                    to="/profile"
                    className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>
                </div>
                <div className="flex">
                  <img src={signinicon} alt="" />
                  <Link
                    to="/login"
                    className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex">
                  <img src={signupicon} alt="" />
                  <Link
                    to="/signup"
                    className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Signup
                  </Link>
                </div>
                <button className="text-white bg-black hover:text-gray-800 hover:bg-white rounded-2xl text-sm font-medium px-6">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavabarLogin;
