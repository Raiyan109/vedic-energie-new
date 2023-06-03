import React from 'react';
import bgHero from '../assets/banner-img-with-white-circle.png'
import { CgInfinity } from 'react-icons/cg'
import infinityImg from '../assets/infinity-symbol-2.png'
import './style.css'

const Hero = () => {

    return (
        <div>
            {/* <div
                className='absolute inset-0 bg-[#444444]/75'
            ></div> */}
            {/* <div
                className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/75 to-white/35 bg-blend-overlay "
            ></div> */}
            {/* <div className="absolute inset-0 bg-white/75 top-96 bottom-96 right-80 left-80 spray-div"></div> */}

            <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' id='banner' style={{ backgroundImage: `url(${bgHero})` }} >
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col items-center px-4  text-center  xl:max-w-3xl">
                        <div className='relative font-semibold'>
                            {/* <CgInfinity className='lg:text-[700px] md:text-[470px] text-[320px] opacity-80' style={imageStyle}
                        /> */}
                            <img src={infinityImg} alt="" />

                            <h1 className='absolute lg:top-20 md:top-16 top-10 lg:right-24 md:right-24 right-0 lg:text-5xl md:text-5xl text-3xl max-w-md font-semibold' style={{ lineHeight: '1.3' }}><span className='text-white'>Responsible</span> Consumption <span className='text-white'>And</span> Production</h1>

                            <p className="absolute lg:-bottom-56 md:-bottom-36 bottom-50 lg:text-lg md:text-lg text-sm text-[#EAEDFF]">With an aim to change how the world is powered, we work towards developing smarter and greener energy plans. At a time when the environmental risk is increasing, we focus on creating transformational solutions to address the climate crisis and work in alignment with the global initiatives for saving the planet.</p>

                        </div>


                    </div>
                </section>

            </div>

        </div>
    );
};

export default Hero;