import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import statesData from '../../public/states.json'
import { CategoryOfCustomer } from '../constants';


const RoofSolarCalculator = () => {
    const [totalArea, setTotalArea] = useState(false)
    const [solarPanelCapacity, setSolarPanelCapacity] = useState(false)
    const [budget, setBudget] = useState(false)
    const [solarPanelCapacityRange, setSolarPanelCapacityRange] = useState('')
    const [solarInputValue, setSolarInputValue] = useState('')
    const [budgetRange, setBudgetRange] = useState('')
    const [budgetInputValue, setBudgetInputValue] = useState('')
    const [averageElectricityCostRange, setAverageElectricityCostRange] = useState('')
    const [averageElectricityCostValue, setAverageElectricityCostValue] = useState('')
    const [roofTopAreaPercentageRange, setRoofTopAreaPercentageRange] = useState('')
    const [roofTopAreaPercentageValue, setRoofTopAreaPercentageValue] = useState('')
    const solarPanelSlider = useRef(null)
    const budgetSlider = useRef(null)
    const averageElectricityCostSlider = useRef(null)
    const roofTopAreaPercentageSlider = useRef(null)

    const totalAreaClick = () => {
        if (totalArea) {
            setTotalArea(false);
        } else {
            setTotalArea(true);
            setSolarPanelCapacity(false);
            setBudget(false);
        }
    };

    const solarPanelCapacityClick = () => {
        if (solarPanelCapacity) {
            setSolarPanelCapacity(false)
        }
        else {
            setSolarPanelCapacity(true)
            setBudget(false)
            setTotalArea(false)
        }
    };

    const budgetClick = () => {
        if (budget) {
            setBudget(false)
        }
        else {
            setBudget(true)
            setSolarPanelCapacity(false)
            setTotalArea(false)
        }
    };

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
    const handleRoofTopAreaPercentageRange = (e) => {
        setRoofTopAreaPercentageRange(e.target.value);
        setRoofTopAreaPercentageValue(roofTopAreaPercentageSlider.current.value)
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
    const handleRoofTopAreaPercentageNumberInput = (e) => {
        setRoofTopAreaPercentageValue(e.target.value)
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
                                {/* <h1>Choose one of the following:</h1> */}
                                <div className="block min-h-6 pl-7">
                                    <div>
                                        <input type="checkbox"
                                            checked={totalArea}
                                            onChange={totalAreaClick}
                                            className='checkbox'
                                        />
                                        <span className="cursor-pointer select-none text-white ml-4">Total roof top area</span>
                                        {totalArea && (
                                            <div>
                                                <div className='py-4'>
                                                    {/* <label> */}
                                                    <input type="number" className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select"
                                                        pattern="^Rs\d+(\.\d{1,2})?$" placeholder="Enter amount in Rs" />
                                                    <label for="" className="cursor-pointer select-none text-white ml-4">
                                                        <input id="" type="checkbox"
                                                        />
                                                        <span className="cursor-pointer select-none text-white ml-4">Sq. m.</span>
                                                        <input id="" type="checkbox"
                                                        />
                                                        <span className="cursor-pointer select-none text-white ml-4">Sq. Feet</span>
                                                    </label>
                                                    <label>
                                                        <div className='pt-6 flex  items-center'>
                                                            <input type='number'
                                                                placeholder="% of Roof Top Area available"
                                                                value={roofTopAreaPercentageValue}
                                                                onInput={handleRoofTopAreaPercentageNumberInput}
                                                                className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select" />
                                                            <p className='text-white ml-5'>%</p>
                                                        </div>

                                                        {/* Slider range people count */}
                                                        <input id="slider" type="range"
                                                            onInput={handleRoofTopAreaPercentageRange}
                                                            value={roofTopAreaPercentageValue}
                                                            list="markers"
                                                            min={1}
                                                            max={100}
                                                            step='1'
                                                            ref={roofTopAreaPercentageSlider}
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
                                                    {/* </label> */}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <p className='text-white'>OR</p>
                                    <label>
                                        <input type="checkbox"
                                            checked={solarPanelCapacity}
                                            onChange={solarPanelCapacityClick}
                                        />
                                        <span className="cursor-pointer select-none text-white ml-4">Solar Panel Capacity</span>
                                        <div className={solarPanelCapacity ? 'block' : 'hidden'}>
                                            <div className='py-4'>
                                                <label>
                                                    <div className='pt-6 flex  items-center'>
                                                        <input type='number'
                                                            value={solarInputValue}
                                                            onInput={handleSolarCapacityNumberInput}
                                                            className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select" />
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
                                        <span className="cursor-pointer select-none text-white ml-4">Your Budget</span>
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
                                <h1>Select State</h1>
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

                            </li>

                            <li className='mb-10'>
                                <h1>Select Customer Category</h1>
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
    width: 40%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 .checkbox{
    appearance: none;
    width: 1em;
    height: 1em;
    border: 2px solid #fff;
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    transition: border-color 0.2s;

  &:checked {
    border-color: blue;
    background-color: pink;
  }
 }

`