import React,{useState} from "react";
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Popup from "reactjs-popup";
import VerifiedIcon from '@mui/icons-material/Verified';
import clients from "../API/clients";

function Activeapp() {
  const [check, setCheck] = useState(0);
  const [inputField,setInputField] = useState([{Device:""}]);
  const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
  // const submitadding = () => {
  //   console.log("submitting");
    
  // };

  // const [data, setData] = useState({
  //   Ip: "",
  //   Name: "",
  // });
  // const handleChangeTexte = (value, fieldname) => {
  //   setData({ ...data, [fieldname]: value });
  //   console.log(data);
  // };

  // const { Ip, Name } = data
  return (
    <div className="h-full dark:bg-slate-800 rounded-xl ">
      <div className="h-full block ">
        <div className="flex flex-row justify-between mx-3">
          <h1 className="text-[#f5efef] text-3xl p-8 pb-12 uppercase">Active Devices</h1>
          <Popup trigger={<button className="mr-10 text-cyan-300 font-bold capitalize">add device</button>} modal>
            <div className="dark:bg-slate-900	h-128 w-144 border-2 border-zinc-500">
              <div className="w-full text-center mt-8">
                <h1 className="text-4xl text-slate-50 font-semibold capitalize">add device</h1>
              </div>
              {   check===0 ? (<div className="flex flex-col justify-center h-70 mt-14 items-center">
                <input className="w-96 h-12 border-2 border-zinc-700 rounded-lg bg-white-500 text-center mb-10" type="text" placeholder="Ip appareille"  />
                <input className="w-96 h-12 border-2 border-zinc-700 rounded-lg bg-white-500 text-center text-neutral-800 " type="text" placeholder="Nom appareille" />
              <button className="mt-10 hover:bg-teal-900  w-40 h-9 rounded-2xl border-2 border-blue-500 text-blue-100" onClick={async ()=>{
                // submitadding();
                setCheck(1)
                await delay(2000);
                setCheck(0)
              }}>Add</button>
              </div>) :(
              <div className="flex flex-col justify-center items-center w-full h-90">
                <VerifiedIcon className="text-green-500 text-9xl"  sx={{ fontSize: 240 }}/>
              </div>)   
              }
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Activeapp;
