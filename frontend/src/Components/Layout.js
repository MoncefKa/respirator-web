import React from 'react'
import Navbar from './Navbar'
import Sidebar from './SideBar'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
