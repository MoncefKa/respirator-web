import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Logo from "../assets/images/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Loginform() {
  return (
    <div className="flex flex-wrap justify-center ">
      <div className="w-6/12 h-screen px-20  ">
        <div className="p-16 mx-10 ">
          <div className="  flex justify-center drop-shadow-xl">
            <a href="./Home">
              <img
                src={Logo}
                alt="Company Logo"
                className=" h-40 w-40 cursor-pointer "
              />
            </a>
          </div>
          <div className="mb-5 text-xl mt-2  font-semibold flex justify-center ">
            <p>Sign In</p>
          </div>
          <form>
            <div class=" grid grid-cols-1  mb-2 ml-0 mx-7 text-ms  text-[#AFB5C0]     ">
              <p> USER ID </p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-[gray-700] bg-white bg-clip-padding border border-solid border-[#AFB5C0] rounded-lg  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#39A2DB] focus:outline-none"
                id="exampleFormControlInput1"
                name="email"
                // onChange={handleChange}
                // value={email}
                placeholder="Enter your id"
              />
            </div>

            <div>
              <button
                className=" text-cente rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl  bg-gradient-to-r from-[#81C6E8] via-[#39A2DB]  to-[#81C6E8]  inline-block px-6 py-2.5 text-[#FFFFFF] font-semibold text-xs leading-tight   ease-in-out w-full  mt-2"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="flex items-center mt-4 my-4 before:flex-1 before:border-t before:border-[#AFB5C0] before:mt-0.5 after:flex-1 after:border-t after:border-[#AFB5C0] after:mt-0.5 ">
              <p className="text-center text-[#AFB5C0]  mx-4">OR</p>
            </div>
            <div className="cursor-pointer flex space-x-2  flex justify-center text-gl text-[gray-500] font-semibold ">
              <a className="  " href="#">
                Contact the support
              </a>
              <a className=" animate-bounce " href="#">
                {/* animate-bounce */}
                !
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
