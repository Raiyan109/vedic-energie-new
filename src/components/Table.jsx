import React from 'react';
import { useState } from "react"
import styles from '../components/checkboxToggle.module.css'
import { customTableItems, tableItems } from '../constants';
import AddButton from './AddButton';
import CalculateButton from './CalculateButton';
import FinalCalculate from './FinalCalculate';
import AirConWattInput from '../components/WattInputs/AirConWattInput'
import AirConsumption from './Consumptions/AirConsumption';
import Assumptions from './Assumptions';
import GeyserInput from './WattInputs/GeyserInput';
import WashingInput from './WattInputs/WashingInput';
import MicroWaveInput from './WattInputs/MicroWaveInput';
import FridgeInput from './WattInputs/FridgeInput';
import LightsInput from './WattInputs/LightsInput';

const Table = () => {
    const [selectedItem, setSelectedItem] = useState(0)
    const [selectedTab, setSelectedTab] = useState(0);

    const [isAirConditionerOn, setIsAirConditionerOn] = useState(false);
    const [isGeyserOn, setIsGeyserOn] = useState(false);
    const [isWashingOn, setIsWashingOn] = useState(false)
    const [isMicroWaveOn, setIsMicroWaveOn] = useState(false)
    const [isFridgeOn, setIsFridgeOn] = useState(false)
    const [isLightsOn, setIsLightsOn] = useState(false)
    const [isHeaterOn, setIsHeaterOn] = useState(false)


    const handleSummerClick = () => {
        setIsAirConditionerOn(true);
        setIsGeyserOn(false);
        setIsWashingOn(true)
        setIsMicroWaveOn(false)
        setIsFridgeOn(true)
        setIsLightsOn(false)
    };

    const handleWinterClick = () => {
        setIsAirConditionerOn(false);
        setIsGeyserOn(true);
        setIsWashingOn(false)
        setIsMicroWaveOn(true)
        setIsFridgeOn(false)
        setIsLightsOn(true)
    };

    const handleSummerToggle = () => {
        setIsAirConditionerOn(!isAirConditionerOn);
        setIsWashingOn(!isWashingOn)
        setIsFridgeOn(!isFridgeOn)
    };

    const handleWinterToggle = () => {
        setIsGeyserOn(!isGeyserOn);
        setIsMicroWaveOn(!isMicroWaveOn)
        setIsLightsOn(!isLightsOn)
    };

    const switches = tableItems[selectedTab].switches;

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div>
                    <div className='w-full flex items-center justify-center gap-x-20 py-5'>
                        <button
                            className={isAirConditionerOn ? `bg-blue text-[#F0EFFF] py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium` : 'bg-[#F0EFFF] text-blue py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium'}
                            onClick={handleSummerClick}>Summer</button>

                        <button
                            className={isGeyserOn ? `bg-blue text-[#F0EFFF] py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium` : 'bg-[#F0EFFF] text-blue py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium'}
                            onClick={handleWinterClick}>Winter</button>
                    </div>

                    <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                        <thead className="text-blue uppercase font-medium bg-lightYellow">
                            <tr>
                                <th className="py-4 pr-6 pl-5">Machines</th>
                                <th className="py-4 pr-6 pl-5">Status</th>
                                <th className="py-4 pr-6 pl-5">Watts</th>
                                <th className="py-4 pr-6 pl-5">Consumption Time</th>
                                <th className="py-4 pr-6 pl-5">Assumptions</th>
                            </tr>
                        </thead>

                        <tbody className="text-blue py-3">
                            {/* Air Condition */}
                            <tr className='odd:bg-gray even:bg-lightGray'>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Air Conditioner</td>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                    <div className={styles.toggle}>
                                        <input type="checkbox" id="switch"
                                            checked={isAirConditionerOn}
                                            onChange={handleSummerToggle}
                                        />
                                        <label for="switch">Toggle</label>
                                    </div>
                                </td>
                                <td>
                                    <AirConWattInput />
                                </td>
                                <td>
                                    <AirConsumption />
                                </td>
                                <td>
                                    <Assumptions />
                                </td>
                            </tr>
                            {/* Geyser */}
                            <tr className='odd:bg-gray even:bg-lightGray'>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Geyser</td>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                    <div className={styles.toggle}>
                                        <input type="checkbox" id="switch"
                                            checked={isGeyserOn}
                                            onChange={handleWinterToggle}
                                        />
                                        <label for="switch">Toggle</label>
                                    </div>
                                </td>
                                <td>
                                    <GeyserInput />
                                </td>
                                <td>
                                    <AirConsumption />
                                </td>
                                <td>
                                    <Assumptions />
                                </td>
                            </tr>
                            {/* Washing Machine */}
                            <tr className='odd:bg-gray even:bg-lightGray'>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Washing Machine</td>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                    <div className={styles.toggle}>
                                        <input type="checkbox" id="switch"
                                            checked={isWashingOn}
                                            onChange={handleSummerToggle}
                                        />
                                        <label for="switch">Toggle</label>
                                    </div>
                                </td>
                                <td>
                                    <WashingInput />
                                </td>
                                <td>
                                    <AirConsumption />
                                </td>
                                <td>
                                    <Assumptions />
                                </td>
                            </tr>

                            {/* Microwave Oven */}
                            <tr className='odd:bg-gray even:bg-lightGray'>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Microwave Oven</td>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                    <div className={styles.toggle}>
                                        <input type="checkbox" id="switch"
                                            checked={isMicroWaveOn}
                                            onChange={handleWinterToggle}
                                        />
                                        <label for="switch">Toggle</label>
                                    </div>
                                </td>
                                <td>
                                    <MicroWaveInput />
                                </td>
                                <td>
                                    <AirConsumption />
                                </td>
                                <td>
                                    <Assumptions />
                                </td>
                            </tr>

                            {/* Fridge */}
                            <tr className='odd:bg-gray even:bg-lightGray'>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Fridge</td>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                    <div className={styles.toggle}>
                                        <input type="checkbox" id="switch"
                                            checked={isFridgeOn}
                                            onChange={handleSummerToggle}
                                        />
                                        <label for="switch">Toggle</label>
                                    </div>
                                </td>
                                <td>
                                    <FridgeInput />
                                </td>
                                <td>
                                    <AirConsumption />
                                </td>
                                <td>
                                    <Assumptions />
                                </td>
                            </tr>

                            {/* Lights */}
                            <tr className='odd:bg-gray even:bg-lightGray'>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Lights</td>
                                <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                    <div className={styles.toggle}>
                                        <input type="checkbox" id="switch"
                                            checked={isLightsOn}
                                            onChange={handleWinterToggle}
                                        />
                                        <label for="switch">Toggle</label>
                                    </div>
                                </td>
                                <td>
                                    <LightsInput />
                                </td>
                                <td>
                                    <AirConsumption />
                                </td>
                                <td>
                                    <Assumptions />
                                </td>
                            </tr>
                        </tbody>
                    </table >
                    <div className='py-20 flex justify-center items-center'>
                        <FinalCalculate />
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Table;