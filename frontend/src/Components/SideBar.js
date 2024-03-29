import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mehdi from "../assets/images/patient1.jpeg";


import { BiHome } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { BiGroup } from "react-icons/bi";
import Logo from "../assets/images/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: "Home", path: "/Dashboard", src: <BiHome /> },
    { title: "Patients", path: "/Patient", src: <BiGroup /> },
    { title: "LOGOUT", path: "/login", src: <TbLogout />, gap: "true" },
  ];
  const openSide = () => {
    setOpen(true);
  };
  const closeSide = () => {
    setOpen(false);
  };
  return (
    <div className="overflow-hidden">
      <div
        className={`${
          open ? "w-30" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-3 dark:bg-slate-800`}
        onMouseOver={openSide}
        onMouseLeave={closeSide}
      >
        <Link to="/">
          <div className={`flex ${open && "gap-x-1"} items-center`}>
            <img src={Logo} alt="" className="w-16 h-16"/>
            {open && (
              <span className="text-xl pr-4 font-medium whitespace-nowrap dark:text-white capitalize p-4">
                Lung-Link
              </span>
            )}
          </div>
        </Link>
        <div className="h-full">
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <li
                  className={`flex items-center text-center gap-x-6 p-3 text-base font-normal rounded-lg items-stretch cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span className="text-2xl m-auto">{menu.src}</span>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right m-auto duration-300 hover:block`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="relative">
        <img
          className="w-12 h-12 ml-2 -my-28 rounded-full"
          src={mehdi}
          alt="mehdi"
        />
        <span className="bottom-0 left-10 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
