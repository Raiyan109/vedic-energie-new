import React, { useState } from 'react';


import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import GetAQuote from './GetAQuote';



const Header = () => {
    const [menu, setMenu] = useState(false)
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'bg-rgbaHeader transition-all fixed w-full h-[90px] z-10 p-10' : 'fixed w-full h-[90px] z-10 p-10'}>

            <nav className=" px-2 sm:px-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto ">
                    <Link className="flex items-center" to='/'>
                        {/* <img src={logo} className="mr-3 h-10 sm:h-9 text-[#F2921D]" alt="Hiking Logo" /> */}


                    </Link>

                    <button
                        onClick={() => setMenu(!menu)}
                        className="inline-flex items-center p-2 ml-3  md:hidden"
                    >
                        {menu ? <FaTimes /> : <FaBars />}
                        <span className="sr-only">Open main menu</span>
                    </button>


                    <div className={`md:flex md:items-center w-full md:w-auto ${menu ? "block" : "hidden"}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">


                            <li className='block py-2 pr-4 pl-3 '><Link className='text-xl font-bold text-green' to='/about'>About Us</Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/services'>Services</Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/blog'>Blog</Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/contact'>Contact</Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/about'>About</Link></li>

                            <li><GetAQuote /></li>


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;