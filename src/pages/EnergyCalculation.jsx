import React, { useReducer, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleProgressBar from '../components/CircleProgressBar';
import Calculation from '../components/Calculation';
import { useCalc } from '../context/CalcProvider';
import Table from '../components/Table';
import Tipscategory from '../components/Tipscategory';
import bg from '../assets/ellipse.png'
import styled from 'styled-components';
import RoofSolarCalculator from '../components/RoofSolarCalculator';
import SolarCalculator from '../components/SolarCalculator';

const Section = styled.div`
background-image: url(${bg});
height: 120vh;
background-repeat: no-repeat;
background-size: cover; 
background-position: center; 
@media only screen and (max-width:700px){
    height:auto;
    
}
`
const EnergyCalculation = () => {
    const { state, dispatch } = useCalc()

    // const ref = useRef(null)
    // const handleGoToCalcPage = () => {
    //     setGoToCalc(prevState => !prevState)
    //     ref.current?.scrollIntoView({ behavior: 'smooth' })
    // }

    const [showStateSelect, setShowStateSelect] = useState(false);

    const handleGoToStateSelectClick = () => {
        setShowStateSelect(true);
    };
    return (
        <Section >
            <Header />
            <div>
                <div>
                    <div className="container flex flex-col justify-center p-6 mx-auto py-40 md:py-42 lg:py-46 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-semibold sm:text-6xl text-white lg:leading-loose leading-12">Energy Calculator For Your <span className='text-black'>Home</span> And <span className='text-black'>Industry</span>
                            </h1>

                            <p className="mt-6 mb-8 text-lg sm:mb-12">You can have an estimate about your energy bills according to your usage
                            </p>

                            <div>
                                <button
                                    onClick={handleGoToStateSelectClick}
                                    className='w-[137px] h-[50px] bg-orange rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-lightYellow hover:text-orange hover:transition-all'>Calculate</button>
                            </div>
                            {/* <BackToHome /> */}
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <CircleProgressBar className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* {showStateSelect && ( */}
                <Calculation />
                {/* )} */}
            </div>
            <Table />
            <SolarCalculator />
            <Tipscategory />
            <Footer />
        </Section >
    );
};

export default EnergyCalculation;