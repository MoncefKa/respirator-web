import React from 'react'
import PatientGlob from '../Components/PatientGlob'
import health from "../assets/images/hosp.gif";

const Patient = () => {
    return (
    <div>
        <div className="w-full">
            <div className="h-54 dark:bg-slate-800 rounded">
                <div className="flex justify-between items-center">
                    <h1 className="text-[#EFF5F5] text-2xl p-8">
                        General Information
                    </h1>
                    <img className="w-2/6 h-48" src={health} alt="health"/>
                </div>
            </div>
        </div>
        <PatientGlob/>
    </div>
    );
}

export default Patient
