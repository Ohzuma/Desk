import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
 
const Login = () => {
 
  return (
    <main className="mt-[4rem]">
      <div className=" rounded-lg mx-auto xs:max-w-[300px] sm:max-w-[400px] h-[400px] py-10 px-5 bg-white sm:shadow-xl">
        <div>
          <div className=" flex flex-col gap-4 justify-center items-center  ">
            <div className="flex flex-col pb-3 items-center gap-2 ">
              <h1 className="text-black text-2xl font-medium">
                Login 
              </h1>
              <span className="text-center">Already have an account?, Login</span>
            </div>
            <form className="flex flex-col gap-4">
              <div className="input">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-black py-2 px-3 text-white rounded-full 
                   w-full flex justify-center items-center text-xl font-medium"
                >
                  Login
                </button>
              </div>
            </form>
            <span className="text-md">
              Don't have account?{" "}
              <Link to={"/signup"} className="underline text-blue-900">
                Create one
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

export default Login;