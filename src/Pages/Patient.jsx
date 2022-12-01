import React from 'react'
import PatientGlob from '../Components/PatientGlob'
import health from "../assets/images/hosp.gif";

const Patient = () => {
    return (
    <div>
        <div className="w-full">
            <div className="h-12 dark:bg-slate-800 rounded">
                    <h1 className="text-[#EFF5F5] text-2xl text-center p-2">
                        Active Patients
                    </h1>
            </div>
        </div>
        <PatientGlob/>
    </div>
    );
}

export default Patient
