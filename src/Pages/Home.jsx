import React from 'react'
import health from "../assets/images/hosp.gif";

const Home = () => {
    return(
        
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
    );
}

export default Home
