import React from 'react';
import styled from 'styled-components';


const Section = styled.div`

 
background-color:#2F45B7;
scroll-snap-align:center;

`
const See = () => {
    return (
        <Section>
            <div className='flex flex-col justify-center items-center py-32 px-10'>
                <h1 className="see lg:pt-4 md:pt-3 pt-7 text-5xl font-bold text-white">SEE WHAT WE CAN DO FOR YOU
                </h1>
                <h1 className="text-3xl text-white uppercase py-5">Schedule Your <span className='text-yellow'>First Meeting</span>
                </h1>

                <p className="py-7 text-white text-xl lg:w-2/3 mx-auto leading-relaxed font-light lg:text-center md:text-left text-left">Vedic Energy is your one stop destination for your energy needs that are cost
                    effective, environment oriented and educationally impactful. Schedule a meeting
                    with us and take your first step towards becoming energy efficient.
                </p>
                <button className='w-[137px] h-[50px] bg-yellow text-green rounded-md p-1 text-sm'>SCHEDULE NOW</button>
            </div>
        </Section>
    );
};

export default See;