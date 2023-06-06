import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CircleProgressBar = () => {
    const percentage = 75;
    return (
        <div>
            <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({
                    // Colors
                    pathColor: `#2F45B7`,
                    textColor: '#2F45B7',
                    trailColor: '#F0EFFF',
                    backgroundColor: '#F0EFFF',
                })}
            >
                <p className='text-2xl text-[#2F45B7]'>75%</p>
                <p className='text-2xl text-[#2F45B7]'>Usage</p>
            </CircularProgressbarWithChildren>

        </div >
    );
};

export default CircleProgressBar;