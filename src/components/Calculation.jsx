import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LetsGoButton from './LetsGoButton';
import { states } from '../constants';
import { districts } from '../constants';
import { cities } from '../constants';
import { AiOutlineSearch } from 'react-icons/ai'
import UnitRangeSlider from './UnitRangeSlider';
import PeopleRangeSlider from './PeopleRangeSlider';

const Calculation = ({ ref }) => {
    const [peopleRangeValue, setPeopleRangeValue] = useState(5)
    const [unitRangeValue, setUnitRangeValue] = useState(100)
    const [isOpenState, setIsOpenState] = useState(false)
    const [isOpenDistrict, setIsOpenDistrict] = useState(false)
    const [isOpenCity, setIsOpenCity] = useState(false)
    const [inputValueState, setInputValueState] = useState('')
    const [inputValueDistrict, setInputValueDistrict] = useState('')
    const [inputValueCity, setInputValueCity] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [selectedCity, setSelectedCity] = useState('')

    const handlePeopleRange = (e) => {
        setPeopleRangeValue(e.target.value)

    }
    const handleUnitRange = (e) => {
        setUnitRangeValue(e.target.value)
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
                                {/* <label
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
                                </label> */}

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

                                {/* new dropdown - STATE */}

                                <div className='w-full h-8 font-medium z-10'>
                                    <div
                                        onClick={() => setIsOpenState(!isOpenState)}
                                        className='w-full mt-8 flex items-center justify-start border-b-2 text-lightYellow'>
                                        {selectedState
                                            ? selectedState
                                            : 'State'}
                                    </div>
                                    <ul className={`bg-lightYellow mt-2 overflow-y-auto text-black ${isOpenState ? 'max-h-60' : 'max-h-0'}`}>

                                        {/* input field */}
                                        <div className='flex items-center px-2 sticky top-0 bg-lightYellow'>
                                            <AiOutlineSearch size={18} className='' />
                                            <input
                                                type="text"
                                                value={inputValueState}
                                                onChange={(e) => setInputValueState(e.target.value.toLowerCase())}
                                                placeholder='Enter state name'
                                                className='bg-lightYellow p-2 outline-none focus:outline-none focus:ring focus:ring-lightYellow border-none'
                                            />
                                        </div>
                                        {states.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black 
                                                ${item.name.toLowerCase() === selectedState.toLowerCase() && 'bg-yellow text-black'}
                                                ${item.name.toLowerCase().startsWith(inputValueState) ? 'block'
                                                        :
                                                        'hidden'
                                                    }`}
                                                onClick={() => {
                                                    if (item.name.toLowerCase() !== selectedState.toLowerCase()) {
                                                        setSelectedState(item.name)
                                                        setIsOpenState(false)
                                                        setInputValueState('')
                                                    }
                                                }}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/*  */}

                                {/* new dropdown - DISTRICT */}

                                <div className='w-full h-8 font-medium z-10'>
                                    <div
                                        onClick={() => setIsOpenDistrict(!isOpenDistrict)}
                                        className='w-full mt-8 flex items-center justify-start border-b-2 text-lightYellow'>
                                        {selectedDistrict
                                            ? selectedDistrict
                                            : 'District'}
                                    </div>
                                    <ul className={`bg-lightYellow mt-2 overflow-y-auto text-black ${isOpenDistrict ? 'max-h-60' : 'max-h-0'}`}>

                                        {/* input field */}
                                        <div className='flex items-center px-2 sticky top-0 bg-lightYellow'>
                                            <AiOutlineSearch size={18} className='' />
                                            <input
                                                type="text"
                                                value={inputValueDistrict}
                                                onChange={(e) => setInputValueDistrict(e.target.value.toLowerCase())}
                                                placeholder='Enter state name'
                                                className='bg-lightYellow p-2 outline-none focus:outline-none focus:ring focus:ring-lightYellow border-none'
                                            />
                                        </div>
                                        {districts.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black 
                                                ${item.name.toLowerCase() === selectedDistrict.toLowerCase() && 'bg-yellow text-black'}
                                                ${item.name.toLowerCase().startsWith(inputValueDistrict) ? 'block'
                                                        :
                                                        'hidden'
                                                    }`}
                                                onClick={() => {
                                                    if (item.name.toLowerCase() !== selectedDistrict.toLowerCase()) {
                                                        setSelectedDistrict(item.name)
                                                        setIsOpenDistrict(false)
                                                        setInputValueDistrict('')
                                                    }
                                                }}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/*  */}

                                {/* new dropdown - CITY */}

                                <div className='w-full h-8 font-medium z-10'>
                                    <div
                                        onClick={() => setIsOpenCity(!isOpenCity)}
                                        className='w-full mt-8 flex items-center justify-start border-b-2 text-lightYellow'>
                                        {selectedCity
                                            ? selectedCity
                                            : 'City'}
                                    </div>
                                    <ul className={`bg-lightYellow mt-2 overflow-y-auto text-black ${isOpenCity ? 'max-h-60' : 'max-h-0'}`}>

                                        {/* input field */}
                                        <div className='flex items-center px-2 sticky top-0 bg-lightYellow'>
                                            <AiOutlineSearch size={18} className='' />
                                            <input
                                                type="text"
                                                value={inputValueCity}
                                                onChange={(e) => setInputValueCity(e.target.value.toLowerCase())}
                                                placeholder='Enter state name'
                                                className='bg-lightYellow p-2 outline-none focus:outline-none focus:ring focus:ring-lightYellow border-none'
                                            />
                                        </div>
                                        {cities.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black 
                                                ${item.name.toLowerCase() === selectedCity.toLowerCase() && 'bg-yellow text-black'}
                                                ${item.name.toLowerCase().startsWith(inputValueCity) ? 'block'
                                                        :
                                                        'hidden'
                                                    }`}
                                                onClick={() => {
                                                    if (item.name.toLowerCase() !== selectedCity.toLowerCase()) {
                                                        setSelectedCity(item.name)
                                                        setIsOpenCity(false)
                                                        setInputValueCity('')
                                                    }
                                                }}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/*  */}

                                {/* new dropdown - Billed unit per month */}

                                <label
                                    for="BilledUnitsPerMonth"
                                    className="relative block overflow-hidden border-b-2 border-lightYellow pt-6"
                                >
                                    <input
                                        style={{ background: 'transparent' }}
                                        type="dropdown"
                                        id="BilledUnitsPerMonth"
                                        placeholder="Billed Units per Month"
                                        className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md"
                                    />
                                </label>

                                {/*  */}



                                {/* Slider range people count */}
                                <PeopleRangeSlider min='1' max={20} value={peopleRangeValue} handlePeopleRange={handlePeopleRange}
                                    text='No of People in Your Home'
                                />

                                <div className='pt-6'>
                                    <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{peopleRangeValue}</div>
                                </div>

                                {/* Slider range Units Consumed */}
                                <UnitRangeSlider min='10' max='1000' value={unitRangeValue} handleUnitRange={handleUnitRange}
                                    text='Units Consumed'
                                />

                                <div className='pt-6'>
                                    <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{unitRangeValue}</div>
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