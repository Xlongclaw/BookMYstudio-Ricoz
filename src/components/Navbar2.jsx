import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="mt-8 flex flex-wrap justify-center border-b-2 border-gray-300">
      <div className="flex mx-4 sm:mx-12 mb-4 sm:mb-0">
        <img src="./images/homeiconimg.svg" alt="" />
        <NavLink className="text-xl pl-2 pb-1 text-blue-600" to="/">
          Home
        </NavLink>
      </div>
      <div className="flex mx-4 sm:mx-12 mb-4 sm:mb-0">
        <img src="./images/exploreiconimg.svg" alt="" />
        <Link className="text-xl pl-2 pb-1 text-neutral-500" to="/explore">
          Explore
        </Link>
      </div>
      <div className="flex mx-4 sm:mx-12 mb-4 sm:mb-0">
        <img src="./images/favouriteiconimg.svg" alt="" />
        <Link className="text-xl pl-2 pb-1 text-neutral-500" to="/favourite">
          Favourite
        </Link>
      </div>
      <div className="flex mx-4 sm:mx-12 mb-4 sm:mb-0">
        <img src="./images/chaticonimg.svg" alt="" />
        <NavLink className="text-xl pl-2 pb-1 text-neutral-500" to="/chat">
          Chat
        </NavLink>
      </div>
      <div className="flex mx-4 sm:mx-12 mb-4 sm:mb-0">
        <img src="./images/profileiconimg.svg" alt="" />
        <Link className="text-xl pl-2 pb-1 text-neutral-500" to="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
