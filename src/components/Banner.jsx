import React from 'react';
import bg from '../assets/green-mountains-during-golden-sunset-tmr257zj070xgfry.jpg'
import curveImg from '../assets/3d-fluency-recycling.png'
const Banner = () => {
    return (
        <div>
            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
                <div
                    className="absolute inset-0  sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-white/35 bg-blend-overlay"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left w-full">
                        <img src={curveImg} alt="" className='w-80 relative mix-blend-overlay' />

                        <h1 className="text-1xl font-extrabold sm:text-4xl absolute top-[230px] lg:top-[400px]">
                            <span className='text-yellow'>Responsible</span> Consumption

                            <strong className="block font-extrabold text-rose-700">
                                <span className='text-yellow'>And</span> Production
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-yellow">
                            Connecting world to green energy solutions and carbon free future
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Banner;