import React from 'react';
import styled from 'styled-components';
import bg from '../assets/wave.png'
import img from '../assets/solar-pa.png'
import GetAQuote from './GetAQuote';
const Section = styled.div`
height:100vh;
background-image: url(${bg});

background-size: cover;
isolation: isolate;
scroll-snap-align:center;
`
const Upcoming = () => {
    return (
        <Section>

            <div id="upcoming" className='bg-center bg-no-repeat lg:p-8 py-12'>

                <div className='text-center lg:text-2xl text-xl font-bold'>Upcoming Launch</div>
                <section className="lg:p-36 md:p-32 py-20 p-1">
                    <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-none  text-orange">Energy Calculator
                            </h1>
                            <p className="mt-6 lg:mb-8 lg:text-lg md:text-sm text-xs mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <GetAQuote />
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-0 lg:mt-0 h-72 sm:h-80 lg:h-50 xl:h-100 2xl:h-128">
                            <img src={img} alt="upcoming-energy" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />

                        </div>
                    </div>
                </section>
            </div>
        </Section>
    );
};

export default Upcoming;