import React from 'react';
import GaugeChart from 'react-gauge-chart'

const UserGauge = ({ userData }) => {
    const inputMin = 6;
    const inputMax = 12000;
    const outputMin = 0;
    const outputMax = 1;

    const data = userData; // replace with your data
    const percent = (data - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;

    // For text
    const text = userData.toFixed(2)

    return (
        <div className='relative'>
            <div className='flex justify-center items-center py-4'>
                <h1 className='text-xl text-orange font-bold lg:max-w-none max-w-sm text-center'>User's Consumption Data</h1>
            </div>
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={20}
                percent={percent}
                needleColor='green'
                needleBaseColor='green'
            // hideText={true}
            />
            {/* <h1 className='absolute lg:bottom-[-70px] lg:left-[380px] md:bottom-30 md:left-28 bottom-28 left-52 lg:text-6xl md:text-1xl text-md text-green'>{text}</h1> */}
        </div>
    );
};

export default UserGauge;