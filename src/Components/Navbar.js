import React from 'react';
const Navbar = () => {
    let name="{ dashboard }"
    return (
        <div className="dark:border-gray-600 dark:bg-slate-800 w-full p-16">
            <div className="w-auto h-full text-center capitalize flex items-center justify-around">
                <h1 className="text-[#EFF5F5] text-3xl font-semibold">
                    welcome to your <span className="text-[#00E7FF] uppercase font-bold">{name}</span>
                </h1>
            </div>
        </div>
    )
}

export default Navbar