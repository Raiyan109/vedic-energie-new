import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <div className="py-56 mx-auto" id='about'>
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                            <p className="text-xs dark:text-gray-400">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p>Insert the actual text content here...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;