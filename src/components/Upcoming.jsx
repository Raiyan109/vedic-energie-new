import React from 'react';
import styled from 'styled-components';
import bg from '../assets/wave-bg-blue.png'
import img from '../assets/Home energy monitors.jpg'
import GetAQuote from './GetAQuote';


const Section = styled.div`

background-image: url(${bg});
background-size: cover;
isolation: isolate;
scroll-snap-align:center;
`
const Upcoming = () => {
    return (
        <Section>

            <div id="upcoming" className='bg-cover bg-no-repeat lg:p-8 py-20'>

                <div className='text-center lg:text-3xl md:text-2xl text-xl font-bold pt-4 lg:mt-0 md:mt-7 mt-20'>Upcoming Launch</div>
                <section className="lg:p-36 md:p-3 py-2 p-1">
                    <div className="container flex lg:flex-row lg:justify-between md:flex-col flex-col justify-center p-6 mx-auto ">
                        <div className="flex flex-col justify-center p-4 text-center lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-none  text-orange">Home Energy Monitor
                            </h1>
                            <p className="mt-6 lg:mb-8 lg:text-lg md:text-sm text-xs mb-4">A home energy monitor is a device that helps you track and
                                analyze the energy consumption of your household. It provides
                                real-time information on how much energy is consumed ,allowing
                                you to make informed decisions about energy usage and
                                potentially save money on your utility bills. It is being developed
                                inhouse and will be available to you in coming months.
                            </p>
                            <div className="flex flex-col space-y-4 ">
                                <GetAQuote backgroundColor='#2F45B7' color='#F0EFFF' />
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 lg:h-50 md:h-80 h-72">
                            <img src={img} alt="upcoming-energy" className="object-cover lg:h-96 md:h-72 h-80"
                                style={{
                                    boxShadow: '17px 25px 15px 8px rgb(37,89,191)'
                                }}
                            />

                        </div>
                    </div>
                </section>
            </div>
        </Section>
    );
};

export default Upcoming;