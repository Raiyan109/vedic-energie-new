import React from 'react';
import styled from 'styled-components';
import bg from '../assets/wave-bg.png'
import img from '../assets/pexels-manuela-adler-949194.jpg'
import GetAQuote from './GetAQuote';
const Section = styled.div`
height:100vh;
background-image: url(${bg});
scroll-snap-align:center;
`
const Upcoming = () => {
    return (
        <Section>
            <div className='bg-cover bg-center bg-no-repeat p-8'>
                <div className='text-center lg:text-5xl text-2xl font-bold'>Upcoming Launch</div>
                <div class="container lg:px-48 px-6 py-28 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg">
                                <h1 class="text-3xl font-semibold text-orange lg:text-5xl">Energy Calculator</h1>

                                <p class="mt-3 text-gray-600 dark:text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                                <button class="mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform "><GetAQuote /></button>
                            </div>
                        </div>

                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 shadow-lg">
                            <img class="w-full h-full lg:max-w-3xl" src={img} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Upcoming;