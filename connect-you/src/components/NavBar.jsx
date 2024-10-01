import React, {useState, useEffect} from 'react'
import logo from '/logo.png'
import { IoPersonOutline } from "react-icons/io5";

const NavBar = () => {
    const [isSticky, setSticky] = useState(false);

    // Handle Scroll Functions (NavBar Shaddow Effect)
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 0){
                setSticky(true)
            }
            else{
                setSticky(false)
            }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.addEventListener("scroll", handleScroll);
    }



}, [])
    const navItems = (
        <>
        <li><a href='/' className='text-orange'>Home</a></li>
        <li>
            <details>
                <summary>Events</summary>
                <ul className="p-2">
                    <li><a>All Events</a></li>
                    <li><a>Upcoming Events</a></li>
                    <li><a>Past Events</a></li>
                    
                    
                </ul>
                </details>
        </li>
        <li>
            <details>
                <summary>Find Event</summary>
                <ul className="p-2">
                    <li><a>Search From All</a></li>
                    <li><a>Reunion</a></li>
                    <li><a>Univarsity</a></li>
                    <li><a>Music / Concert</a></li>
                    <li><a>Festival</a></li>
                    <li><a>Skill Development</a></li>
                    <li><a>Business</a></li>
                    <li><a>Travel</a></li>
                    
                    
                </ul>
                </details>
        </li>
        <li><a>Create Event</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
        </>
    )
    return (
        <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out navBar'>
            <div className= {'navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"}'}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin=  "round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {navItems}
                        </ul>
                    </div>
                    <a href='/' >
                        <img src={logo} alt="Logo" className='flex-auto md:flex'/>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/*Search Button*/}
                    <button className="btn btn-ghost btn-circle hidden md:flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/*Cart Button*/}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 items-center justify-center hidden md:flex">
                    <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                    </div>
                    </div>
                    <a className="btn bg-orange rounded-full px-6 text-white flex mx-auto items-center gap-2"><span className='hidden xl:flex'><IoPersonOutline /></span>SignUp / Login</a>
                </div>
            </div>
        </header>
    )
}

export default NavBar