import React, { useState } from "react";

const CustomSchedule = () => {
  const [isOpenGender, setIsOpenGender] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const toggleDropdown = () => {
    setIsOpenGender(!isOpenGender);
  };

  const selectGender = (gender) => {
    setSelectedGender(gender);
    setIsOpenGender(false);
  };
  const toggleDropcountry = () => {
    setIsOpenCountry(!isOpenCountry);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpenCountry(false);
  };

  return (
    <div className="flex justify-center items-center absolute z-50  ">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 bg-slate-500 mt-20 h-auto p-8 rounded-lg shadow-lg">
        <h1 className="font-semibold text-xl text-center mb-4">Book Tour</h1>
        <p className=" font-semibold text-center">Your Information Details</p>
        <div className="flex flex-col items-center mt-8">
          <div className="">
            {/* name */}
            <div>
              <p className="font-bold mr-auto my-2">Name</p>
              <input
                className=" bg-slate-100 w-full py-1 px-3 rounded-lg"
                type="text"
                placeholder="Tara Choudhary"
              />
            </div>
            {/* email */}
            <div className="mt-8">
              <p className="font-bold mr-auto my-2">Email</p>
              <input
                className=" bg-slate-100 w-full py-1 px-3 rounded-lg"
                type="email"
                placeholder="Tara Choudhary"
              />
            </div>
            {/* phone number */}
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
            {/* gender */}
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
            {/* Country */}
            <div className="mt-8">
              <p className="font-bold mr-auto my-2">Country</p>
              <div className="relative">
                <input
                  className="bg-slate-100 w-full py-1 px-3 rounded-lg pr-10"
                  type="text"
                  value={selectedCountry}
                  placeholder="Country"
                  readOnly
                  onClick={toggleDropcountry}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={toggleDropcountry}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {isOpenCountry && (
                  <ul className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg">
                    <li
                      className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectCountry("India")}
                    >
                      India
                    </li>
                    <li
                      className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectCountry("Pakistan")}
                    >
                      Pakistan
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <button className=" bg-blue-600 text-white text-lg px-8 py-1 mt-8 rounded-lg sm:ml-11">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSchedule;
