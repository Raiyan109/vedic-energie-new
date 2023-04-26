import React from 'react';
import styled from 'styled-components';
import teslaImg from '../assets/tesla-logo-png-27.png'
import adaniImg from '../assets/Adani_2012_logo.png'
import hiveImg from '../assets/hivepower.png'
import dynmhxImg from '../assets/dynamhex.jpg'
import climateTradeImg from '../assets/climatetrade.png'
import ecosiaImg from '../assets/ecosia.png'
import doconomyImg from '../assets/doconomy.png'
import climatiqImg from '../assets/climatiq.png'

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
                                <a href="https://www.hivepower.tech/" target="_blank"><img src={hiveImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.dynmhx.io/" target="_blank"><img src={dynmhxImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://climatetrade.com/es/inicio/
" target="_blank"><img src={climateTradeImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://info.ecosia.org/
" target="_blank"><img src={ecosiaImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://doconomy.com/" target="_blank"><img src={doconomyImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>


                            <li className='transform hover:scale-105 duration-500 ease-in-out'>
                                <a href="https://www.climatiq.io/" target="_blank"><img src={climatiqImg} className="w-20 h-16 my-auto" alt="" /></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Affiliate;