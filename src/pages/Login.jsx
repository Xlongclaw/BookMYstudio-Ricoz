import React, { useState } from "react";
import NavabarLogin from "../components/NavabarLogin";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const navigate = useNavigate();
  const openHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <NavabarLogin />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">
            Welcome!
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Enter your email and password to sign in.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="hidden"
                  onChange={handleRememberMeChange}
                />
                <label
                  htmlFor="remember"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={`relative w-12 h-7 rounded-full border-2 ${
                      rememberMe ? "bg-blue-600" : "bg-gray-200"
                    } border-gray-400 `}
                  >
                    <div
                      className={`absolute left-0 w-6 h-7 rounded-full transition-transform duration-200 ease-in-out ${
                        rememberMe ? "translate-x-6 bg-white" : "bg-white"
                      }`}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-700">
                    Remember Me
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="text-blue-400 hover:underline focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>
            <div className="mb-4">
              <button
                onClick={openHome}
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Sign In
              </button>
              <p className=" text-gray-400 text-center mt-2">
                Don't have an account?{" "}
                <span>
                  <Link to="/signup" className="text-blue-500">
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
