import React from 'react';

const GetAQuote = ({ backgroundColor, color }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color
    };
    return (
        <div>

            <button className='lg:w-[137px] lg:h-[50px] md:w-[105px] md:h-[40px] w-[90px] h-[30px] lg:my-0 my-3 text-lightBlue rounded-md lg:text-[18px] md:text-sm text-xs hover:bg-lightYellow hover:text-navyBlue hover:transition-all' style={buttonStyle}>Get a Quote</button>

        </div>
    );
};

export default GetAQuote;