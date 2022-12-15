import "react-toastify/dist/ReactToastify.css";
import React from "react";
import rebhi from '../assets/images/patient2.jpeg'
import Popup from "reactjs-popup";
import {GrCircleInformation} from "react-icons/gr";
import {IoIosAddCircleOutline} from "react-icons/io";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import bpm from "../Components/dataholder";

function PatientGlob() {
  return (
    <div>
      <div className="sm:px-0">
        <div className=" sm:mb-0 grid grid-rows-1 w-112  h-64 py-2   gap-8    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group bg-gray-900/80  py-20 px-4   flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
          <Popup trigger=<button><IoIosAddCircleOutline className="rounded-full text-4xl fill-white"/></button> modal>
            <div className="dark:bg-slate-900	h-128 w-144 rounded-xl order-2 border-zinc-500">
                  <div className="w-full text-center">
                    <div className="pt-8">
                      <h1 className="text-4xl text-[#EEEEEE]">Add New Patient</h1>
                    </div>
                  </div>
                  <div className="h-full flex flex-col items-center -mt-24">
                    <div className="flex flex-col w-3/6 m-auto gap-4">
                      <input className="p-4 rounded-lg" placeholder="First Name"/>
                      <input className="p-4 rounded-lg" placeholder="Last Name"/>
                      <input className="p-4 rounded-lg" placeholder="Age"/>
                      <input className="p-4 rounded-lg" placeholder="Reason To Use"/>
                      <button className="w-20 p-2 bg-[#FAF8F1] uppercase font-bold m-auto">Add</button>
                    </div>
                  </div>
                </div>
              </Popup>
            <p
              className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center">
              Add Patient
            </p>
          </div>
          <div className="relative group bg-gray-900 py-2 flex justify-center  sm:py-20 px-4 flex flex-col space-y-3 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <img
              className="w-20 h-20 object-cover object-center rounded-full"
              src={rebhi}
              alt="profile"
            />
            <h4 className="text-white text-2xl font-bold capitalize text-center">
              Patient Mr.Mohammed
            </h4>
            <p className="text-white/50">Covid-19</p>
            <Popup trigger=<button><GrCircleInformation className="rounded-full text-4xl bg-[#F2E5E5]"/></button> modal>
            <div className="dark:bg-slate-900	h-128 w-144 rounded-xl order-2 border-zinc-500">
                  <div className="w-full text-center">
                    <div className="pt-8">
                      <h1 className="text-4xl text-[#EEEEEE]">Patient Status</h1>
                    </div>
                  </div>
                  <div className="h-full grid grid-cols-3 flex items-center">
                    <div className="col-span-1 h-110 p-4">
                    <ResponsiveContainer width="100%" height="90%" className="bg-[#EEEEEE] rounded-xl">
                        <LineChart
                          width={200}
                          height={200}
                          data={bpm}
                          margin={{
                            top: 5,
                            right: 30,
                            left: -20,
                            bottom: 5,
                          }}
                        >
                          <XAxis dataKey="bp" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="bpm" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="col-span-1 h-110 p-4">
                    <ResponsiveContainer width="100%" height="90%" className="bg-[#EEEEEE] rounded-xl">
                        <LineChart
                          width={200}
                          height={200}
                          
                          margin={{
                            top: 5,
                            right: 30,
                            left: -20,
                            bottom: 5,
                          }}
                        >
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="col-span-1 h-110 p-4">
                    <ResponsiveContainer width="100%" height="90%" className="bg-[#EEEEEE] rounded-xl">
                        <LineChart
                          width={200}
                          height={200}
                          
                          margin={{
                            top: 5,
                            right: 30,
                            left: -20,
                            bottom: 5,
                          }}
                        >
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientGlob;
