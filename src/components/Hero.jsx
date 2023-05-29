import React from 'react';
import bgHero from '../assets/mesmerizing-shot-crystal-blue-ocean-waves.jpg'
import { CgInfinity } from 'react-icons/cg'
const Hero = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' id='banner' style={{ backgroundImage: `url(${bgHero})` }} >
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <div className='relative font-semibold'>
                        <CgInfinity className='lg:text-[700px] md:text-[470px] text-[320px] opacity-80' style={{ color: 'lightBlue' }}
                        />
                        <h1 className='absolute lg:top-60 md:top-52 top-32 right-0 lg:text-6xl md:text-3xl text-2xl'><span className='text-white'>Responsible</span> Consumption And <span className='text-white'>Production</span></h1>
                        <p className="lg:text-lg md:text-lg text-sm text-white absolute lg:bottom-32 md:bottom-20 bottom-12 lg:right-9 md:right-9 right-4">Connecting world to green energy solutions and carbon free future.</p>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Hero;