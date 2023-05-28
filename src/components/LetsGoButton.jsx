import React from 'react';


const LetsGoButton = ({ handleClick }) => {
    return (
        <div className='pt-6'>

            <button
                onClick={handleClick}
                className='w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Lets Go</button>

        </div>
    );
};

export default LetsGoButton;