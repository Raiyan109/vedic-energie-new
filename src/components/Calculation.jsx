import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LetsGoButton from './LetsGoButton';
import RangeSlider from './RangeSlider';
import { states } from '../constants';
import { AiOutlineSearch } from 'react-icons/ai'

const Calculation = ({ ref }) => {
    const [value, setValue] = useState(5)
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState('')

    const handleRange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div ref={ref}>
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

                            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-7 py-10'>
                                <label
                                    for="State"
                                    className="relative block overflow-hidden border-b border-green pt-6 focus-within:border-blue"
                                >
                                    <input
                                        onClick={() => setIsOpen((prev) => !prev)}
                                        style={{ background: 'transparent' }}
                                        type="dropdown"
                                        id="State"
                                        placeholder="State"
                                        className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />
                                    {isOpen && (
                                        <div className='absolute bg-lightBlue w-20 h-20'>
                                            {states.map((item, index) => (
                                                <div>
                                                    <h3>{item.state}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </label>

                                {/* <div className='relative block border-b border-green pt-6 focus-within:border-blue'>
                                    <button
                                        className='text-lightYellow'
                                        onClick={() => setIsOpen((prev) => !prev)}
                                    >Dropdown</button>

                                    {isOpen && (
                                        <div className='absolute bg-lightYellow top-[50px] flex flex-col items-start rounded-lg p-2 w-full z-10 max-h-60 overflow-y-auto'>
                                            {states.map((item, index) => (
                                                <div className='cursor-pointer hover:bg-orange hover:text-black hover:w-full rounded-lg p-1' key={index}>
                                                    <h3>{item.state}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div> */}

                                {/* new dropdown */}

                                <div className='w-full h-8 font-medium z-10'>
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className='w-full mt-8 flex items-center justify-start border-b-2 text-lightYellow'>
                                        {selected
                                            ? selected
                                            : 'Select State'}
                                    </div>
                                    <ul className={`bg-lightYellow mt-2 overflow-y-auto text-black ${isOpen ? 'max-h-60' : 'max-h-0'}`}>

                                        {/* input field */}
                                        <div className='flex items-center px-2 sticky top-0 bg-lightYellow'>
                                            <AiOutlineSearch size={18} className='' />
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                                placeholder='Enter state name'
                                                className='bg-lightYellow p-2 outline-none focus:outline-none focus:ring focus:ring-lightYellow border-none'
                                            />
                                        </div>
                                        {states.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black 
                                                ${item.state.toLowerCase() === selected.toLowerCase() && 'bg-yellow text-black'}
                                                ${item.state.toLowerCase().startsWith(inputValue) ? 'block'
                                                        :
                                                        'hidden'
                                                    }`}
                                                onClick={() => {
                                                    if (item.state.toLowerCase() !== selected.toLowerCase()) {
                                                        setSelected(item.state)
                                                        setIsOpen(false)
                                                        setInputValue('')
                                                    }
                                                }}
                                            >
                                                {item.state}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/*  */}



                                <label
                                    for="District"
                                    className="relative block overflow-hidden border-b border-green pt-6 focus-within:border-blue"
                                >
                                    <input
                                        style={{ background: 'transparent' }}
                                        type="dropdown"
                                        id="District"
                                        placeholder="District"
                                        className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />
                                </label>
                                <label
                                    for="City"
                                    className="relative block overflow-hidden border-b border-green pt-6 focus-within:border-blue"
                                >
                                    <input
                                        style={{ background: 'transparent' }}
                                        type="dropdown"
                                        id="City"
                                        placeholder="City"
                                        className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />
                                </label>
                                <label
                                    for="BilledUnitsPerMonth"
                                    className="relative block overflow-hidden border-b border-green pt-6 focus-within:border-blue"
                                >
                                    <input
                                        style={{ background: 'transparent' }}
                                        type="dropdown"
                                        id="BilledUnitsPerMonth"
                                        placeholder="Billed Units per Month"
                                        className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />
                                </label>

                                {/* Slider range */}
                                <RangeSlider value={value} handleRange={handleRange} />

                                <div className='pt-6'>
                                    <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{value}</div>
                                </div>
                                <LetsGoButton />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default forwardRef(Calculation);