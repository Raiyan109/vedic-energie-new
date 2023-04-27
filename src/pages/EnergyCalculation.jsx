import React, { useReducer, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleProgressBar from '../components/CircleProgressBar';
import CalculateButton from '../components/CalculateButton';


const EnergyCalculation = () => {



    return (
        <div >
            <Header />
            <div>
                <div className='bg-[#D4FAFC]'>
                    <div className="container flex flex-col justify-center p-6 mx-auto py-40 md:py-42 lg:py-46 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-semibold sm:text-6xl text-white lg:leading-loose leading-12">Energy Calculator For Your <span className='text-black'>Home</span> And <span className='text-black'>Industry</span>
                            </h1>

                            <p className="mt-6 mb-8 text-lg sm:mb-12">You can have an estimate about your energy bills according to your usage
                            </p>

                            <CalculateButton />
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <CircleProgressBar className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EnergyCalculation;