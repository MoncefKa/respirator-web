import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { BiHome } from 'react-icons/bi'
import { TbLogout } from 'react-icons/tb'
import { BiGroup } from 'react-icons/bi'
import Logo from '../assets/images/logo.png'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const Menus = [
        { title: 'Home', path: '/', src: <BiHome /> },
        { title: 'Patients', path: '/Patient', src: <BiGroup /> },
        { title: 'Log Out', path: '/login', src: <TbLogout />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-30' : 'w-fit'
                } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-3 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer bottom-8   -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to='/'>
                    <div className={`flex ${open && 'gap-x-1'} items-center`}>
                        <img src={Logo} alt='' className=' w-16 h-16' />
                        {open && (
                            <span className='text-xl pr-4 font-medium whitespace-nowrap dark:text-white'>
                                Fab Lab
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6 '>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center text-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl m-auto'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-right m-auto duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
