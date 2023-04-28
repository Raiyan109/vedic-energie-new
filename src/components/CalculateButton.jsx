import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CalculateButton = () => {
    const [goToCalc, setGoToCalc] = useState(false)
    return (
        <div>
            <Link to='/calcStep1'>
                <button className='w-[137px] h-[50px] bg-orange rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-lightYellow hover:text-orange hover:transition-all'>Calculate</button>
            </Link>
        </div>
    );
};

export default CalculateButton;