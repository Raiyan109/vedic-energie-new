import React from 'react';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';
import clss from './style.module.css';
import pic from '../assets/footerlogo.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container lg:px-5 md:px-0 px-1 lg:py-12 py-9 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col lg:gap-[10px] gap-2">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={pic} width='150' height='150' className='' alt='footer-logo' />
                        </a>

                    </div>

                    <div className="w-64 flex-shrink-1 md:mx-0 mx-auto text-center md:text-left">
                        <p className="mt-2 text-sm text-blue">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-green underline tracking-widest text-md uppercase mb-3">Quick Link</h2>
                            <nav className="list-none mb-10">
                                <li className='py-2 pr-4 pl-3'><Link className='text-sm text-green' to='/about'>About Us</Link></li>

                                <li className='py-1 pr-4 pl-3'><Link className='text-sm text-green' to='/services'>Services</Link></li>

                                <li className='py-1 pr-4 pl-3'><Link className='text-sm text-green' to='/blog'>Blog</Link></li>

                                <li className='py-1 pr-4 pl-3'><Link className='text-sm text-green' to='/contact'>Contact</Link></li>
                            </nav>
                        </div> */}
                        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-green underline tracking-widest text-md uppercase mb-3">Services</h2>
                            <nav aria-label="Footer Navigation - Company" className="list-none mb-10">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to='/energyCalc' className="text-green transition hover:opacity-75">
                                            Energy Calculation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/energyDemand' className="text-green transition hover:opacity-75">
                                            Energy Demand Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/energySupply' className="text-green transition hover:opacity-75">
                                            Energy Supply Solution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/renewable' className="text-green transition hover:opacity-75">
                                            Renewable Energy Solution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/reduce' className="text-green transition hover:opacity-75">
                                            Reduce Energy Bills
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/energySaving' className="text-green transition hover:opacity-75">
                                            Energy Saving
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}

                        {/* Social Links */}
                        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                            <h3 className='uppercase underline font-medium text-blue mt-4 ml-3'>Social Links</h3>
                            <div>
                                <ul className="flex gap-6 mt-8 lg:justify-start md:justify-start justify-center">
                                    {/* <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="transition hover:opacity-75 text-xl"
                                    >
                                        <BsFacebook className={clss.in} />
                                    </a>
                                </li> */}
                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="transition hover:opacity-75 text-xl"
                                        >
                                            <AiOutlineInstagram className={clss.in} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="transition hover:opacity-75 text-xl"
                                        >
                                            <span ><FaTwitterSquare className={clss.in} /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/vedic-energie/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="transition hover:opacity-75 text-xl"
                                        >
                                            <AiFillLinkedin className={clss.in} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:ml-20 ml-0 lg:pr-0 md:pr-16 pr-0 flex lg:flex-row flex-col lg:justify-between lg:items-end justify-center items-center gap-x-20">
                            <div className="text-center">
                                <h2 className="title-font font-medium text-blue underline tracking-widest text-md uppercase mb-3 lg:ml-5 ml-0 lg:mt-0 mt-12">Contact</h2>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-3 sm:justify-start"
                                            href="/"
                                        >
                                            <h3 className='text-xl text-blue'><ImLocation2 /></h3>
                                            <span className='text-blue text-sm text-left'>Room- 3, B-20, Wallfort city, Raipur, Chhatisgarh</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-3 sm:justify-start"
                                            href="/"
                                        >
                                            <h3 className='text-xl text-blue'><MdEmail /></h3>
                                            <span className='text-blue text-sm'>contact@vedicenergie.com</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-3 sm:justify-start"
                                            href="/"
                                        >
                                            <h3 className='text-xl text-blue'><BsFillTelephoneFill /></h3>
                                            <span className='text-blue text-sm'>+91 98439 37773</span>
                                        </a>
                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a
                                    href="/"
                                >
                                    <iframe className='py-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109060.53116613768!2d81.54933879141241!3d21.213079179947787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dc214e07cc6b%3A0xad8281733d2dcbe7!2sRaipur%2C%20Chhattisgarh%20492013!5e0!3m2!1sen!2sin!4v1681626250643!5m2!1sen!2sin" width="330" height="197" ></iframe>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <footer className="flex justify-center items-center p-4 bg-lightBlue lg:text-sm text-[10px] font-semibold">
                    <div>
                        <p className='text-white'>COPYRIGHT © 2023 VEDIC ENERGIES | ALL RIGHTS RESERVED | PRIVACY | SITEMAP | LEGAL | COPYRIGHT | ACCESSIBILITY</p>
                    </div>
                </footer>
            </footer>
        </>

    );
};

export default Footer;