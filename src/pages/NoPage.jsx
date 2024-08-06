import React from "react";
import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div className="text-lg text-center">
      <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <img
            src="./images/errorimage.png"
            alt="Error 404"
            className="max-w-full h-auto mb-8"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            The page you are looking for might have been removed or doesn't
            exist.
          </p>
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            Go back to homepage 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
