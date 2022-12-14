import React, { useState,useEffect } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Popup from "reactjs-popup";
import VerifiedIcon from '@mui/icons-material/Verified';
import {RiRadioButtonLine} from 'react-icons/ri';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,Label } from 'recharts';
import data from "./infoResp";
import axios from "axios";

function Activeapp() {
  const [check, setCheck] = useState(0);
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  const [data, setDatas] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
  };
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("../../../backend/API/data.json");
      const data = await res.json();
      console.log(data);
      setDatas(data?.data);
    };
    fetchDatas();
  }, []);
  return (
    <div className="h-full dark:bg-slate-800 rounded-xl ">
      <div className="h-full block ">
        <div className="flex flex-row justify-between mx-3">
          <h1 className="text-[#f5efef] text-3xl p-8 pb-12 uppercase">Active Devices</h1>
          <Popup trigger={<button className="mr-10 text-cyan-300 font-bold capitalize">add device</button>} modal>
            <div className="dark:bg-slate-900	h-110 w-120 border-2 border-zinc-500">
              <div className="w-full text-center mt-8">
                <h1 className="text-4xl text-slate-50 font-semibold capitalize">add device</h1>
              </div>
              {check === 0 ? (
                <div className="flex flex-col justify-center h-70 mt-14 items-center">
                  <div className="flex flex-col">
                    <input className="w-96 h-12 border-2 border-zinc-700 rounded-lg bg-white-500 text-center mb-10" type="text" defaultValue={message} placeholder="Device Number" onChange={() => { }} />
                    <input className="w-96 h-12 border-2 border-zinc-700 rounded-lg bg-white-500 text-center text-neutral-800 " type="text" placeholder="Device Name" defaultValue={message} onChange={() => { }} />
                    <button className="mt-10 hover:bg-teal-900  w-40 h-9 rounded-2xl border-2 border-blue-500 text-blue-100" onClick={async () => {
                      setCheck(1)
                      await delay(1500);
                      setCheck(0);
                      handleClick();
                    }}>Add</button>
                  </div>
                  )
                </div>) : (
                <div className="flex flex-col justify-center items-center w-full h-90">
                  <VerifiedIcon className="text-green-500 text-9xl" sx={{ fontSize: 240 }} />
                </div>)
              }
            </div>
          </Popup>
        </div>
        <div className="w-full">
          <div className="mx-auto text-center w-auto">
            <div className="w-5/6 mx-auto p-2 bg-[#82C3EC] rounded-xl flex justify-around">
              <h1 className="text-2xl text-white uppercase font-custom" >
                Device 01
              </h1>
              <Popup trigger={<button><CheckCircleIcon /></button>} modal>
                <div className="dark:bg-slate-900	h-128 w-144 rounded-xl order-2 border-zinc-500">
                  <div className="w-full text-center mt-8">
                    <h1 className="text-4xl text-white p-4">Device Data Charts</h1>
                  </div>
                  <div className="h-full p-4 grid grid-cols-2 grid-rows-4 flex items-center">
                  <div className="h-full mt-12 col-span-1 row-span-4">
                    <ResponsiveContainer width="99%" height="85%" className="bg-[#EEEEEE] rounded-xl">
                        <LineChart
                          width={500}
                          height={200}
                          data={data}
                          margin={{
                            top: 25,
                            right: 10,
                            left: 10,
                            bottom: 15,
                          }}>
                          
                          <XAxis dataKey="" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="Presure" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="h-full mt-12 col-span-1 row-span-4">
                    <ResponsiveContainer width="99%" height="85%" className="bg-[#EEEEEE] rounded-xl">
                        <LineChart
                          width={500}
                          height={200}
                          data={data}
                          margin={{
                            top: 25,
                            right: 10,
                            left: 10,
                            bottom: 15,
                          }}>
                          <XAxis dataKey="Temperture" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="Temperture" stroke="#82ca9d" />
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
    </div>
  );
}

export default Activeapp;
