import React, { useState } from "react";
import NavabarLogin from "../components/NavabarLogin";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  
    const navigate = useNavigate();
    const openHome = () => {
      navigate("/home");
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log(formData);
        // Redirect to another page after signup

    };
    return (
      <div>
        <NavabarLogin />
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-white rounded p-8 shadow-md max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">
              Welcome!
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Enter your email and password to signup.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={openHome}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Sign Up
              </button>
            </form>
            <p className=" text-gray-400 text-center mt-2">
              have an account?{" "}
              <span>
                <Link to="/login" className="text-blue-500">
                  Signin
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Signup;
