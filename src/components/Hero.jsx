import React from 'react';
import heroImg from '../assets/sv.png'
import ellipse from '../assets/ellipse.png'

const Hero = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' id='banner' style={{ backgroundImage: `url(${ellipse})` }}>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <img
                        src={heroImg}
                        alt=""
                        className='text-blue'
                    />
                    <p className="px-8 mt-8 mb-12 text-lg">Connecting world to green energy solutions and carbon free future.</p>

                </div>
            </section>
        </div>
    );
};

export default Hero;