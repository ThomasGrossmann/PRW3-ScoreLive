import React from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';

const Layout = ({ children }) => {
    return (
        <>
            <header className='flex flex-row justify-between pt-3 px-3 sticky top-0 bg-black'>
                <img src="logo.png" alt="logo" className="h-24" />
                <div className='flex flex-row gap-8'>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "text-[#F3B17E]" : "text-[#946a48]"
                    }>Home</NavLink>
                    <NavLink to='/login' className={({ isActive }) =>
                        isActive ? "text-[#F3B17E]" : "text-[#946a48]"
                    }>Login</NavLink>
                </div>
            </header>
            <main className="p-12 overflow-auto">{children}</main>
        </>
    );
};

export default Layout;