import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';

const CapitaGauge = ({ conData }) => {
    console.log(conData);
    const inputMin = 100;
    const inputMax = 900;
    const outputMin = 0;
    const outputMax = 1;

    const data = conData.data ? conData.data : 100
    // console.log(data);
    const value = (data - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;

    return (
        <div>
            <div className='flex justify-center items-center py-4'>
                <h1 className='lg:text-2xl md:text-2xl text-xl text-orange font-bold lg:max-w-none max-w-sm text-center'>Per Capita Consumption Data</h1>
            </div>
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={20}
                percent={value}
                needleColor='green'
                needleBaseColor='green'
            // formatTextValue={(value) => value.toFixed(2)}
            />
        </div>
    );
};

export default CapitaGauge;