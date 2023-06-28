import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SolarPanelCapSlider from './SolarPanelCapSlider';
import statesData from '../../public/states.json'
import { CategoryOfCustomer } from '../constants';


const RoofSolarCalculator = () => {
    const [totalArea, setTotalArea] = useState(false)
    const [solarPanelCapacity, setSolarPanelCapacity] = useState(false)
    const [solarPanelCapacityRange, setSolarPanelCapacityRange] = useState('')
    const [solarInputValue, setSolarInputValue] = useState('')
    const [budget, setBudget] = useState(false)
    const [budgetRange, setBudgetRange] = useState('')
    const [budgetInputValue, setBudgetInputValue] = useState('')
    const [averageElectricityCostRange, setAverageElectricityCostRange] = useState('')
    const [averageElectricityCostValue, setAverageElectricityCostValue] = useState('')
    const solarPanelSlider = useRef(null)
    const budgetSlider = useRef(null)
    const averageElectricityCostSlider = useRef(null)

    const totalAreaClick = () => {
        setTotalArea(!totalArea)
    }
    const solarPanelCapacityClick = () => {
        setSolarPanelCapacity(!solarPanelCapacity)
    }
    const budgetClick = () => {
        setBudget(!budget)
    }

    const handleSolarPanelCapacityRange = (e) => {
        setSolarPanelCapacityRange(e.target.value);
        setSolarInputValue(solarPanelSlider.current.value)

    }
    const handleBudgetRange = (e) => {
        setBudgetRange(e.target.value);
        setBudgetInputValue(budgetSlider.current.value)

    }
    const handleAverageElectricityCostRange = (e) => {
        setAverageElectricityCostRange(e.target.value);
        setAverageElectricityCostValue(averageElectricityCostSlider.current.value)

    }

    const handleSolarCapacityNumberInput = (e) => {
        setSolarInputValue(e.target.value)
    }

    const handleBudgetNumberInput = (e) => {
        setBudgetInputValue(e.target.value)
    }

    const handleAverageElectricityCostNumberInput = (e) => {
        setAverageElectricityCostValue(e.target.value)
    }

    const handleStates = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //     handleSolarPanelCapacityRange(e.target.value)
    // }, [solarPanelSlider])
    return (
        <Section>
            <section className="bg-blue">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <h3 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5">Solar Roof Top Calculator</h3>


                    <form onClick={handleSubmit}>
                        <ol className='list-decimal text-white mb-10'>
                            <li className='mb-10'>
                                <h1>Choose one of the following:</h1>
                                <div className="block min-h-6 pl-7">
                                    <label>
                                        <input type="checkbox"
                                            checked={totalArea}
                                            onChange={totalAreaClick}
                                        />
                                        <label for="checkbox-1" className="cursor-pointer select-none text-white ml-4">Total roof top area</label>
                                        <div className={totalArea ? 'block' : 'hidden'}>
                                            <div className='py-4'>
                                                <label>
                                                    <input type="number" className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select"
                                                        pattern="^Rs\d+(\.\d{1,2})?$" placeholder="Enter amount in Rs" />
                                                    <label for="" className="cursor-pointer select-none text-white ml-4">
                                                        <input id="" type="checkbox"
                                                        />
                                                        <label for="" className="cursor-pointer select-none text-white ml-4">Sq. m.</label>
                                                        <input id="" type="checkbox"
                                                        />
                                                        <label for="" className="cursor-pointer select-none text-white ml-4">Sq. Feet</label>
                                                    </label>
                                                </label>
                                            </div>
                                        </div>
                                    </label>
                                    <p className='text-white'>OR</p>
                                    <label>
                                        <input type="checkbox"
                                            checked={solarPanelCapacity}
                                            onChange={solarPanelCapacityClick}
                                        />
                                        <label className="cursor-pointer select-none text-white ml-4">Solar Panel Capacity</label>
                                        <div className={solarPanelCapacity ? 'block' : 'hidden'}>
                                            <div className='py-4'>
                                                <label>
                                                    <div className='pt-6 flex  items-center'>
                                                        <input type='number'
                                                            value={solarInputValue}
                                                            onInput={handleSolarCapacityNumberInput}
                                                            className='w-50 h-9 flex justify-center items-center text-xl text-rgbaHeader' />
                                                        <p className='text-white ml-5'>kW</p>
                                                    </div>

                                                    {/* Slider range people count */}
                                                    <input id="slider" type="range"
                                                        onInput={handleSolarPanelCapacityRange}
                                                        value={solarInputValue}
                                                        list="markers"
                                                        min={1}
                                                        max={100}
                                                        step='1'
                                                        ref={solarPanelSlider}
                                                        className="" />
                                                    {/* <datalist id="markers">
                                                <option value="0"></option>
                                                <option value="25"></option>
                                                <option value="50"></option>
                                                <option value="75"></option>
                                                <option value="100"></option>
                                            </datalist> */
                                                    }

                                                </label>
                                            </div>
                                        </div>
                                    </label>

                                    <p className='text-white'>OR</p>
                                    <label>
                                        <input type="checkbox"
                                            checked={budget}
                                            onChange={budgetClick}
                                        />
                                        <label className="cursor-pointer select-none text-white ml-4">Your Budget</label>
                                        <div className={budget ? 'block' : 'hidden'}>
                                            <div className='py-4'>
                                                <label>
                                                    <div className='pt-6 flex  items-center'>
                                                        <input type='number'
                                                            value={budgetInputValue}
                                                            onInput={handleBudgetNumberInput}
                                                            className='w-50 h-9 flex justify-center items-center text-xl text-rgbaHeader' />
                                                        <p className='text-white ml-5'>Rs.</p>
                                                    </div>

                                                    {/* Slider range people count */}
                                                    <input id="slider" type="range"
                                                        onInput={handleBudgetRange}
                                                        value={budgetInputValue}
                                                        list="markers"
                                                        min={100000}
                                                        max={10000000}
                                                        step={50000}
                                                        ref={budgetSlider}
                                                        className="" />
                                                    {/* <datalist id="markers">
                                                <option value="0"></option>
                                                <option value="25"></option>
                                                <option value="50"></option>
                                                <option value="75"></option>
                                                <option value="100"></option>
                                            </datalist> */
                                                    }

                                                </label>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </li>

                            <li className='mb-10'>
                                <h1>Select State and Customer Category</h1>
                                {/*  STATE */}
                                <div className="select mb-10">
                                    <select defaultValue="State" name="state" id="state" onChange={(e) => handleStates(e)}>
                                        <option disabled>State</option>
                                        {
                                            statesData.map((data, idx) => (
                                                <option value={data.state_id} key={idx}>{data.state_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {/*  Category of Customer */}
                                <div className="select">
                                    <select defaultValue="Select Category of Customer" name="category" id="category" >
                                        <option disabled>Select Category of Customer</option>
                                        {
                                            CategoryOfCustomer.map((data, idx) => (
                                                <option value={data.name} key={idx}>{data.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </li>

                            <li>
                                <h1>What is your average Electricity cost?</h1>

                                <label>
                                    <div className='pt-6 flex  items-center'>
                                        <input type='number'
                                            value={averageElectricityCostValue}
                                            onInput={handleAverageElectricityCostNumberInput}
                                            className='w-50 h-9 flex justify-center items-center text-xl text-rgbaHeader' />
                                        <p className='text-white ml-5'>kW</p>
                                    </div>

                                    {/* Slider range people count */}
                                    <input id="slider" type="range"
                                        onInput={handleAverageElectricityCostRange}
                                        value={averageElectricityCostValue}
                                        list="markers"
                                        min={4}
                                        max={20}
                                        step='.25'
                                        ref={averageElectricityCostSlider}
                                        className="" />
                                    {/* <datalist id="markers">
                                                <option value="0"></option>
                                                <option value="25"></option>
                                                <option value="50"></option>
                                                <option value="75"></option>
                                                <option value="100"></option>
                                            </datalist> */
                                    }

                                </label>
                            </li>
                        </ol>

                        <button className='w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Calculate</button>
                    </form>

                </div>
            </section>
        </Section>
    );
};

export default RoofSolarCalculator;

const Section = styled.div`
 .select {
    width: 100%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }

`