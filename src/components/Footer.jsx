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
      
        <div>
            <footer aria-label="Site Footer" style={{marginTop:"100px"}} className="bg-white">
                <div id="contact"
                    className="max-w-screen-xl px-4 py-14 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>

                            <img style={{paddingBottom:"20px"}} src={pic} width='150' height='150'></img>
                            <p className="max-w-xs mt-4 text-green-500 text-green mt-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <h3 style={{paddingTop:"20px"}}  className='uppercase underline font-medium text-green mt-4'>Social Links</h3>
                            <ul className="flex gap-6 mt-8">
                                <li>
                                <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 text-xl"
                                    >
                                        <BsFacebook className={clss.in} />
                                   </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 text-xl"
                                    >
                                       

                                        <AiOutlineInstagram className={clss.in} />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 text-xl"
                                    >
                                        <span ><FaTwitterSquare className={clss.in}/></span>


                                        
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/vedic-energie/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 text-xl"
                                    >
                                     

                                        <AiFillLinkedin className={clss.in}/>
                                    </a>
                                </li>


                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"
                        >
                            <div>
                                <p className="font-medium text-green uppercase underline">Quick Link</p>

                                <nav aria-label="Footer Navigation - Services" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li className='py-2 pr-4 pl-3 '><Link className='text-sm text-green' to='/about'>About Us</Link></li>

                                        <li className='py-2 pr-4 pl-3'><Link className='text-sm text-green' to='/services'>Services</Link></li>

                                        <li className='py-2 pr-4 pl-3'><Link className='text-sm text-green' to='/blog'>Blog</Link></li>

                                        <li className='py-2 pr-4 pl-3'><Link className='text-sm text-green' to='/contact'>Contact</Link></li>

                                        <li className='py-2 pr-4 pl-3'><Link className='text-sm text-green' to='/about'>About</Link></li>

                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-green uppercase underline">Services</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
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
                            </div>

                            <div>
                                <p className="font-medium text-green uppercase underline">Contact</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <div className='flex gap-2 py-2'>
                                        <h3 className='text-xl text-green'><ImLocation2 /></h3>
                                        <p className='text-green text-sm'>31 Steeplebush Ave Unit 1 Brampton, ON L6R 3B4</p>
                                    </div>
                                    <div className='flex gap-2 py-2'>
                                        <h3 className='text-xl text-green'><MdEmail /></h3>
                                        <p className='text-green text-sm'>contact@vedicenergie.com</p>
                                    </div>
                                    <div className='flex gap-2 py-2'>
                                        <h3 className='text-xl text-green'><BsFillTelephoneFill /></h3>
                                        <p className='text-green text-sm'>+91 98439 37773</p>
                                    </div>
                                    <iframe style={{paddingTop:"20px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109060.53116613768!2d81.54933879141241!3d21.213079179947787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dc214e07cc6b%3A0xad8281733d2dcbe7!2sRaipur%2C%20Chhattisgarh%20492013!5e0!3m2!1sen!2sin!4v1681626250643!5m2!1sen!2sin" width="330" height="197" ></iframe>
                                </nav>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>
            <footer className="flex justify-center items-center p-4 bg-lightGreen  text-xs">
                <div>
                    <p className='text-white'>COPYRIGHT © 2023 VEDIC ENERGIES | ALL RIGHTS RESERVED | PRIVACY | SITEMAP | LEGAL | COPYRIGHT | ACCESSIBILITY</p>
                </div>
            </footer>
        </div>
      
    );
};

export default Footer;