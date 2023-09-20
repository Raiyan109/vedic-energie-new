import React, { useContext, useEffect } from 'react';
import { useState } from "react"
import styles from '../components/checkboxToggle.module.css'
import '../components/style.css'
import { AirConLoads,  OtherMConsTimes,  customMachines, customTableItems, tableItems } from '../constants';
import AddButton from './AddButton';
import CalculateButton from './CalculateButton';
import FinalCalculate from './FinalCalculate';
import { AirConWattRanges } from '../constants/index';
import { AirConsTimes } from '../constants/index';
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
import MicroWaveNoOfLoads from './No Of Loads/MicroWaveNoOfLoads';
import WashingNoOfLoads from './No Of Loads/WashingNoOfLoads';
import FridgeNoOfLoads from './No Of Loads/FridgeNoOfLoads';
import LightsNoOfLoads from './No Of Loads/lightsNoOfLoads';
import { event } from 'react-ga';
import GeyserNoOfLoads from './No Of Loads/GeyserNoOfLoads';
import CeilingFanWattInput from './WattInputs/CeilingFanWattInput';
import CeilingFanNoOfLoads from './No Of Loads/CeilingFanNoOfLoads';
import CeilingFanConsumption from './Consumptions/CeilingFanConsumption';
import TvWattInput from './WattInputs/TvWattInput';
import TvNoOfLoads from './No Of Loads/TvNoOfLoads';
import TvConsumptionTime from './Consumptions/TvConsumptionTime';
import LaptopInput from './WattInputs/LaptopInput';
import LaptopNoOfLoads from './No Of Loads/LaptopNoOfLoads';
import LaptopConsumption from './Consumptions/LaptopConsumption';
import IronInput from './WattInputs/IronInput';
import IronNoOfLoads from './No Of Loads/IronNoOfLoads';
import IronConsumption from './Consumptions/IronConsumption';
import AddOtherApplButton from './AddOtherApplButton';
import OtherMachineWattsInput from './WattInputs/OtherMachineWattsInput';
import OtherMachineNoOfLoads from './No Of Loads/OtherMachineNoOfLoads';
import OtherMachineConsTime from './Consumptions/OtherMachineConsTime';

const Table = () => {
    // const [selectedItem, setSelectedItem] = useState(0)
    // const [selectedTab, setSelectedTab] = useState(0);

    const [isAirConditionerOn, setIsAirConditionerOn] = useState(false);
    const [isGeyserOn, setIsGeyserOn] = useState(false);
    const [isWashingOn, setIsWashingOn] = useState(false)
    const [isMicroWaveOn, setIsMicroWaveOn] = useState(false)
    const [isFridgeOn, setIsFridgeOn] = useState(false)
    const [isLightsOn, setIsLightsOn] = useState(false)
    const [isCeilingFanOn,setIsCeilingFanOn] =useState(false)
    const [isTvOn,setIsTvOn] = useState(false)
    const [isLaptopOn, setIsLaptopOn] = useState(false)
    const [isIronOn, setIsIronOn] = useState(false)
    const [isOn, setIsOn] = useState(false)
    const [isHeaterOn, setIsHeaterOn] = useState(false)
    const [showPieChart, setShowPieChart] = useState(false);



    // Watt and Consumption calculation states
    const [aCSelectedWattage, setACSelectedWattage] = useState("");
    const [aCSelectedLoads, setACSelectedLoads] = useState("");
    const [aCSelectedConsumptionTime, setACSelectedConsumptionTime] = useState("");
    const [geyserSelectedWattage, setGeyserSelectedWattage] = useState('')
    const [geyserSelectedLoads, setGeyserSelectedLoads] = useState('')
    const [geyserSelectedConsumptionTime, setGeyserSelectedConsumptionTime] = useState('')
    const [washingSelectedWattage, setWashingSelectedWattage] = useState('')
    const [washingselectedLoads, setWashingSelectedLoads] = useState("")
    const [washingSelectedConsumptionTime, setWashingSelectedConsumptionTime] = useState('')
    const [ovenSelectedWattage, setOvenSelectedWattage] = useState("");
    const [ovenSelectedLoads, setOvenSelectedLoads] = useState("");
    const [ovenSelectedConsumptionTime, setOvenSelectedConsumptionTime] = useState("");
    const [fridgeSelectedWattage, setFridgeSelectedWattage] = useState("");
    const [fridgeSelectedLoads, setFridgeSelectedLoads] = useState("");
    const [fridgeSelectedConsumptionTime, setFridgeSelectedConsumptionTime] = useState("");
    const [lightSelectedWattage, setLightSelectedWattage] = useState("");
    const [lightsSelectedLoads, setLightsSelectedLoads] = useState("");
    const [lightSelectedConsumptionTime, setLightSelectedConsumptionTime] = useState("");
    const [ceilingFanSelectddWattage, setCeilingfanSelectedWattage] = useState("");
    const [ceilingFanSelectedLoads, setCeilingFanSelectedLoads] = useState("");
    const [ceilingFanSelectedConsumptionTime,setceilingFanSelectedConsumptionTime] = useState("");
    const [tvSelectedWattage, setTvSelectedWattage] = useState("");
    const [tvSelectedLoads, setTvSelectedLoads] = useState("");
    const [tvSelectedConsumptionTime, setTvSelectedConsumtiontime] = useState("");
    const [laptopSelectedWattage, setLaptopSelectedWattage] = useState("");
    const [laptopSelectedLoads, setLaptopSelectedLoads] = useState("");
    const [laptopSelectedConsumptionTime, setLaptopSelectedConsumption] = useState("");
    const [ironSelectedConsumptionTime, setIronSelectedConsumption] = useState("");
    const [ironSelectedLoads, setIronSelectedLoads] = useState("");
    const [ironSelectedWattage, setIronSelectedWattage] = useState("");
    const [SelectedWattage, setSelectedWattage] = useState("");
    const [SelectedLoads, setSelectedLoads] = useState("");
    const [SelectedConsumptionTime, setSelectedConsumptionTime] = useState("");

    // State variables for total sum
    const [airTotal, setAirTotal] = useState(0);
    const [geyserTotal, setGeyserTotal] = useState(0);
    const [washingTotal, setWashingTotal] = useState(0)
    const [ovenTotal, setOvenTotal] = useState(0)
    const [fridgeTotal, setFridgeTotal] = useState(0)
    const [lightsTotal, setLightsTotal] = useState(0)
    const [ceilingFantotal, setCeilingFanTotal] = useState(0)
    const [tvTotal, setTvTotal] = useState(0)
    const [laptopTotal, setLaptopTotal] = useState(0)
    const [ironTotal, setIronTotal] = useState(0)
    const [otherMTotal, setOtherMTotal] = useState(0)
    const [heaterTotal, setHeaterTotal] = useState(0)



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

    const handleCeilingFanToggle = () => {
        setIsCeilingFanOn(!isCeilingFanOn)
    }

    const handleTvToggle = () => {
        setIsTvOn(!isTvOn)
    }
    
    const handleLaptopToggle = () => {
        setIsLaptopOn(!isLaptopOn)
    }

    const handleIronToggle = () => {
        setIsIronOn(!isIronOn)
    }
    const handleToggle = () => {
        setIsOn(!isOn)
    }

    // Watt and Consumption calculation functions
    useEffect(() => {
        setAirTotal(+aCSelectedWattage * +aCSelectedLoads * +aCSelectedConsumptionTime);
    }, [aCSelectedWattage, aCSelectedLoads, aCSelectedConsumptionTime]);

    useEffect(() => {
        setGeyserTotal(+geyserSelectedWattage * +geyserSelectedLoads * +geyserSelectedConsumptionTime);
        // console.log(geyserTotal);
    }, [geyserSelectedWattage, geyserSelectedLoads, geyserSelectedConsumptionTime]);

    useEffect(() => {
        setWashingTotal(+washingSelectedWattage * +washingselectedLoads * +washingSelectedConsumptionTime);
        // console.log(washingTotal);
    }, [washingSelectedWattage, washingSelectedConsumptionTime]);

    useEffect(() => {
        setOvenTotal(+ovenSelectedWattage * +ovenSelectedLoads * +ovenSelectedConsumptionTime);
        // console.log(ovenTotal);
    }, [ovenSelectedWattage, ovenSelectedLoads, ovenSelectedConsumptionTime]);

    useEffect(() => {
        setFridgeTotal(+fridgeSelectedWattage * +fridgeSelectedLoads * +fridgeSelectedConsumptionTime);
        // console.log(fridgeTotal);
    }, [fridgeSelectedWattage, fridgeSelectedLoads, fridgeSelectedConsumptionTime]);

    useEffect(() => {
        setLightsTotal(+lightSelectedWattage * +lightsSelectedLoads * +lightSelectedConsumptionTime);
        // console.log(lightsTotal);
    }, [lightSelectedWattage, lightsSelectedLoads, lightSelectedConsumptionTime]);

    useEffect(() => {
        setCeilingFanTotal(+ceilingFanSelectddWattage * +ceilingFanSelectedLoads * +ceilingFanSelectedConsumptionTime);
    }, [ceilingFanSelectddWattage,ceilingFanSelectedLoads, ceilingFanSelectedConsumptionTime] );

    useEffect(() => {
        setTvTotal(+tvSelectedWattage * +tvSelectedLoads * +tvSelectedConsumptionTime);
    }, [tvSelectedWattage, tvSelectedLoads, tvSelectedConsumptionTime]);

    useEffect(() => {
        setLaptopTotal(+laptopSelectedWattage * +laptopSelectedLoads * +laptopSelectedConsumptionTime);
    }, [laptopSelectedWattage, laptopSelectedLoads, laptopSelectedConsumptionTime]);

    useEffect(() => {
        setIronTotal(+ironSelectedWattage * +ironSelectedLoads * +ironSelectedConsumptionTime);
    }, [ironSelectedWattage,ironSelectedLoads,ironSelectedConsumptionTime] );

    useEffect(() => {
        setOtherMTotal(+SelectedWattage * +SelectedLoads * +SelectedConsumptionTime);
    }, [SelectedWattage, SelectedLoads, SelectedConsumptionTime]);

    const handleACWattageSelect = (event) => {
        setACSelectedWattage(event.target.value);
    };

    const handleACLoadsSelect = (event) =>{
        setACSelectedLoads(event.target.value);
    };

    const handleGeyserWattageSelect = (event) => {
        setGeyserSelectedWattage(event.target.value)
    }

    const handleGeyserLoadsSelect = (event) => {
        setGeyserSelectedLoads(event.target.value)
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

    const handleCeilingFanWattageSelect = (event) => {
        setCeilingfanSelectedWattage(event.target.value);
    };
    const handleCeilingFanLoadsSelect = (event) => {
        setCeilingFanSelectedLoads(event.target.value);
    };
    const handleCeilingFanConsumptionTimeSelect = (event) => {
        setceilingFanSelectedConsumptionTime(event.target.value);
    };

    const handleLaptopConsumptionTimeSelect = (event) => {
        setLaptopSelectedConsumption(event.target.value);
    }

    const handleLaptopLoadsSelect = (event) => {
        setLaptopSelectedLoads(event.target.value);
    }

    const handleLaptopWattageSelect = (event) => {
        setLaptopSelectedWattage(event.target.value);
    }
    const handleIronWattageSelect = (event) => {
        setIronSelectedWattage(event.target.value);
    }
    const handleIronLoadsSelect = (event) => {
        setIronSelectedLoads(event.target.value);
    }
    const handleIronConsumptionTimeSelect = (event) => {
        setIronSelectedConsumption(event.target.value);
    }

    const handleTvWattageSelect = (event) => {
        setTvSelectedWattage(event.target.value);
    };
    const handleTvLoadsSelect = (event) => {
        setTvSelectedLoads(event.target.value);
    };
    const handleTvConsumptionTimeSelect = (event) => {
        setTvSelectedConsumtiontime(event.target.value);
    };

    const handleLightsLoadsSelect = (event) => {
        setLightsSelectedLoads(event.target.value);
    };
    
    const handleOvenLoadsSelect = (event) => {
        setOvenSelectedLoads(event.target.value);
    };

    
    const handleWashingLoadsSelect = (event) => {
        setWashingSelectedLoads(event.target.value);
    };

    const handleFridgeLoadsSelect = (event) => {
        setFridgeSelectedLoads(event.target.value);
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
    
    const handleWattageSelect = (event) => {
        setSelectedWattage(event.target.value);
    }

    const handleLoadsSelect = (event) => {
        setSelectedLoads(event.target.value);
    }
    const handleConsumptionTimeSelect = (event) => {
        setSelectedConsumptionTime(event.target.value);
    }

    const [rows, initRows] = useState([]);
    const addRowTable = () => {
        const data = {
            CustomMachines: " ",
            SelectedWattage: " ",
            SelectedLoads: " ",
            SelectedConsumptionTime: " ",
            
        }
        initRows([...rows, data]);
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

        const ConsumptionData = [
            { label: 'Air Conditioner', value: airTotal },
            { label: 'Geyser', value: geyserTotal },
            { label: 'Washing Machine', value: washingTotal },
            { label: 'Oven', value: ovenTotal },
            { label: 'Fridge', value: fridgeTotal },
            { label: 'Lights', value: lightsTotal },
            { label: 'Ceiling Fan', value: ceilingFantotal},
            { label: 'TV', value: tvTotal},
            { lable: 'Laptop', value: laptopTotal},
            { lable: 'Iron', value: ironTotal}
        ];

        const filteredData = ConsumptionData
            .filter(({ value }) => value !== null && value !== 0)
            .map(({ label, value }) => ({ label, value }));
        const consumptionValue = filteredData.map(({ value }) => value)

        const consumptionTitle = filteredData.map(({ label }) => label);

        const step2 = {
            consumptionValues: consumptionValue,
            consumptionTitles: consumptionTitle,
        };


        const response = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step2', {
            method: 'POST',
            body: JSON.stringify(step2),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()



        if (response.ok) {
            // setError(null)
            console.log('New calculation added', json);
            const res = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step2');
            const data = await res.json();
        }
        else {

        }
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
                                            <th className="py-4 pr-6 pl-5">No of LOAD</th>
                                            <th className="py-4 pr-6 pl-5">Consumption Time</th>
                                            {/* <th className="py-4 pr-6 pl-5">Assumptions</th> */}
                                        </tr>
                                    </thead>

                                    {/* Vertical text */}
                                    <div className="justify-center items-center absolute -right-44 top-[340px] lg:block md:hidden hidden">
                                        <h1 className='transform -rotate-90 text-[#e8f4f8] w-[500px] text-[140px] font-bold uppercase vertical2'>Step 2</h1>
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
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                            <Select>
                                                    <select name="loads" id="loads" value={aCSelectedLoads}
                                                        disabled={!isAirConditionerOn}
                                                        onChange={handleACLoadsSelect}
                                                        className='w-16 h-8 bg-lightGreen rounded-md flex justify-center items-center text-xl text-rgbaHeader select'
                                                    >
                                                        {
                                                            AirConLoads.map((range, idx) => (
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
                                            {/*<Geyser No Of loads / > */}
                                            <td>
                                                <GeyserNoOfLoads
                                                    geyserSelectedLoads={geyserSelectedLoads}
                                                    isGeyserOn={isGeyserOn}
                                                    handleLoadsSelect={handleGeyserLoadsSelect}
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
                                             {/*<Washing No Of loads / > */}
                                             <td>
                                                <WashingNoOfLoads
                                                    setWashingSelectedLoads={washingselectedLoads}
                                                    isWashingOn={isWashingOn}
                                                    handleLoadsSelect={handleWashingLoadsSelect}
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
                                             {/*<Oven No Of loads / > */}
                                             <td>
                                                <MicroWaveNoOfLoads
                                                    ovenSelectedLoads={ovenSelectedLoads}
                                                    isMicroWaveOn={isMicroWaveOn}
                                                    handleLoadsSelect={handleOvenLoadsSelect}
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
                                             {/*<Fridge No Of loads / > */}
                                             <td>
                                             <FridgeNoOfLoads
                                                    fridgeSelectedLoads={fridgeSelectedLoads}

                                                    isFridgeOn={isFridgeOn}
                                                    handleLoadsSelect={handleFridgeLoadsSelect}
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
                                             {/*<Lights No Of loads / > */}
                                             <td>
                                                <LightsNoOfLoads
                                                    LightsSelectedLoads={lightsSelectedLoads}
                                                    isLightsOn={isLightsOn}
                                                    handleLoadsSelect={handleLightsLoadsSelect}
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

                                        {/* CeilingFan */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Ceiling Fan</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isCeilingFanOn}
                                                        onChange={handleCeilingFanToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <CeilingFanWattInput
                                                    ceilingFanSelectedWattage={ceilingFanSelectddWattage}

                                                    isCeilingFanOn={isCeilingFanOn}
                                                    handleWattageSelect={handleCeilingFanWattageSelect}
                                                />
                                            </td>
                                            {/*<Lights No Of loads / > */}
                                            <td>
                                                <CeilingFanNoOfLoads
                                                    CeilingFanSelectedLoads={ceilingFanSelectedLoads}
                                                    isCeilingFanOn={isCeilingFanOn}
                                                    handleLoadsSelect={handleCeilingFanLoadsSelect}
                                                />
                                            </td>
                                            <td>
                                                <CeilingFanConsumption
                                                    ceilingFanSelectedConsumptionTime={ceilingFanSelectedConsumptionTime}
                                                    isCeilingFanOn={isCeilingFanOn}
                                                    handleConsumptionTimeSelect={handleCeilingFanConsumptionTimeSelect}
                                                />
                                            </td>
                                            </tr>

                                            {/* Tv */}
                                            <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">TV</td>
                                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                    <label className={styles.toggleSwitch}>
                                                        <input
                                                            type="checkbox"
                                                            checked={isTvOn}
                                                            onChange={handleTvToggle}
                                                        />
                                                        <span className={styles.toggleSwitchSlider}></span>
                                                    </label>
                                                </td>
                                            <td>
                                            <TvWattInput
                                                tvSelectedWattage={tvSelectedWattage}
                                                    isTvOn={isTvOn}
                                                    handleWattageSelect={handleTvWattageSelect}
                                            />
                                            </td>
                                            {/*<TV No Of loads / > */}
                                            <td>
                                                <TvNoOfLoads
                                                    tvSelectedLoads={tvSelectedLoads}
                                                    isTvOn={isCeilingFanOn}
                                                    handleLoadsSelect={handleTvLoadsSelect}
                                                />
                                            </td>
                                            <td>
                                                <TvConsumptionTime
                                                    tvSelectedConsumptionTime={tvSelectedConsumptionTime}
                                                    isTvOn={isTvOn}
                                                    handleConsumptionTimeSelect={handleTvConsumptionTimeSelect}
                                                />
                                            </td>
                                            </tr>
                                            {/* Laptop */}
                                            <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Laptop/Computer</td>
                                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                    <label className={styles.toggleSwitch}>
                                                        <input
                                                            type="checkbox"
                                                            checked={isLaptopOn}
                                                            onChange={handleLaptopToggle}
                                                        />
                                                        <span className={styles.toggleSwitchSlider}></span>
                                                    </label>
                                                </td>
                                            <td>
                                            <LaptopInput
                                                laptopSelectedWattage={laptopSelectedWattage}
                                                    isLaptopOn={isLaptopOn}
                                                    handleWattageSelect={handleLaptopWattageSelect}
                                            />
                                            </td>
                                            {/*<Laptop No Of loads / > */}
                                            <td>
                                                <LaptopNoOfLoads
                                                    laptopSelectedLoads={laptopSelectedLoads}
                                                    isLaptopOn={isLaptopOn}
                                                    handleLoadsSelect={handleLaptopLoadsSelect}
                                                />
                                            </td>
                                            <td>
                                                <LaptopConsumption
                                                    laptopSelectedConsumptionTime={laptopSelectedConsumptionTime}
                                                    isLaptopOn={isLaptopOn}
                                                    handleConsumptionTimeSelect={handleLaptopConsumptionTimeSelect}
                                                />
                                            </td>
                                            </tr>

                                            {/* Iron */}
                                            <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Iron</td>
                                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                    <label className={styles.toggleSwitch}>
                                                        <input
                                                            type="checkbox"
                                                            checked={isIronOn}
                                                            onChange={handleIronToggle}
                                                        />
                                                        <span className={styles.toggleSwitchSlider}></span>
                                                    </label>
                                                </td>
                                            <td>
                                            <IronInput
                                                ironSelectedWattage={ironSelectedWattage}
                                                    isIronOn={isIronOn}
                                                    handleWattageSelect={handleIronWattageSelect}
                                            />
                                            </td>
                                            {/*<Iron No Of loads / > */}
                                            <td>
                                                <IronNoOfLoads
                                                    ironSelectedLoads={ironSelectedLoads}
                                                    isIronOn={isIronOn}
                                                    handleLoadsSelect={handleIronLoadsSelect}
                                                />
                                            </td>
                                            <td>
                                                <IronConsumption
                                                    ironSelectedConsumptionTime={ironSelectedConsumptionTime}
                                                    isIronOn={isIronOn}
                                                    handleConsumptionTimeSelect={handleIronConsumptionTimeSelect}
                                                />
                                            </td>
                                            </tr>

                                            
                                    </tbody>
                                </table >
                            </div>


                            {/* Custom Machines Section */}
                             <div className="lg:max-w-none max-w-xl mt-8 py-6">
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
                                                        checked={isOn}
                                                        onChange={handleToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <OtherMachineWattsInput
                                                    SelectedWattage={SelectedWattage}
                                                        isOn={isOn}
                                                        handleWattageSelect={handleWattageSelect}
                                                />                                            
                                            </td>
                                            <td>
                                                <OtherMachineNoOfLoads
                                                    SelectedLoads={SelectedLoads}
                                                    isOn={isOn}
                                                    handleLoadsSelect={handleLoadsSelect}
                                                />
                                            </td>
                                            <td>
                                                <OtherMachineConsTime
                                                    SelectedConsumptionTime={SelectedConsumptionTime}
                                                    isOn={isOn}
                                                    handleConsumptionTimeSelect={handleConsumptionTimeSelect}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <AddButton text='Add' onClick = {addRowTable} />
                            </div> 
                            <div className='py-20 flex justify-center items-center'>
                                <FinalCalculate handleClick={handleFinalCalculateClick} />
                            </div>
                            
                            
                            
                                
                           
                        </form>

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
                        ceilingFanPercentage={ceilingFantotal}
                        tvPercentage={tvTotal}
                        laptopPercentage={laptopTotal}
                        ironPercentage={ironTotal}
                        otherMPercentage={otherMTotal}
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
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 .vertical2{
    -webkit-text-stroke: 4px white;
   }
`