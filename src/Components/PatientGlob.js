import "react-toastify/dist/ReactToastify.css";
import React from "react";
import rebhi from '../assets/images/patient2.jpeg'

function PatientGlob() {
  return (
    <div>
      <div class="sm:px-0">
        <div class=" sm:mb-0 grid py-5 px-5  gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="group bg-gray-900/80  py-20 px-4   flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
            <a
              class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
            <a
              class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
              href="#"
            >
              Add Patient
            </a>
          </div>
          <div class="relative group bg-gray-900 py-10  sm:py-20 px-4 flex flex-col space-y-3 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <img
              class="w-20 h-20 object-cover object-center rounded-full"
              src={rebhi}
            />
            <h4 class="text-white text-2xl font-bold capitalize text-center">
              Patient 1
            </h4>
            <p class="text-white/50">Mr. elmehdi KIBBOU</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientGlob;
