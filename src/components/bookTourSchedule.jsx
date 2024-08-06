import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footers from "./Footers";

const bookTourSchedule = () => {
  const [dates, setDates] = useState("");
  const [times, setTimes] = useState("");

  const handleDateChange = (event) => {
    setDates(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTimes(event.target.value);
  };

  return (
    <>
      <div className="my-6 w-full sm:w-3/5 sm:ml-52">
        <p className=" text-slate-600 font-semibold text-lg">Book Tour</p>
        <div className="mt-8">
          <p className="font-bold mr-auto my-2">Date of Birth</p>
          <input
            className="mt-2 w-4/12 bg-slate-100 py-1 px-3 rounded-lg"
            type="date"
            value={dates}
            placeholder="Date of Birth"
            onChange={handleDateChange}
          />
        </div>
        <div className="mt-8">
          <p className="font-bold mr-auto my-2">Time</p>
          <input
            className="mt-2 w-4/12 bg-slate-100 py-1 px-3 rounded-lg appearance-none"
            type="time"
            value={times}
            placeholder="Time"
            onChange={handleTimeChange}
          />
        </div>
        <div className="mt-8 flex sm:w-3/5 ">
          <Link to="/customSchedule" className="font-semibold">
            <span className=" text-blue-600">| </span>Want a custom schedule?
          </Link>
          <Link
            to="/customSchedule"
            className="font-semibold text-blue-600 ml-auto"
          >
            Request Schedule
          </Link>
        </div>
      </div>
      <Footers/>
    </>
  );
};

export default bookTourSchedule;
