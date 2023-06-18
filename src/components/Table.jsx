import React, { useContext, useEffect } from 'react';
import { useState } from "react"
import styles from '../components/checkboxToggle.module.css'
import '../components/style.css'
import { customMachines, customTableItems, tableItems } from '../constants';
import AddButton from './AddButton';
import CalculateButton from './CalculateButton';
import FinalCalculate from './FinalCalculate';
import { AirConWattRanges } from '../constants/index';
import { AirConsTimes } from '../constants/index';
import Assumptions from './Assumptions';
import GeyserInput from './WattInputs/GeyserInput';
import WashingInput from './WattInputs/WashingInput';
import MicroWaveInput from './WattInputs/MicroWaveInput';
import FridgeInput from './WattInputs/FridgeInput';
import LightsInput from './WattInputs/LightsInput';
import styled from 'styled-components';
import GeyserConsumption from './Consumptions/GeyserConsumption';
import WashingConsumption from './Consumptions/WashingConsumption';
import OvenConsumption from './Consumptions/OvenConsumption';
import FridgeConsumption from './Consumptions/FridgeConsumption';
import LightConsumption from './Consumptions/LightConsumption';
import CustomMachines from './CustomMachines';
import PieChartCalc from './PieChartCalc';
import { CALC_CONTEXT } from '../context/CalcProvider';
import moment from 'moment';

const Table = () => {
    // const [selectedItem, setSelectedItem] = useState(0)
    // const [selectedTab, setSelectedTab] = useState(0);

    const [isAirConditionerOn, setIsAirConditionerOn] = useState(false);
    const [isGeyserOn, setIsGeyserOn] = useState(false);
    const [isWashingOn, setIsWashingOn] = useState(false)
    const [isMicroWaveOn, setIsMicroWaveOn] = useState(false)
    const [isFridgeOn, setIsFridgeOn] = useState(false)
    const [isLightsOn, setIsLightsOn] = useState(false)
    const [isHeaterOn, setIsHeaterOn] = useState(false)
    const [showPieChart, setShowPieChart] = useState(false);



    // Watt and Consumption calculation states
    const [aCSelectedWattage, setACSelectedWattage] = useState("");
    const [aCSelectedConsumptionTime, setACSelectedConsumptionTime] = useState("");
    const [geyserSelectedWattage, setGeyserSelectedWattage] = useState('')
    const [geyserSelectedConsumptionTime, setGeyserSelectedConsumptionTime] = useState('')
    const [washingSelectedWattage, setWashingSelectedWattage] = useState('')
    const [washingSelectedConsumptionTime, setWashingSelectedConsumptionTime] = useState('')
    const [ovenSelectedWattage, setOvenSelectedWattage] = useState("");
    const [ovenSelectedConsumptionTime, setOvenSelectedConsumptionTime] = useState("");
    const [fridgeSelectedWattage, setFridgeSelectedWattage] = useState("");
    const [fridgeSelectedConsumptionTime, setFridgeSelectedConsumptionTime] = useState("");
    const [lightSelectedWattage, setLightSelectedWattage] = useState("");
    const [lightSelectedConsumptionTime, setLightSelectedConsumptionTime] = useState("");

    // State variables for total sum
    const [airTotal, setAirTotal] = useState(0);
    const [geyserTotal, setGeyserTotal] = useState(0);
    const [washingTotal, setWashingTotal] = useState(0)
    const [ovenTotal, setOvenTotal] = useState(0)
    const [fridgeTotal, setFridgeTotal] = useState(0)
    const [lightsTotal, setLightsTotal] = useState(0)
    const [heaterTotal, setHeaterTotal] = useState(0)

    const { step2Data } = useContext(CALC_CONTEXT)
    console.log(step2Data);

    const handleSummerClick = () => {
        setIsAirConditionerOn(true);
        setIsGeyserOn(false);
    };

    const handleWinterClick = () => {
        setIsAirConditionerOn(false);
        setIsGeyserOn(true);
    };

    const handleSummerToggle = () => {
        setIsAirConditionerOn(!isAirConditionerOn);
    };

    const handleWinterToggle = () => {
        setIsGeyserOn(!isGeyserOn);
    };

    const handleWashingToggle = () => {
        setIsWashingOn(!isWashingOn)
    }

    const handleMicroToggle = () => {
        setIsMicroWaveOn(!isMicroWaveOn)
    }

    const handleFridgeToggle = () => {
        setIsFridgeOn(!isFridgeOn)
    }

    const handleLightsToggle = () => {
        setIsLightsOn(!isLightsOn)
    }

    // Watt and Consumption calculation functions
    useEffect(() => {
        setAirTotal(+aCSelectedWattage * +aCSelectedConsumptionTime);
    }, [aCSelectedWattage, aCSelectedConsumptionTime]);

    useEffect(() => {
        setGeyserTotal(+geyserSelectedWattage * +geyserSelectedConsumptionTime);
        // console.log(geyserTotal);
    }, [geyserSelectedWattage, geyserSelectedConsumptionTime]);

    useEffect(() => {
        setWashingTotal(+washingSelectedWattage * +washingSelectedConsumptionTime);
        // console.log(washingTotal);
    }, [washingSelectedWattage, washingSelectedConsumptionTime]);

    useEffect(() => {
        setOvenTotal(+ovenSelectedWattage * +ovenSelectedConsumptionTime);
        // console.log(ovenTotal);
    }, [ovenSelectedWattage, ovenSelectedConsumptionTime]);

    useEffect(() => {
        setFridgeTotal(+fridgeSelectedWattage * +fridgeSelectedConsumptionTime);
        // console.log(fridgeTotal);
    }, [fridgeSelectedWattage, fridgeSelectedConsumptionTime]);

    useEffect(() => {
        setLightsTotal(+lightSelectedWattage * +lightSelectedConsumptionTime);
        // console.log(lightsTotal);
    }, [lightSelectedWattage, lightSelectedConsumptionTime]);

    const handleACWattageSelect = (event) => {
        setACSelectedWattage(event.target.value);
    };

    const handleGeyserWattageSelect = (event) => {
        setGeyserSelectedWattage(event.target.value)
    }

    const handleWashingWattageSelect = (event) => {
        setWashingSelectedWattage(event.target.value)
    }

    const handleOvenWattageSelect = (event) => {
        setOvenSelectedWattage(event.target.value);
    };

    const handleFridgeWattageSelect = (event) => {
        setFridgeSelectedWattage(event.target.value);
    };

    const handleLightWattageSelect = (event) => {
        setLightSelectedWattage(event.target.value);
    };

    const handleACConsumptionTimeSelect = (event) => {
        setACSelectedConsumptionTime(event.target.value);
    };

    const handleGeyserConsumptionTimeSelect = (event) => {
        setGeyserSelectedConsumptionTime(event.target.value)
    };

    const handleWashingConsumptionTimeSelect = (event) => {
        setWashingSelectedConsumptionTime(event.target.value);
    };

    const handleOvenConsumptionTimeSelect = (event) => {
        setOvenSelectedConsumptionTime(event.target.value);
    };

    const handleFridgeConsumptionTimeSelect = (event) => {
        setFridgeSelectedConsumptionTime(event.target.value);
    };

    const handleLightConsumptionTimeSelect = (event) => {
        setLightSelectedConsumptionTime(event.target.value);
    };


    // The sum of total watt hours for all devices
    // const totalWattHours = airTotal + geyserTotal + washingTotal

    // Calculation of the percentages for each device
    // const airPercentage = (airTotal / totalWattHours * 100).toFixed(2);
    // const geyserPercentage = (geyserTotal / totalWattHours * 100).toFixed(2);
    // const washingPercentage = (washingTotal / totalWattHours * 100).toFixed(2);

    // Function for the final calculate button
    const handleFinalCalculateClick = () => {
        setShowPieChart(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const step2 = {
        //     aCSelectedWattage,
        //     geyserSelectedWattage,
        //     washingSelectedWattage,
        //     ovenSelectedWattage,
        //     fridgeSelectedWattage,
        //     lightSelectedWattage,
        //     aCSelectedConsumptionTime,
        //     geyserSelectedConsumptionTime,
        //     washingSelectedConsumptionTime,
        //     ovenSelectedConsumptionTime,
        //     fridgeSelectedConsumptionTime,
        //     lightSelectedConsumptionTime,
        //     airTotal,
        //     geyserTotal,
        //     washingTotal,
        //     ovenTotal,
        //     fridgeTotal,
        //     lightsTotal
        // }

        // console.log(aCSelectedWattage,
        //     geyserSelectedWattage,
        //     washingSelectedWattage,
        //     ovenSelectedWattage,
        //     fridgeSelectedWattage,
        //     lightSelectedWattage,
        //     aCSelectedConsumptionTime,
        //     geyserSelectedConsumptionTime,
        //     washingSelectedConsumptionTime,
        //     ovenSelectedConsumptionTime,
        //     fridgeSelectedConsumptionTime,
        //     lightSelectedConsumptionTime,
        //     airTotal,
        //     geyserTotal,
        //     washingTotal,
        //     ovenTotal,
        //     fridgeTotal,
        //     lightsTotal);

        // const response = await fetch('http://localhost:5000/api/step2', {
        //     method: 'POST',
        //     body: JSON.stringify(step2),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const json = await response.json()

        // if (!response.ok) {
        //     setError(json.error)
        // }
        // if (response.ok) {
        //     setError(null)
        //     console.log('New calculation added', json);
        // }
    }


    return (
        <div>
            <div className="relative bg-gradient-to-b from-white via-white to-lightBlue py-5">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className='overflow'>
                        <button type="button" className="rounded-full px-4 mr-2 bg-blue text-white p-2 leading-none flex items-center lg:hidden md:block">
                            Step 2
                        </button>
                        <div className='w-full flex items-center justify-center gap-x-20 py-5'>
                            <button
                                className={isAirConditionerOn ? `bg-lightBlue text-[#F0EFFF] py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium` : 'bg-[#F0EFFF] text-lightBlue py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium'}
                                onClick={handleSummerClick}>Summer</button>

                            <button
                                className={isGeyserOn ? `bg-lightBlue text-[#F0EFFF] py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium` : 'bg-[#F0EFFF] text-lightBlue py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium'}
                                onClick={handleWinterClick}>Winter</button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='overflow-x-auto'>
                                <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                                    <thead className="text-blue uppercase font-medium bg-lightYellow">
                                        <tr>
                                            <th className="py-4 pr-6 pl-5">Machines</th>
                                            <th className="py-4 pr-6 pl-5">Status</th>
                                            <th className="py-4 pr-6 pl-5">Watts</th>
                                            <th className="py-4 pr-6 pl-5">Consumption Time</th>
                                            {/* <th className="py-4 pr-6 pl-5">Assumptions</th> */}
                                        </tr>
                                    </thead>

                                    {/* Vertical text */}
                                    <div class="justify-center items-center absolute -right-44 top-[340px] lg:block md:hidden hidden">
                                        <h1 className='transform -rotate-90 text-[#e8f4f8] w-[500px] text-[150px] font-bold uppercase vertical2'>Step 2</h1>
                                    </div>

                                    <tbody className="text-blue py-3">
                                        {/* Air Condition */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Air Conditioner</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <div className={styles.toggle}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isAirConditionerOn}
                                                        onChange={handleSummerToggle}
                                                    />
                                                    <label htmlFor="switch">Toggle</label>
                                                </div>
                                            </td>
                                            <td>
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <select name="watt" id="watt" value={aCSelectedWattage}
                                                        disabled={!isAirConditionerOn}
                                                        onChange={handleACWattageSelect}
                                                        className='w-16 h-8 bg-lightGreen rounded-md flex justify-center items-center text-xl text-rgbaHeader select'
                                                    >
                                                        {
                                                            AirConWattRanges.map((range, idx) => (
                                                                <option value={range.range}
                                                                    key={idx}
                                                                >{range.range}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <select name="watt" id="watt" value={aCSelectedConsumptionTime}
                                                        disabled={!isAirConditionerOn}
                                                        onChange={handleACConsumptionTimeSelect}
                                                        className='w-36 h-8 bg-lightGreen rounded-md flex justify-center items-center text-xl text-rgbaHeader select'>
                                                        {
                                                            AirConsTimes.map((range, idx) => (
                                                                <option value={range.range}>{range.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </Select>
                                            </td>
                                            {/* <td>
                                            <Assumptions />
                                            AC Total: {isAirConditionerOn ? airTotal.toFixed(2) : ""}
                                        </td> */}
                                        </tr>

                                        {/* Geyser */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Geyser</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <div className={styles.toggle}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isGeyserOn}
                                                        onChange={handleWinterToggle}
                                                    />
                                                    <label htmlFor="switch">Toggle</label>
                                                </div>

                                            </td>
                                            {/* Geyser Watt */}
                                            <td>
                                                <GeyserInput geyserSelectedWattage={geyserSelectedWattage}

                                                    isGeyserOn={isGeyserOn}
                                                    handleWattageSelect={handleGeyserWattageSelect}
                                                />
                                            </td>
                                            <td>
                                                <GeyserConsumption
                                                    geyserSelectedConsumptionTime={geyserSelectedConsumptionTime}
                                                    isGeyserOn={isGeyserOn}
                                                    handleConsumptionTimeSelect={handleGeyserConsumptionTimeSelect}
                                                />
                                            </td>
                                            {/* <td>
                                            <Assumptions />
                                            Geyser Total: {isGeyserOn ? geyserTotal.toFixed(2) : ""}
                                        </td> */}
                                        </tr>

                                        {/* Washing Machine */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6  whitespace-nowrap font-semibold">Washing Machine</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isWashingOn}
                                                        onChange={handleWashingToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <WashingInput
                                                    washingSelectedWattage={washingSelectedWattage}

                                                    isWashingOn={isWashingOn}
                                                    handleWattageSelect={handleWashingWattageSelect}
                                                />
                                            </td>
                                            <td>
                                                <WashingConsumption
                                                    washingSelectedConsumptionTime={washingSelectedConsumptionTime}
                                                    isWashingOn={isWashingOn}
                                                    handleConsumptionTimeSelect={handleWashingConsumptionTimeSelect}
                                                />
                                            </td>
                                            {/* <td>
                                            <Assumptions />
                                            Washing Total: {isWashingOn ? washingTotal.toFixed(2) : ""}
                                        </td> */}
                                        </tr>

                                        {/* Microwave Oven */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Microwave Oven</td>
                                            <td className="pr-6 pl-5 whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isMicroWaveOn}
                                                        onChange={handleMicroToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <MicroWaveInput
                                                    ovenSelectedWattage={ovenSelectedWattage}

                                                    isMicroWaveOn={isMicroWaveOn}
                                                    handleWattageSelect={handleOvenWattageSelect}
                                                />
                                            </td>
                                            <td>
                                                <OvenConsumption
                                                    ovenSelectedConsumptionTime={ovenSelectedConsumptionTime}
                                                    isMicroWaveOn={isMicroWaveOn}
                                                    handleConsumptionTimeSelect={handleOvenConsumptionTimeSelect}
                                                />
                                            </td>
                                            {/* <td>
                                            <Assumptions />
                                            Oven Total: {isMicroWaveOn ? ovenTotal.toFixed(2) : ""}
                                        </td> */}
                                        </tr>

                                        {/* Fridge */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Fridge</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isFridgeOn}
                                                        onChange={handleFridgeToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <FridgeInput
                                                    fridgeSelectedWattage={fridgeSelectedWattage}

                                                    isFridgeOn={isFridgeOn}
                                                    handleWattageSelect={handleFridgeWattageSelect}
                                                />
                                            </td>
                                            <td>
                                                <FridgeConsumption
                                                    fridgeSelectedConsumptionTime={fridgeSelectedConsumptionTime}
                                                    isFridgeOn={isFridgeOn}
                                                    handleConsumptionTimeSelect={handleFridgeConsumptionTimeSelect}
                                                />
                                            </td>
                                            {/* <td>
                                            <Assumptions />
                                            Fridge Total: {isFridgeOn ? fridgeTotal.toFixed(2) : ""}
                                        </td> */}
                                        </tr>

                                        {/* Lights */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Lights</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isLightsOn}
                                                        onChange={handleLightsToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <LightsInput
                                                    lightSelectedWattage={lightSelectedWattage}

                                                    isLightsOn={isLightsOn}
                                                    handleWattageSelect={handleLightWattageSelect}
                                                />
                                            </td>
                                            <td>
                                                <LightConsumption
                                                    lightSelectedConsumptionTime={lightSelectedConsumptionTime}
                                                    isLightsOn={isLightsOn}
                                                    handleConsumptionTimeSelect={handleLightConsumptionTimeSelect}
                                                />
                                            </td>
                                            {/* <td>
                                            <Assumptions />
                                            Light Total: {isLightsOn ? lightsTotal.toFixed(2) : ""}
                                        </td> */}
                                        </tr>
                                    </tbody>
                                </table >
                            </div>


                            {/* Custom Machines Section */}
                            {/* <div className="lg:max-w-none max-w-xl mt-8 py-6">
                                <h3 className="text-blue lg:text-2xl font-bold text-xl">
                                    If You Want To Add Other Machines You Can Customize It Here
                                </h3>
                            </div>

                            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                                <table className="lg:w-1/3 table-auto text-left border-separate border-spacing-y-3">

                                    <tbody className="text-blue py-3">
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="  whitespace-nowrap font-semibold">
                                                <select name="watt" id="watt"
                                                    className='w-52 h-12 bg-[#EBEBEB] rounded-md flex justify-center items-center text-xl text-lightBlue select'>
                                                    {customMachines.map(item => (
                                                        <option value={item.name}>{item.name}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isWashingOn}
                                                        onChange={handleWashingToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>

                                <AddButton text='Add' />
                            </div> */}




                            <div className='py-20 flex justify-center items-center'>
                                <FinalCalculate handleClick={handleFinalCalculateClick} />
                            </div>
                        </form>
                        {/*  */}
                        {
                            <div className='overflow-x-auto'>
                                <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                                    <thead className="text-blue uppercase font-medium bg-lightYellow">
                                        <tr>
                                            {/* <th className="py-4 pr-6 pl-5">Machine Name</th> */}
                                            <th className="py-4 pr-6 pl-5">Consumption time</th>
                                            <th className="py-4 pr-6 pl-9">Machine Names</th>
                                            <th className="py-4 pr-6 pl-9">Consumptions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-blue py-3">
                                        {
                                            step2Data && step2Data.map((data, idx) => (
                                                <tr key={idx} className='odd:bg-gray even:bg-lightGray'>
                                                    <td className="pr-6  whitespace-nowrap pl-5">{moment(data.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                                                    <td className="pr-6  whitespace-nowrap pl-5">{data.consumptionTitles.join(", ")}</td>
                                                    <td className="pr-6  whitespace-nowrap">{data.consumptionValues.join(", ")}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div >
            </div >

            {
                showPieChart && (
                    <PieChartCalc
                        airPercentage={airTotal}
                        geyserPercentage={geyserTotal}
                        washingPercentage={washingTotal}
                        ovenPercentage={ovenTotal}
                        fridgePercentage={fridgeTotal}
                        lightPercentage={lightsTotal}
                    />
                )
            }
        </div >
    );
};

export default Table;

const Select = styled.div`
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    color:#FEFFCD;
    // background-image: none;
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
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 
`