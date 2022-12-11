import React from 'react'
import PatientGlob from '../Components/PatientGlob'
import Layout from '../Components/Layout'
import Btn_support from '../Components/Btn_support'

const Patient = () => {
    return (
    <Layout>
    <div>
        <div className="w-full ">
            <div className="h-54 dark:bg-slate-800 rounded">
                <div className="flex justify-between items-center">
                    <h1 className="text-[#EFF5F5] text-2xl p-8">
                        General Information
                    </h1>
            </div>
        </div>
        <PatientGlob />
    </div>
    </div>
    <Btn_support/>
    </Layout>
    );
}

export default Patient
