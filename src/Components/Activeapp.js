import React from "react";
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Popup from "reactjs-popup";
import VerifiedIcon from '@mui/icons-material/Verified';
 
function Activeapp() {
  const [active, setActive] = React.useState(0);
  const [check, setCheck] = React.useState(0);
  const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
  return (
    <div className="h-full dark:bg-slate-800 rounded-xl ">
      <div className="h-full block ">
        <div className="flex flex-row justify-between mx-3">
          <h1 className="text-[#f5efef] text-4xl p-8 pb-12">Active Appareille</h1>
          <Popup trigger={<button className="mr-10 text-cyan-300 font-bold" > Ajouter appareille</button>} modal>
            <div className="dark:bg-slate-900	h-128 w-144 border-2 border-zinc-500">
              <div className="w-full text-center mt-8">
                <h1 className="text-4xl text-slate-50 font-semibold">Ajout appareille</h1>
              </div>
              {   check===0 ? (     <div className="flex flex-col justify-center h-70 mt-14 items-center">
                <input className="w-96 h-12 border-2 border-zinc-700 rounded-lg bg-blue-500 text-center mb-10" type="text" placeholder="Ip appareille" />
                <input className="w-96 h-12 border-2 border-zinc-700 rounded-lg bg-blue-500 text-center text-neutral-800 " type="text" placeholder="Nom appareille" />
              <button className="mt-10 hover:bg-teal-900  w-40 h-9 rounded-2xl border-2 border-blue-500 text-blue-100" onClick={async ()=>{
                setCheck(1)
                await delay(2000);
                setCheck(0)
              }}>Ajouter</button>
              </div>) :(
              <div className="flex flex-col justify-center items-center w-full h-90">
                <VerifiedIcon className="text-green-500 text-9xl   "  sx={{ fontSize: 240 }}/>
              </div>)   
          
              }
      
            </div>
          </Popup>
        </div>
        <div className="overflow-y-auto h-64 scrollbar scrollbar-thumb-gray-700 ml-10 scrollbar-thumb-rounded-lg   grid  justify-items-center ">
          <div className="w-full text-center ">
          <div className=" bg-slate-600 rounded-[50px] mx-5 mb-2 flex flex-column justify-center items-center">
            <h3 className="text-[#EFF5F5] text-xl p-4 pr-14">Appareille 1:</h3>     
              {active ? (
              <CheckCircleIcon color='success'/>
      ) : (
        <UnpublishedIcon color="error"/>
      )}
          </div>
          <div className=" bg-slate-600 rounded-[50px] mx-5 mb-2 flex flex-column justify-center items-center">
            <h3 className="text-[#EFF5F5] text-xl p-4 pr-14">Appareille 2:</h3>
                        <UnpublishedIcon color="error"/>

          </div>
          <div className=" bg-slate-600 rounded-[50px] mx-5 mb-2 flex flex-column justify-center items-center">
            <h3 className="text-[#EFF5F5] text-xl p-4 pr-14">Appareille 3:</h3>
                        <UnpublishedIcon color="error"/>

          </div>
          <div className=" bg-slate-600 rounded-[50px] mx-5 mb-2 flex flex-column justify-center items-center">
            <h3 className="text-[#EFF5F5] text-xl p-4 pr-14">Appareille 4:</h3>
                        <UnpublishedIcon color="error"/>

          </div>
          <div className=" bg-slate-600 rounded-[50px] mx-5 mb-2 flex flex-column justify-center items-center">
            <h3 className="text-[#EFF5F5] text-xl p-4 pr-14">Appareille 5:</h3>
                        <UnpublishedIcon color="error"/>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activeapp;
