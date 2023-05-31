import React from 'react';
import bgHero from '../assets/mesmerizing-shot-crystal-blue-ocean-waves.jpg'
import { CgInfinity } from 'react-icons/cg'
import infinityImg from '../assets/infinity-symbol-2.png'
const Hero = () => {
    const imageStyle = {
        // fontSize: '320px',
        // opacity: '0.8',
        color: 'linear-gradient(176.56deg, #B8D4F5 2.84%, #7DB1FF 129.04%)',
        // background: ,
        filter: 'blur(3.1px)',
    };
    return (
        <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' id='banner' style={{ backgroundImage: `url(${bgHero})` }} >
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-2 xl:max-w-3xl">
                    <div className='relative font-semibold'>
                        {/* <CgInfinity className='lg:text-[700px] md:text-[470px] text-[320px] opacity-80' style={imageStyle}
                        /> */}
                        <img src={infinityImg} alt="" />
                        <h1 className='absolute lg:top-20 md:top-52 top-32 right-24 lg:text-5xl md:text-3xl text-2xl max-w-md font-semibold' style={{ lineHeight: '1.3' }}><span className='text-white'>Responsible</span> Consumption And <span className='text-white'>Production</span></h1>
                        <p className="absolute lg:-bottom-56 md:bottom-20 bottom-12 lg:text-lg md:text-lg text-sm text-[#EAEDFF]  ">With an aim to change how the world is powered, we work towards developing smarter and greener energy plans. At a time when the environmental risk is increasing, we focus on creating transformational solutions to address the climate crisis and work in alignment with the global initiatives for saving the planet.</p>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Hero;