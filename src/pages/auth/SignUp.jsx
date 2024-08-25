import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <main className="mt-[2rem]">
      <div className=" rounded-lg mx-auto max-w-[400px] h-[550px] py-10 px-5 bg-white shadow-xl">
        <div>
          <div className=" flex flex-col gap-4 justify-center items-center  ">
            <div className="flex flex-col pb-3 items-center gap-2 ">
              <h1 className="text-black text-2xl font-medium">
                Create Account
              </h1>
              <span className="text-center">To get started create an account with us now!!</span>
            </div>
            <form action="/" className="flex flex-col gap-4">
              <div className="input">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="input">
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <input type="text" placeholder="Full Name" />
              </div>
           
              <div >
                <button
                  type="submit"
                  className="bg-black py-2 px-3 text-white rounded-full
                   w-full flex justify-center items-center text-xl font-medium"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <span className="text-md">
              Already have account?{" "}
              <Link to={"/login"} className="underline text-blue-900">
                Login
              </Link>
            </span>
            <p className="text-md">or Countinue with</p>
            <div className="flex gap-4 icon">
              <a href="/">
                <FaGoogle />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;