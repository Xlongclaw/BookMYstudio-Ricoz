import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBarPage from "./NavBarPage";
const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenGender, setIsOpenGender] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [dob, setDob] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };
  const toggleDropdown = () => {
    setIsOpenGender(!isOpenGender);
  };

  const selectGender = (gender) => {
    setSelectedGender(gender);
    setIsOpenGender(false);
  };
  return (
    <>
      <NavBarPage/>
      <div className="flex">
        <div className=" sm:w-1/5 shadow-lg ">
          <button
            onClick={toggleMenu}
            className=" sm:hidden px-4 py-2 text-blue-600"
          >
            Toggle Menu
          </button>
          {isOpen && (
            <>
              <div className="flex flex-col sm:flex-row items-center rounded-lg overflow-hidden shadow-lg py-2 px-4 my-8 mx-4 sm:mx-auto max-w-md bg-blue-600">
                <img
                  className="sm:mb-0 sm:mr-4 w-6 h-6"
                  src="./images/contactimg.svg"
                  alt="User"
                />
                <p className="text-white font-semibold">Your Profile</p>
                <button className="sm:mb-0 sm:mr-4 ml-auto w-9 h-9">
                  <img src="./images/leftarrow.svg" alt="" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center rounded-lg overflow-hidden shadow-lg py-2 px-4 my-8 mx-4 sm:mx-auto max-w-md ">
                <img
                  className="sm:mb-0 sm:mr-4 w-6 h-6"
                  src="./images/setting.svg"
                  alt="User"
                />
                <p className="font-semibold">Settings</p>
                <button className="sm:mb-0 sm:mr-4 ml-auto w-9 h-9">
                  <img src="./images/leftarrowblue.svg" alt="" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center rounded-lg overflow-hidden shadow-lg py-2 px-4 my-8 mx-4 sm:mx-auto max-w-md ">
                <img
                  className="sm:mb-0 sm:mr-4 w-6 h-6"
                  src="./images/language.svg"
                  alt="User"
                />
                <p className="font-semibold">App Languages</p>
                <button className="sm:mb-0 sm:mr-4 ml-auto w-9 h-9">
                  <img src="./images/leftarrowblue.svg" alt="" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center rounded-lg overflow-hidden shadow-lg py-2 px-4 my-8 mx-4 sm:mx-auto max-w-md ">
                <img
                  className="sm:mb-0 sm:mr-4 w-6 h-6"
                  src="./images/privacy.svg"
                  alt="User"
                />
                <p className="font-semibold">Privacy Policy</p>
                <button className="sm:mb-0 sm:mr-4 ml-auto w-9 h-9">
                  <img src="./images/leftarrowblue.svg" alt="" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center rounded-lg overflow-hidden shadow-lg py-2 px-4 my-8 mx-4 sm:mx-auto max-w-md ">
                <img
                  className="sm:mb-0 sm:mr-4 w-6 h-6"
                  src="./images/help.svg"
                  alt="User"
                />
                <p className="font-semibold">Help Center</p>
                <button className="sm:mb-0 sm:mr-4 ml-auto w-9 h-9">
                  <img src="./images/leftarrowblue.svg" alt="" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center rounded-lg py-3 px-2 my-8 mx-4 sm:mx-auto max-w-md ">
                <img
                  className="sm:mb-0 sm:mr-4 w-6 h-6"
                  src="./images/logout.svg"
                  alt="User"
                />
                <p className="font-semibold text-red-500 mx-2">Logout</p>
              </div>
            </>
          )}
        </div>
        <div className="w-full sm:w-4/5">
          <div className="flex py-3 shadow-lg rounded-lg">
            <Link to="/">
              <div className="w-6 h-6 bg-white border-t-2 border-r-2 rounded-full transform rotate-30 mx-4">
                <img src="./images/arrow.svg" alt="" />
              </div>
            </Link>
            <p className=" font-semibold">Your Profile</p>
          </div>

          <div className=" flex justify-end my-5 mr-4">
            <button
              className="top-0 right-0 bg-blue-600 text-white rounded-lg  py-2 px-3 font-semibold"
              type="button"
            >
              Update Profile
            </button>
          </div>
          <div className=" flex justify-center">
            <div className=" ">
              <img className="w-24 h-24" src="./images/profile.svg" alt="" />
              <div className="flex ml-3 mt-2">
                <img className="w-7 h-7" src="./images/editpen.svg" alt="" />
                <p className=" text-blue-700">EDIT</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="sm:w-1/4">
              <div>
                <p className="font-bold mr-auto my-2">Name</p>
                <input
                  className=" bg-slate-100 w-full py-1 px-3 rounded-lg"
                  type="text"
                  placeholder="Tara Choudhary"
                />
              </div>
              <div className="mt-8">
                <p className="font-bold mr-auto my-2">Phone Number</p>
                <div className="relative">
                  <input
                    className="bg-slate-100 w-full py-1 px-3 rounded-lg"
                    type="number"
                    placeholder="9999999999"
                    pattern="[0-9]*"
                  />
                  <button className="absolute right-0 top-0 mt-1 mr-2 text-blue-600 font-semibold">
                    Change
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-bold mr-auto my-2">Email</p>
                <input
                  className=" bg-slate-100 w-full py-1 px-3 rounded-lg"
                  type="email"
                  placeholder="Tara Choudhary"
                />
              </div>
              <div className="mt-8">
                <p className="font-bold mr-auto my-2">Gender</p>
                <div className="relative">
                  <input
                    className="bg-slate-100 w-full py-1 px-3 rounded-lg pr-10"
                    type="text"
                    value={selectedGender}
                    placeholder="Gender"
                    readOnly
                    onClick={toggleDropdown}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={toggleDropdown}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {isOpenGender && (
                    <ul className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg">
                      <li
                        className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                        onClick={() => selectGender("Male")}
                      >
                        Male
                      </li>
                      <li
                        className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                        onClick={() => selectGender("Female")}
                      >
                        Female
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="mt-8">
                <p className="font-bold mr-auto my-2">Date</p>
                <input
                  className="mt-2 bg-slate-100 w-full py-1 px-3 rounded-lg"
                  type="date"
                  value={dob}
                  placeholder="Date of Birth"
                  onChange={handleDobChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
