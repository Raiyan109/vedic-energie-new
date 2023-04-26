import React from 'react';
import { Link } from 'react-router-dom';

const Calculation = () => {
    return (
        <div>
            <section className="bg-orange">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className='text-center text-2xl font-bold text-lightBlue'>Energy Calculator</h2>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <span>
                                <Link to='/article' className='text-lightBlue mr-2'>Residency</Link>
                                |
                                <Link to='/article' className='text-lightYellow ml-2'>Commercial</Link>
                            </span>
                            <h3 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5">Energy Usage Calculator For Your Home</h3>

                            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-7'>
                                <label
                                    for="State"
                                    className="relative block overflow-hidden border-b border-green pt-3 focus-within:border-blue"
                                >
                                    <input
                                        style={{ background: 'transparent' }}
                                        type="dropdown"
                                        id="UserEmail"
                                        placeholder="Email"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />
                                </label>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Calculation;