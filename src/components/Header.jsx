import React, { useState } from 'react';


import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import GetAQuote from './GetAQuote';
import logo from '../assets/homelogo.png';

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
        <div  className={color ? 'bg-rgbaHeader transition-all fixed w-full h-[100px] z-10 p-10' : 'fixed w-full h-[90px] z-10 p-10'}>

            <nav style={{marginTop:"-25px"}} className=" px-2 sm:px-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto ">
                    <Link className="flex items-center" to='/'>
                        {/* <img src={logo} className="mr-3 h-10 sm:h-9 text-[#F2921D]" alt="Hiking Logo" /> */}


                        <img src={logo} style={{width:"70px",height:"70px",backgroundColor:"white",paddingTop:"-110px"}}></img>
                    </Link>

             

                   
                    <div className={`md:flex md:items-center w-full md:w-auto ${menu ? "block bg-rgbaHeader w-[900px] h-[900px] flex items-center justify-center transition-all" : "hidden"}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            {/* <li className='block py-2 pr-4 pl-3 '><Link className='text-xl font-bold text-green' to='/about'>About Us</Link></li>
                            
                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/services'>Services</Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/blog'><a href='/#article'>Blog</a></Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/contact'>Contact</Link></li> */}
                            <li className='block py-2 pr-4 pl-3 '><a className='text-xl font-bold text-green' href="/#about">About Us</a></li>
                            
                            <li className='block py-2 pr-4 pl-3'><a className='text-xl font-bold text-green' href="/#services">Services</a></li>

                            <li className='block py-2 pr-4 pl-3'><a className='text-xl font-bold text-green' href="/#article">Blog</a></li>

                            <li className='block py-2 pr-4 pl-3'><a className='text-xl font-bold text-green' href="/#contact">Contact</a></li>
                            <li><GetAQuote /></li>


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;