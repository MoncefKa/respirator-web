import "react-toastify/dist/ReactToastify.css";
import React from "react";
import rebhi from '../assets/images/patient2.jpeg'

function PatientGlob() {
  return (
    <div>
      <div className="sm:px-0">
        <div className=" sm:mb-0 grid grid-rows-1 w-112  h-64 py-2   gap-8    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group bg-gray-900/80  py-20 px-4   flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
            <a
              className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
            <a
              className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
              href="/"
            >
              Add Patient
            </a>
          </div>
          <div className="relative group bg-gray-900 py-2 flex justify-center  sm:py-20 px-4 flex flex-col space-y-3 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <img
              className="w-20 h-20 object-cover object-center rounded-full"
              src={rebhi}
              alt="profile"
            />
            <h4 className="text-white text-2xl font-bold capitalize text-center">
              Patient 1
            </h4>
            <p className="text-white/50">Mr. elmehdi KIBBOU</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientGlob;
