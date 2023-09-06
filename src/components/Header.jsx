import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import GetAQuote from './GetAQuote';
import logo from '../assets/logo-without-border.png';
// import { HashLink as NavLink } from 'react-router-hash-link';
import './style.css'
import styles from './style.module.css'
import Contact from '../pages/Contact'

const Header = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const [menu, setMenu] = useState(false)
    const [color, setColor] = useState(false)
    const [activeLink, setActiveLink] = useState("");

    const handleMouseEnter = () => {
        setMenuVisibility(true);
    }
    const handleMouseLeave = () => {
        setMenuVisibility(false);
    }

    const handleClick = (event, targetSection) => {
        event.preventDefault();
        const section = document.getElementById(targetSection);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById('banner');
            const section2 = document.getElementById('efficient');
            const section3 = document.getElementById('energyRes');
            const section4 = document.getElementById('article');

            if (window.pageYOffset >= section1.offsetTop && window.pageYOffset < section2.offsetTop) {
                setActiveLink('banner');
            } else if (window.pageYOffset >= section2.offsetTop && window.pageYOffset < section3.offsetTop) {
                setActiveLink('efficient');
            } else if (window.pageYOffset >= section3.offsetTop && window.pageYOffset < section4.offsetTop) {
                setActiveLink('energyRes');
            } else if (window.pageYOffset >= section4.offsetTop) {
                setActiveLink('article')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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

        <div className={color ? 'bg-rgbaHeader transition-all  w-full h-[100px] z-10 p-10' : 'fixed w-full h-[90px] z-10 p-10'}>


            <nav style={{ marginTop: "-25px" }} className="px-2 sm:px-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link className="flex items-center" to='/'>
                        <img src={logo} alt='header-logo' style={{ width: "70px", height: "70px" }}></img>
                    </Link>

                    <button
                        onClick={() => setMenu(!menu)}
                        className="items-center md:hidden text-white text-2xl"
                    >
                        {menu ? <FaTimes /> : <FaBars />}
                        <span className="sr-only">Open main menu</span>
                    </button>


                    <div className={`md:flex md:items-center w-full md:w-auto ${menu ? "block bg-rgbaHeader w-[900px] h-[600px] flex items-center justify-center transition-all" : "hidden"}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            {/* <li className='block py-2 pr-4 pl-3 '><Link className='text-xl font-bold text-green' to='/about'>About Us</Link></li>
                            
                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/services'>Services</Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/blog'><a href='/#article'>Blog</a></Link></li>

                            <li className='block py-2 pr-4 pl-3'><Link className='text-xl font-bold text-green' to='/contact'>Contact</Link></li> */}



                            {/* <li className={activeLink === 'banner' ? 'active' : ''}>
                                <a href="/" onClick={(e) => handleClick(e, 'banner')} className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-white'>Home</a>
                            </li> */}
                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                            color: isActive ? '#EBE667' : 'white',
                                        };
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={activeLink === 'efficient' ? 'active' : ''}>
                                <a href="#efficient" onClick={(e) => handleClick(e, 'efficient')} className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-white'>About Us</a>
                            </li>
                            <li className={activeLink === 'energyRes' ? 'active' : ''}>
                                <a href="#energyRes" onClick={(e) => handleClick(e, 'energyRes')} className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-white'>Services</a>
                            </li>
                            <li className={activeLink === 'article' ? 'active' : ''}>
                                <a href="#article" onClick={(e) => handleClick(e, 'article')} className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-white'>Blog</a>
                            </li>

                            {/*  */}
                            {/* <li className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-green'>
                                <NavLink
                                    to="/about"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px lightGreen' : 'none',
                                            color: isActive ? 'lightGreen' : '#1D6126',
                                        };
                                    }}
                                >
                                    About us
                                </NavLink>
                            </li>

                            <li className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-green'>
                                <NavLink
                                    to="/services"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px lightGreen' : 'none',
                                            color: isActive ? 'lightGreen' : '#1D6126',
                                        };
                                    }}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-green'>
                                <NavLink
                                    to="/blog"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px lightGreen' : 'none',
                                            color: isActive ? 'lightGreen' : '#1D6126',

                                        };
                                    }}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className='block py-2 lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-green'>
                                <NavLink
                                    to="/contact"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px lightGreen' : 'none',
                                            color: isActive ? 'lightGreen' : '#1D6126',
                                        };
                                    }}
                                >
                                    Contact
                                </NavLink>
                            </li> */}
                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/energyCalc"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                            color: isActive ? '#EBE667' : 'white',
                                        };
                                    }}
                                >
                                    Calculation
                                </NavLink>
                            </li>
                          {/*  <li><Link to ='/Contact' ><GetAQuote backgroundColor='#FFFFFF' color='#2F45B7' /></Link></li> */}


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;