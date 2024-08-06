import React from "react";

const Footers = () => {
  return (
    <div className="text-xs ml-2">
      <p className="flex flex-wrap justify-center sm:justify-start ">
        <span className="mr-2 mt-2">Privacy Policy</span>
        <span className="mr-2 mt-2">Terms of Use</span>
      </p>
      <p className="text-center sm:text-right">
        @ 2023 Studio on Rent, Made with 🖤 by
        <span className="text-blue-700">Tara Choudhary.</span>
      </p>
    </div>
  );
};

export default Footers;
