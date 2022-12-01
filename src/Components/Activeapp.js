import React from "react";
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Activeapp() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="h-full dark:bg-slate-800 rounded ">
      <div className="h-full block ">
        <h1 className="text-[#f5efef] text-4xl p-8 pb-12">Active Appareille</h1>
        <div className="overflow-y-auto h-64 scrollbar scrollbar-thumb-gray-700 ml-10 scrollbar-thumb-rounded-lg   grid  justify-items-center ">
          <div className="w-full text-center ">
          <div className=" bg-slate-600 rounded-[50px] mx-5 mb-2 flex flex-column justify-center items-center">
            <h3 className="text-[#EFF5F5] text-xl p-4 pr-14">Appareille 1:</h3>
            <CheckCircleIcon color='success'/>
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
