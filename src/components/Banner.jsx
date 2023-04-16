import React from 'react';
import bg from '../assets/green-mountains-during-golden-sunset-tmr257zj070xgfry.jpg'
import curveImg from '../assets/3d-fluency-recycling.png'
import styled from 'styled-components';


const Section = styled.div`
height:100vh;
background-image: url(${bg});
scroll-snap-align:center;
`


const Banner = () => {
    return (
        <Section>
            <section
                className="relative bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/95 to-white/35 bg-blend-overlay"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left w-full">
                        <img src={curveImg} alt="" className='w-80 relative ' />

                        <h1 className="text-1xl font-extrabold lg:text-4xl text-3xl absolute top-[230px] lg:top-[400px]">
                            <span className='text-yellow'>Responsible</span> Consumption

                            <strong className="block font-extrabold">
                                <span className='text-yellow'>And</span> Production
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-yellow">
                            Connecting world to green energy solutions and carbon free future
                        </p>
                    </div>

                </div>
            </section>

        </Section>
    );
};

export default Banner;