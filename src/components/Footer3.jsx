import React from 'react';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';
import clss from './style.module.css';
import pic from '../assets/footerlogo.png';

const Footer3 = () => {
    return (
        <>
            <footer>
                <footer class="text-blue body-font pl-12 md:py-6 lg:px-0 md:-px-2 px-20 py-10">
                    <div className='flex lg:flex-row md:flex-row flex-col  lg:justify-around md:justify-center justify-center md:space-y-7 space-y-6 md:space-x-4 space-x-9'>
                        <div className='flex lg:flex-row md:flex-col flex-col space-x-9 md:space-y-7 space-y-5 md:space-x-4'>
                            {/* image */}
                            <div className='flex justify-center items-center'>
                                <a href="/">
                                    <img src={pic} width='150' height='150' className='' alt='footer-logo' />
                                </a>
                            </div>
                            {/* paragraph */}
                            <div className='flex justify-center items-center'>
                                <div className='max-w-md'>
                                    <p className='text-sm w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            {/* social link */}
                            <div className='flex justify-center items-center'>
                                <div>
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
                            </div>
                        </div>
                        <div className='flex lg:flex-row md:flex-col flex-col space-x-9 '>
                            {/* contact */}
                            <div className='flex justify-center items-center'>
                                <div>
                                    <h2 className="title-font font-medium text-blue underline tracking-widest text-md uppercase mb-3 lg:-ml-16 ml-0 lg:mt-0 mt-12 text-center">Contact</h2>

                                    <div className=''>
                                        <ul className=" space-y-3 text-sm">
                                            <li>
                                                <a
                                                    className="flex items-center justify-center gap-3"
                                                    href="/"
                                                >
                                                    <h3 className='text-xl text-blue'><ImLocation2 /></h3>
                                                    <span className='text-blue text-sm text-left'>Room- 3, B-20, Wallfort city, Raipur, Chhatisgarh</span>
                                                </a>
                                            </li>
                                            <li className='mr-32'>
                                                <a
                                                    className="flex items-center justify-center gap-3"
                                                    href="/"
                                                >
                                                    <h3 className='text-xl text-blue'><MdEmail /></h3>
                                                    <span className='text-blue text-sm text-left'>contact@vedicenergie.com</span>
                                                </a>
                                            </li>

                                            <li className='mr-52'>
                                                <a
                                                    className="flex items-center justify-center gap-3"
                                                    href="/"
                                                >
                                                    <h3 className='text-xl text-blue'><BsFillTelephoneFill /></h3>
                                                    <span className='text-blue text-sm text-left'>+91 98439 37773</span>
                                                </a>
                                            </li>
                                            <li>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* map */}
                            <div className='flex justify-center items-center'>
                                <a
                                    href="/"
                                >
                                    <iframe className='py-5 lg:w-2/3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109060.53116613768!2d81.54933879141241!3d21.213079179947787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dc214e07cc6b%3A0xad8281733d2dcbe7!2sRaipur%2C%20Chhattisgarh%20492013!5e0!3m2!1sen!2sin!4v1681626250643!5m2!1sen!2sin"  ></iframe>
                                </a>
                            </div>
                        </div>
                    </div>

                </footer>

                <footer className="flex justify-center items-center p-4 bg-lightBlue lg:text-sm text-[10px] font-semibold">
                    <div>
                        <p className='text-white'>COPYRIGHT © 2023 VEDIC ENERGIES | ALL RIGHTS RESERVED | PRIVACY | SITEMAP | LEGAL | COPYRIGHT | ACCESSIBILITY</p>
                    </div>
                </footer>
            </footer>
        </>
    );
};

export default Footer3;