import React from 'react';
import styled from 'styled-components';


const Section = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:130px 0; 
background-color:#75ed9d;
scroll-snap-align:center;

`
const See = () => {
    return (
        <Section>
            <div className='flex flex-col justify-center items-center p-20'>
                <h1 className="see lg:pt-4 md:pt-3 pt-7 text-4xl font-bold text-white">SEE WHAT WE CAN DO FOR YOU
                </h1>
                <h1 className="text-3xl text-white uppercase py-5">Schedule Your <span className='text-yellow'>First Meeting</span>
                </h1>

                <p className="py-6 text-white lg:w-2/3 mx-auto leading-relaxed text-sm font-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <button className='w-[137px] h-[50px] bg-yellow text-green rounded-md p-1 text-sm'>SCHEDULE NOW</button>
            </div>
        </Section>
    );
};

export default See;