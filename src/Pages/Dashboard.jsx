import React from 'react'
import Numpatients from '../Components/Numpatients';
import Numappa from '../Components/Numappa';
import Activeapp from '../Components/Activeapp'
const Dashboard = () => {
    return(
        <div className="w-full overflow-hidden">
        <div className="h-54 dark:bg-slate-800 rounded">
            <div className="flex justify-between items-center">
                <h1 className="text-[#EFF5F5] text-2xl p-8">
                    General Information
                </h1>
                
            </div>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-2 p-12">
            <div className="... row-span-2"><Activeapp/></div>
            <div className="... col-start-2 col-span-2"><Numpatients/></div>
            <div className="... col-start-2 col-span-2"><Numappa/></div>
        </div>

    </div>
    );
}

export default Dashboard
