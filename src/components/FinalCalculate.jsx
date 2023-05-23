import React from 'react';

const FinalCalculate = ({ handleClick }) => {
    return (
        <div>
            <button
                onClick={handleClick}
                className='w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Calculate</button>
        </div>
    );
};

export default FinalCalculate;