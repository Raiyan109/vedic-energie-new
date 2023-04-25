import React from 'react';
import styled from 'styled-components';
import teslaImg from '../assets/tesla-logo-png-27.png'
import adaniImg from '../assets/Adani_2012_logo.png'

const Section = styled.div`

background-color:#FFB951;
scroll-snap-align:center;
`
const Affiliate = () => {
    return (
        <Section>
            <div className="py-36">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Our Affiliates
                        </h3>

                    </div>
                    <div className="mt-12 flex justify-center">
                        <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.tesla.com/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="tesla" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.adanisolar.com/" target="_blank"><img src={adaniImg} className="w-20 h-16 my-auto" alt="adani" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.hivepower.tech/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.dynmhx.io/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://climatetrade.com/es/inicio/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.tesla.com/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.tesla.com/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.tesla.com/" target="_blank"><img src={teslaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Affiliate;