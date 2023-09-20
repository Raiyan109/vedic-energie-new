import React, { useContext, useEffect, useRef, useState } from 'react';
import statesData from '../../public/states.json'
import { CategoryOfCustomer } from '../constants';
import { CALC_CONTEXT } from '../context/CalcProvider';
import SolarModal from './SolarModal';
import styled from 'styled-components';

const SolarCalculator = () => {
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const [sqMeterChecked, setSqMeterChecked] = useState(false);
    const [sqFeetChecked, setSqFeetChecked] = useState(false);
    const [totalArea, setTotalArea] = useState(false)
    const [solarPanelCapacityRange, setSolarPanelCapacityRange] = useState('')
    const [solarInputValue, setSolarInputValue] = useState('')
    const [budgetRange, setBudgetRange] = useState('')
    const [budgetInputValue, setBudgetInputValue] = useState('')
    const [averageElectricityCostRange, setAverageElectricityCostRange] = useState('')
    const [averageElectricityCostValue, setAverageElectricityCostValue] = useState('')
    const solarPanelSlider = useRef(null)
    const budgetSlider = useRef(null)
    const averageElectricityCostSlider = useRef(null)
    const roofTopAreaPercentageSlider = useRef(null)

    // calculation states
    const [state, setState] = useState('');
    const [customerCategory, setCustomerCategory] = useState('');
    const [electricityCost, setElectricityCost] = useState('');
    const [powerPlantSize, setPowerPlantSize] = useState(0);
    const [solarPanelCapacity, setSolarPanelCapacity] = useState(0);
    const [budgetResult, setBudgetResult] = useState(0)
    const [plantCost, setPlantCost] = useState(0);
    const [electricityGeneration, setElectricityGeneration] = useState(0);
    const [financialSaving, setFinancialSaving] = useState(0);
    const [co2Mitigated, setCO2Mitigated] = useState(0);
    const [equivalentPlanting, setEquivalentPlanting] = useState(0);

    const [showSolarCalculationResult, setShowSolarCalculationResult] = useState(false);
    const [result, setResult] = useState(0)

    //    for rooftop calculations
    const [roofArea, setRoofArea] = useState('');
    const [percentageUsed, setPercentageUsed] = useState(0);

    const { showModal, setShowModal } = useContext(CALC_CONTEXT)


    //   calculation functions 
    const handleRoofArea = (e) => {
        if (e.target.value < 1) {
            setRoofArea(1)
        }
        else {
            setRoofArea(e.target.value)
        }
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleCustomerCategoryChange = (event) => {
        setCustomerCategory(event.target.value);
    };

    const handleElectricityCostChange = (event) => {
        setElectricityCost(event.target.value);
    };

    const performCalculations = () => {
        const powerPlantSize = calculatePowerPlantSize(parseFloat(roofArea));
        const powerPlantSizeBySolarCapacity = calculatePowerPlantSizeBySolarCapacity(parseInt(solarInputValue))
        const powerPlantSizeByBudget = calculatePowerPlantSizeByBudget(parseInt(budgetInputValue))
        const plantCost = calculatePlantCost(parseFloat(result));
        const electricityGeneration = calculateElectricityGeneration(parseFloat(result));
        const financialSaving = calculateFinancialSaving(parseFloat(result), parseFloat(averageElectricityCostValue));
        const co2Mitigated = calculateCO2Mitigated(parseFloat(result));
        const equivalentPlanting = calculateEquivalentPlanting(parseFloat(result));

        setPowerPlantSize(powerPlantSize);
        setSolarPanelCapacity(powerPlantSizeBySolarCapacity)
        setBudgetResult(powerPlantSizeByBudget)
        setPlantCost(plantCost);
        setElectricityGeneration(electricityGeneration);
        setFinancialSaving(financialSaving);
        setCO2Mitigated(co2Mitigated);
        setEquivalentPlanting(equivalentPlanting);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let calculatedSize = 0;

        if (checkbox1Checked) {
            calculatedSize = calculatePowerPlantSize(parseFloat(roofArea));
        } else if (checkbox2Checked) {
            calculatedSize = calculatePowerPlantSizeBySolarCapacity(parseInt(solarInputValue));
        } else if (checkbox3Checked) {
            calculatedSize = calculatePowerPlantSizeByBudget(parseInt(budgetInputValue));
        }

        // Set the calculated power plant size
        setResult(calculatedSize);
        performCalculations()
    };

    useEffect(() => {
        const plantCost = calculatePlantCost(parseFloat(result));
        const electricityGeneration = calculateElectricityGeneration(parseFloat(result));
        const financialSaving = calculateFinancialSaving(parseFloat(result),
            parseFloat(averageElectricityCostValue));
        const co2Mitigated = calculateCO2Mitigated(parseFloat(result));
        const equivalentPlanting = calculateEquivalentPlanting(parseFloat(result));
    }, [result])

    //   Calculation controllers
    const calculatePowerPlantSize = (roofArea) => {
        const powerPlantSize = roofArea / 110;
        return powerPlantSize.toFixed(1);
    };

    const calculatePowerPlantSizeBySolarCapacity = (solarInputValue) => {
        return solarInputValue
    }

    const calculatePowerPlantSizeByBudget = (budgetInputValue) => {
        const budgetResult = budgetInputValue / 83000;
        return budgetResult
    }

    const calculatePlantCost = (result) => {
        const costResult = result * 83000;
        return costResult
    };

    const calculateElectricityGeneration = (result) => {
        const elecGenTotal = result * 5.5 * 20 * 10
        return elecGenTotal;
    };

    const calculateFinancialSaving = (result, averageElectricityCostValue) => {
        const financialSavingTotal = result * 5.5 * 20 * averageElectricityCostValue
        return financialSavingTotal;
    };

    const calculateCO2Mitigated = (result) => {
        const co2Lifetime = result * 31
        return co2Lifetime;
    };

    const calculateEquivalentPlanting = (result) => {
        const co2EqToPlanting = result * 49
        return co2EqToPlanting;
    };

    const handleCheckbox1Change = () => {
        if (checkbox1Checked) {
            setCheckbox1Checked(false);
        } else {
            setCheckbox1Checked(true);
            setCheckbox2Checked(false);
            setCheckbox3Checked(false);
        }
    };

    const handleCheckbox2Change = () => {
        if (checkbox2Checked) {
            setCheckbox2Checked(false);
        } else {
            setCheckbox2Checked(true);
            setCheckbox1Checked(false);
            setCheckbox3Checked(false);
        }
    };

    const handleCheckbox3Change = () => {
        if (checkbox3Checked) {
            setCheckbox3Checked(false);
        } else {
            setCheckbox3Checked(true);
            setCheckbox1Checked(false);
            setCheckbox2Checked(false);
        }
    };

    const sqMeterChange = () => {
        if (sqMeterChecked) {
            setSqMeterChecked(false);
        } else {
            setSqMeterChecked(true);
            setSqFeetChecked(false);
        }
    };

    const sqFeetChange = () => {
        if (sqFeetChecked) {
            setSqFeetChecked(false);
        } else {
            setSqFeetChecked(true);
            setSqMeterChecked(false);
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


    const handleSolarCapacityNumberInput = (e) => {
        if (e.target.value < 1) {
            setSolarInputValue(1)
        }
        else {
            setSolarInputValue(e.target.value)
        }
    }

    const handleBudgetNumberInput = (e) => {
        if (e.target.value < 1) {
            setBudgetInputValue(1)
        }
        else {
            setBudgetInputValue(e.target.value)
        }
    }

    const handleAverageElectricityCostNumberInput = (e) => {
        if (e.target.value < 1) {
            setAverageElectricityCostValue(1)
        }
        else {
            setAverageElectricityCostValue(e.target.value)
        }
    }
    // const handleRoofTopAreaPercentageNumberInput = (e) => {
    //     setRoofTopAreaPercentageValue(e.target.value)
    //     setPercentageUsed(e.target.value)
    // }

    const handleStates = (e) => {
        console.log(e.target.value);
    }

    const handleGoToSolarCalculationResult = () => {
        setShowSolarCalculationResult(true);
    };

    useEffect(() => {
        performCalculations()
    }, [result, plantCost, electricityGeneration, financialSaving, co2Mitigated, equivalentPlanting])


    return (
        <Section>
            <section className="bg-blue relative">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className='bg-orange py-10'>
                        <div className="flex justify-start items-center pl-4 pb-4">
                            <button type="button" className="rounded-full px-4 mr-2 bg-blue text-white p-2 leading-none flex items-center lg:hidden md:block">
                                Step 4
                            </button>
                        </div>
                        <h3 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5 text-center">Solar Roof Top Calculator</h3>
                        <div className='px-10'>
                            <form onSubmit={handleSubmit}>
                                {/* Vertical text */}
                                <div className="justify-center items-center absolute -right-44 top-[230px] lg:block md:hidden hidden">
                                    <h1 className='transform -rotate-90 text-[#e8f4f8] w-[500px] text-[150px] font-bold uppercase vertical2'>Step 4</h1>
                                </div>
                                <ol className='list-decimal mb-10 text-white'>
                                    <li>
                                        <p className='text-white text-xl'>Choose one of the following</p>
                                        <div className='grid lg:grid-cols-3 grid-cols-1 py-5'>
                                            <div>
                                                <div className='flex lg:flex-row flex-col lg:justify-between pr-5'>
                                                    <label className='text-white'>
                                                        <input
                                                            type="checkbox"
                                                            checked={checkbox1Checked}
                                                            onChange={handleCheckbox1Change}
                                                            className='mr-2'
                                                        />
                                                        Total Rooftop Area
                                                    </label>
                                                    <p className='text-white text-xs'>(OR)</p>
                                                </div>
                                                {checkbox1Checked && (
                                                    <div>
                                                        <div className='py-4'>
                                                            {/* <label> */}
                                                            <input
                                                                type="number"
                                                                className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select text-black"
                                                                placeholder='Square Feet'
                                                                value={roofArea}
                                                                onChange={handleRoofArea}
                                                            />
                                                            {/* <label>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={sqMeterChecked}
                                                                    onChange={sqMeterChange}

                                                                />
                                                                Sq. M.
                                                            </label>
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={sqFeetChecked}
                                                                    onChange={sqFeetChange}
                                                                />
                                                                Sq. Feet
                                                            </label> */}
                                                            {/* <label>
                                                                <div className='pt-6 flex  items-center'>
                                                                    <input type='number'
                                                                        placeholder="% of Roof Top Area available"
                                                                        value={roofTopAreaPercentageValue}
                                                                        onInput={handleRoofTopAreaPercentageNumberInput}
                                                                        className="focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select text-black" />
                                                                    <p className='text-white ml-5'>%</p>
                                                                </div>

                                                                
                                                                <input id="slider" type="range"
                                                                    onInput={handleRoofTopAreaPercentageRange}
                                                                    value={roofTopAreaPercentageValue}
                                                                    list="markers"
                                                                    min={1}
                                                                    max={100}
                                                                    step='1'
                                                                    ref={roofTopAreaPercentageSlider}
                                                                    className="" />
                                                            
                                                            </label> */}
                                                            {/* </label> */}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* checkbox 2 */}
                                            <div>
                                                <div className='flex lg:flex-row flex-col lg:justify-between pr-5'>
                                                    <label className='text-white'>
                                                        <input
                                                            type="checkbox"
                                                            checked={checkbox2Checked}
                                                            onChange={handleCheckbox2Change}
                                                            className='mr-2'

                                                        />
                                                        Solar Panel Capacity
                                                    </label>
                                                    <p className='text-white text-xs'>(OR)</p>
                                                </div>

                                                {checkbox2Checked && (
                                                    <label>
                                                        <div className='pt-6 flex  items-center'>
                                                            <input type='number'
                                                                value={solarInputValue}
                                                                onInput={handleSolarCapacityNumberInput}
                                                                className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select text-black" />
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
                                                    </label>

                                                )}
                                            </div>
                                            {/* checkbox 3 */}
                                            <div>

                                                <label className='text-white'>
                                                    <input
                                                        type="checkbox"
                                                        checked={checkbox3Checked}
                                                        onChange={handleCheckbox3Change}
                                                        className='mr-2'
                                                    />
                                                    Your Budget
                                                </label>
                                                <br />
                                                {checkbox3Checked && (
                                                    <label>
                                                        <div className='pt-6 flex  items-center'>
                                                            <input type='number'
                                                                value={budgetInputValue}
                                                                onInput={handleBudgetNumberInput}
                                                                className='placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select text-black' />
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
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <h1 className='text-xl'>Select State and Customer Category</h1>
                                        {/*  STATE */}
                                        <div className='grid lg:grid-cols-2 grid-cols-1 pt-5 gap-12'>
                                            <div className="select mb-10 text-black">
                                                <select defaultValue="State" className='input' name="state" id="state" onChange={(e) => handleStates(e)}>
                                                    <option disabled>State</option>
                                                    {
                                                        statesData.map((data, idx) => (
                                                            <option value={data.state_id} key={idx}>{data.state_name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                            <div className="select mb-10 text-black">
                                                <select defaultValue="Select Category of Customer"
                                                    className='input'
                                                    name="category" id="category" >
                                                    <option disabled>Select Category of Customer</option>
                                                    {
                                                        CategoryOfCustomer.map((data, idx) => (
                                                            <option value={data.name} key={idx}>{data.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </li>


                                    <li>
                                        <h1 className='text-xl'>What is your average per unit cost of electricity?</h1>
                                        <label>
                                            <div className='pt-6 flex  items-center'>
                                                <input type='number'
                                                    value={averageElectricityCostValue}
                                                    onInput={handleAverageElectricityCostNumberInput}
                                                    className='placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md averageSelect text-black' />
                                                <p className='text-white ml-5'>Rs.</p>
                                            </div>

                                            {/* Slider range people count */}
                                            <input id="slider" type="range"
                                                onInput={handleAverageElectricityCostRange}
                                                value={averageElectricityCostValue}
                                                list="markers"
                                                min={4}
                                                max={100}
                                                step='.25'
                                                ref={averageElectricityCostSlider}
                                                className="" />
                                        </label>
                                    </li>
                                </ol>
                                <button onClick={() => setShowModal(true)} className='w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Calculate</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            {showModal ? (
                <>
                    <SolarModal powerPlantSize={result} plantCost={plantCost} electricityGeneration={electricityGeneration} financialSaving={financialSaving} co2Mitigated={co2Mitigated} equivalentPlanting={equivalentPlanting} />
                </>
            ) : null}
        </Section>
    );
};

export default SolarCalculator;

const Section = styled.div`
.input {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    background: #FFB951;
    color:#FEFFCD;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
 }
 select::-ms-expand {
    display: none;
 }
 .select {
    width: 80%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 .averageSelect{
    width: 40%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 
`
