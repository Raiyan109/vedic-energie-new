import React from 'react';
import GaugeChart from 'react-gauge-chart'

const Gauge = ({ userData }) => {
    const inputMin = 6;
    const inputMax = 12000;
    const outputMin = 0;
    const outputMax = 1;

    const data = userData; // replace with your data
    const percent = (data - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;

    return (
        <div>
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={20}
                percent={percent}
                needleColor='green'
                needleBaseColor='green'
            />
        </div>
    );
};

export default Gauge;