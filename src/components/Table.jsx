import React, { useContext, useEffect } from 'react';
import { useState } from "react"
import styles from '../components/checkboxToggle.module.css'
import '../components/style.css'
import { AirConLoads, OtherMConsTimes, customMachines, customTableItems, tableItems } from '../constants';
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
    const [isOn, setIsOn] = useState(false);
    const [isTubelightOn, setIsTubelightOn] = useState(false);
    const [isCFLOn, setIsCFLOn] = useState(false);
    const [isLEDOn, setIsLEDOn] = useState(false);
    const [isBulbOn, setIsBulbOn] = useState(false);
    const [isCeilingFanOn, setIsCeilingFanOn] = useState(false);
    const [isTableFanOn, setIsTableFanOn] = useState(false);
    const [isRoomCoolerOn, setIsRoomCoolerOn] = useState(false);
    const [isRefigeratorOn, setIsRefigeratorOn] = useState(false);
    const [isTvOn, setIsTvOn] = useState(false);
    const [isLaptopOn, setIsLaptopOn] = useState(false);
    const [isComputerOn, setIsComputerOn] = useState(false);
    const [isPrinterSmallOn, setIsPrinterSmallOn] = useState(false);
    const [isMicroWaveOn, setIsMicroWaveOn] = useState(false);
    const [isJuicerMixerOn, setIsJuicerMixerOn] = useState(false);
    const [isToasterOn, setIsToasterOn] = useState(false);
    const [isGeyserOn, setIsGeyserOn] = useState(false);
    const [isAc1TonOn, setIsAc1TonOn] = useState(false);
    const [isAc15TonOn, setIsAc15TonOn] = useState(false);
    const [isAc2TonOn, setIsAc2TonOn] = useState(false);
    const [isWashingMachineOn, setIsWashingMachineOn] = useState(false);
    const [isIronOn, setIsIronOn] = useState(false);
    const [isVaccumCleanerOn, setIsVaccumCleanerOn] = useState(false);
    const [isExhaustFansOn, setIsExhaustFansOn] = useState(false);
    const [isPhoneChargerOn, setIsPhoneChargerOn] = useState(false);
    const [isSetTopBoxOn, setIsSetTopBoxOn] = useState(false);
    const [isWifiRouterOn, setIsWifiRouterOn] = useState(false);
    const [isWaterPurifierOn, setIsWaterPurifierOn] = useState(false);
    const [isAirPurifierOn, setIsAirPurifierOn] = useState(false);
    const [isHairApplianceOn, setIsHairApplianceOn] = useState(false);
    const [isDishWasherOn, setIsDishWasherOn] = useState(false);
    const [isInductionCooktopOn, setIsInductionCooktopOn] = useState(false);
    const [isSpeakerOn, setIsSpeakerOn] = useState(false);
    const [isCoffeeMakerOn, setIsCoffeeMakerOn] = useState(false);
    const [isCCTVCameraOn, setIsCCTVCameraOn] = useState(false);
    const [isBlenderOn, setIsBlenderOn] = useState(false);
    const [isKettleOn, setIsKettleOn] = useState(false);
    const [showPieChart, setShowPieChart] = useState(false);




    // Watt and Consumption calculation states
    const [SelectedWattage, setSelectedWattage] = useState("");
    const [SelectedLoads, setSelectedLoads] = useState("");
    const [SelectedConsumptionTime, setSelectedConsumptionTime] = useState("");
    const [tubelightSelectedWattage, setTubelightSelectedWattage] = useState(40);
    const [tubelightSelectedLoads, setTubelightSelectedLoads] = useState("");
    const [tubelightSelectedConsumptionTime, setTubelightSelectedConsumptionTime] = useState("");
    const [cflSelectedWattage, setCFLSelectedWattage] = useState(30)
    const [cflSelectedLoads, setCFLSelectedLoads] = useState('')
    const [cflSelectedConsumptionTime, setCFLSelectedConsumptionTime] = useState('')
    const [LEDSelectedWattage, setLEDSelectedWattage] = useState(9)
    const [LEDselectedLoads, setLEDSelectedLoads] = useState("")
    const [LEDSelectedConsumptionTime, setLEDSelectedConsumptionTime] = useState('');
    const [bulbSelectedWattage, setBulbSelectedWattage] = useState(60);
    const [bulbSelectedLoads, setBulbSelectedLoads] = useState("");
    const [bulbSelectedConsumptionTime, setBulbSelectedConsumptionTime] = useState("");
    const [ceilingFanSelectddWattage, setCeilingfanSelectedWattage] = useState(75);
    const [ceilingFanSelectedLoads, setCeilingFanSelectedLoads] = useState("");
    const [ceilingFanSelectedConsumptionTime, setceilingFanSelectedConsumptionTime] = useState("");
    const [tableFanSelectddWattage, setTablefanSelectedWattage] = useState(50);
    const [tableFanSelectedLoads, setTableFanSelectedLoads] = useState("");
    const [tableFanSelectedConsumptionTime, setTableFanSelectedConsumptionTime] = useState("");
    const [roomCoolerSelectddWattage, setRoomCoolerSelectedWattage] = useState(250);
    const [roomCoolerSelectedLoads, setRoomCoolerSelectedLoads] = useState("");
    const [roomCoolerSelectedConsumptionTime, setRoomCoolerSelectedConsumptionTime] = useState("");
    const [refigeratorSelectddWattage, setRefigeratorSelectedWattage] = useState(500);
    const [refigeratorSelectedLoads, setRefigeratorSelectedLoads] = useState("");
    const [refigeratorSelectedConsumptionTime, setRefigeratorSelectedConsumptionTime] = useState("");
    const [tvSelectedWattage, setTvSelectedWattage] = useState(100);
    const [tvSelectedLoads, setTvSelectedLoads] = useState("");
    const [tvSelectedConsumptionTime, setTvSelectedConsumtiontime] = useState("");
    const [laptopSelectedWattage, setLaptopSelectedWattage] = useState(100);
    const [laptopSelectedLoads, setLaptopSelectedLoads] = useState("");
    const [laptopSelectedConsumptionTime, setLaptopSelectedConsumption] = useState("");
    const [computerSelectedWattage, setComputerSelectedWattage] = useState(200);
    const [computerSelectedLoads, setComputerSelectedLoads] = useState("");
    const [computerSelectedConsumptionTime, setComputerSelectedConsumption] = useState("");
    const [printerSmallSelectedWattage, setPrinterSmallSelectedWattage] = useState(200);
    const [printerSmallSelectedLoads, setPrinterSmallSelectedLoads] = useState("");
    const [printerSmallSelectedConsumptionTime, setPrinterSmallSelectedConsumption] = useState("");
    const [microWaveSelectedWattage, setMicroWaveSelectedWattage] = useState(1400);
    const [microWaveSelectedLoads, setMicroWaveSelectedLoads] = useState("");
    const [microWaveSelectedConsumptionTime, setMicroWaveSelectedConsumption] = useState("");
    const [juicerMixerSelectedWattage, setJuicerMixerSelectedWattage] = useState(800);
    const [juicerMixerSelectedLoads, setJuicerMixerSelectedLoads] = useState("");
    const [juicerMixerSelectedConsumptionTime, setJuicerMixerSelectedConsumption] = useState("");
    const [toasterSelectedWattage, setToasterSelectedWattage] = useState(800);
    const [toasterSelectedLoads, setToasterSelectedLoads] = useState("");
    const [toasterSelectedConsumptionTime, setToasterSelectedConsumption] = useState("");
    const [geyserSelectedWattage, setGeyserSelectedWattage] = useState(2200);
    const [geyserSelectedLoads, setGeyserSelectedLoads] = useState("");
    const [geyserSelectedConsumptionTime, setGeyserSelectedConsumption] = useState("");
    const [ac1TonSelectedWattage, setAc1TonSelectedWattage] = useState(1200);
    const [ac1TonSelectedLoads, setAc1TonSelectedLoads] = useState("");
    const [ac1TonSelectedConsumptionTime, setAc1TonSelectedConsumption] = useState("");
    const [ac15TonSelectedWattage, setAc15TonSelectedWattage] = useState(1700);
    const [ac15TonSelectedLoads, setAc15TonSelectedLoads] = useState("");
    const [ac15TonSelectedConsumptionTime, setAc15TonSelectedConsumption] = useState("");
    const [ac2TonSelectedWattage, setAc2TonSelectedWattage] = useState(2300);
    const [ac2TonSelectedLoads, setAc2TonSelectedLoads] = useState("");
    const [ac2TonSelectedConsumptionTime, setAc2TonSelectedConsumption] = useState("");
    const [washingMachineSelectedWattage, setWashingMachineSelectedWattage] = useState(1000);
    const [washingMachineSelectedLoads, setWashingMachineSelectedLoads] = useState("");
    const [washingMachineSelectedConsumptionTime, setWashingMachineSelectedConsumption] = useState("");
    const [ironSelectedWattage, setIronSelectedWattage] = useState(1200);
    const [ironSelectedConsumptionTime, setIronSelectedConsumption] = useState("");
    const [ironSelectedLoads, setIronSelectedLoads] = useState("");
    const [vaccumCleanerSelectedWattage, setVaccumCleanerSelectedWattage] = useState(1400);
    const [vaccumCleanerSelectedConsumptionTime, setVaccumCleanerSelectedConsumption] = useState("");
    const [vaccumCleanerSelectedLoads, setVaccumCleanerSelectedLoads] = useState("");
    const [exhaustFansSelectedWattage, setExhaustFansSelectedWattage] = useState(40);
    const [exhaustFansSelectedConsumptionTime, setExhaustFansSelectedConsumption] = useState("");
    const [exhaustFansSelectedLoads, setExhaustFansSelectedLoads] = useState("");
    const [phoneChargerSelectedWattage, setPhoneChargerSelectedWattage] = useState(40);
    const [phoneChargerSelectedConsumptionTime, setPhoneChargerSelectedConsumption] = useState("");
    const [phoneChargerSelectedLoads, setPhoneChargerSelectedLoads] = useState("");
    const [setTopBoxSelectedWattage, setSetTopBoxSelectedWattage] = useState(40);
    const [setTopBoxSelectedConsumptionTime, setSetTopBoxSelectedConsumption] = useState("");
    const [setTopBoxSelectedLoads, setSetTopBoxSelectedLoads] = useState("");
    const [wifiRouterSelectedWattage, setWifiRouterSelectedWattage] = useState(20);
    const [wifiRouterSelectedConsumptionTime, setWifiRouterSelectedConsumption] = useState("");
    const [wifiRouterSelectedLoads, setWifiRouterSelectedLoads] = useState("");
    const [waterPurifierSelectedWattage, setWaterPurifierSelectedWattage] = useState(90);
    const [waterPurifierSelectedConsumptionTime, setWaterPurifierSelectedConsumption] = useState("");
    const [waterPurifierSelectedLoads, setWaterPurifierSelectedLoads] = useState("");
    const [airPurifierSelectedWattage, setAirPurifierSelectedWattage] = useState(215);
    const [airPurifierSelectedConsumptionTime, setAirPurifierSelectedConsumption] = useState("");
    const [airPurifierSelectedLoads, setAirPurifierSelectedLoads] = useState("");
    const [hairApplianceSelectedWattage, setHairApplianceSelectedWattage] = useState(1600);
    const [hairApplianceSelectedConsumptionTime, setHairApplianceSelectedConsumption] = useState("");
    const [hairApplianceSelectedLoads, setHairApplianceSelectedLoads] = useState("");
    const [dishWasherSelectedWattage, setDishWasherSelectedWattage] = useState(1800);
    const [dishWasherSelectedConsumptionTime, setDishWasherSelectedConsumption] = useState("");
    const [dishWasherSelectedLoads, setDishWasherSelectedLoads] = useState("");
    const [inductionCooktopSelectedWattage, setInductionCooktopSelectedWattage] = useState(2500);
    const [inductionCooktopSelectedConsumptionTime, setInductionCooktopSelectedConsumption] = useState("");
    const [inductionCooktopSelectedLoads, setInductionCooktopSelectedLoads] = useState("");
    const [speakerSelectedWattage, setSpeakerSelectedWattage] = useState(80);
    const [speakerSelectedLoads, setSpeakerSelectedLoads] = useState("");
    const [speakerSelectedConsumptionTime, setSpeakerSelectedConsumptionTime] = useState("");
    const [coffeeMakerSelectedWattage, setCoffeeMakerSelectedWattage] = useState(1300);
    const [coffeeMakerSelectedLoads, setCoffeeMakerSelectedLoads] = useState("");
    const [coffeeMakerSelectedConsumptionTime, setCoffeeMakerSelectedConsumptionTime] = useState("");
    const [cctvCameraSelectedWattage, setCCTVCameraSelectedWattage] = useState(100);
    const [cctvCameraSelectedLoads, setCCTVCameraSelectedLoads] = useState("");
    const [cctvCameraSelectedConsumptionTime, setCCTVCameraSelectedConsumptionTime] = useState("");
    const [blenderSelectedWattage, setBlenderSelectedWattage] = useState(420);
    const [blenderSelectedLoads, setBlenderSelectedLoads] = useState("");
    const [blenderSelectedConsumptionTime, setBlenderSelectedConsumptionTime] = useState("");
    const [kettleSelectedWattage, setKettleSelectedWattage] = useState(1200);
    const [kettleSelectedLoads, setKettleSelectedLoads] = useState("");
    const [kettleSelectedConsumptionTime, setKettleSelectedConsumptionTime] = useState("");


    // State variables for total sum
    const [tubeLightTotal, setTubeLightTotal] = useState(0);
    const [cflTotal, setCflTotal]=useState(0);
    const [LEDTotal, setLEDTotal] = useState(0)
    const [bulbTotal, setBulbTotal] = useState(0);
    const [ceilingFantotal, setCeilingFanTotal] = useState(0);
    const [tableFantotal, setTableFanTotal] = useState(0);
    const [roomCoolerTotal, setRoomCoolerTotal] = useState(0);
    const [refigeratorTotal, setRefigeratorTotal] = useState(0);
    const [tvTotal, setTvTotal] = useState(0);
    const [laptopTotal, setLaptopTotal] = useState(0);
    const [computerTotal, setComputerTotal] = useState(0);
    const [printerSmallTotal, setPrinterSmallTotal] = useState(0);
    const [microWaveTotal, setMicroWaveTotal] = useState(0);
    const [juicerMixerTotal, setJuicerMixerTotal] = useState(0);
    const [toasterTotal, setToasterTotal] = useState(0);
    const [geyserTotal, setGeyserTotal] = useState(0);
    const [ac1TonTotal, setAc1TonTotal] = useState(0);
    const [ac15TonTotal, setAc15TonTotal] = useState(0);
    const [ac2TonTotal, setAc2TonTotal] = useState(0);
    const [washingMachineTotal, setWashingMachineTotal] = useState(0);
    const [ironTotal, setIronTotal] = useState(0);
    const [vaccumCleanerTotal, setVaccumCleanerTotal] = useState(0);
    const [exhaustFansTotal, setExhaustFansTotal] = useState(0);
    const [phoneChargerTotal, setPhoneChargerTotal] = useState(0);
    const [setTopBoxTotal, setSetTopBoxTotal] = useState(0);
    const [wifiRouterTotal, setWifiRouterTotal] = useState(0);
    const [waterPurifierTotal, setWaterPurifierTotal] = useState(0);
    const [airPurifierTotal, setAirPurifierTotal] = useState(0);
    const [hairApplianceTotal, setHairApplianceTotal] = useState(0);
    const [dishWasherTotal, setDishWasherTotal] = useState(0);
    const [inductionCooktopTotal, setInductionCooktopTotal] = useState(0);
    const [speakerTotal, setSpeakerTotal] = useState(0);
    const [coffeeMakerTotal, setCoffeeMakerTotal] = useState(0);
    const [cctvCameraTotal, setCCTVCameraTotal] = useState(0);
    const [blenderTotal, setBlenderTotal] = useState(0);
    const [kettleTotal, setKettleTotal] = useState(0);




    // const handleSummerClick = () => {
    //     setIsTubelightOn(true);
    //     setIsCFLOn(false)
    // };

    // const handleWinterClick = () => {
    //     setIsTubelightOn(false);
    //     setIsCFLOn(true)
    // };

    // const handleSummerToggle = () => {
    //     setIsTubelightOn(!isTubelightOn);
    // };
    const handleToggle = () => {
        setIsOn(!isOn)
    }
    const handleTubelighToggle = () => {
        setIsTubelightOn(!isTubelightOn)
    }
    const handleCFLToggle = () => {
        setIsCFLOn(!isCFLOn)
    }
    const handleLEDToggle = () => {
        setIsLEDOn(!isLEDOn)
    }
    const handlebulbToggle = () => {
        setIsBulbOn(!isBulbOn)
    }
    const handleCeilingFanToggle = () => {
        setIsCeilingFanOn(!isCeilingFanOn)
    }
    const handleTableFanToggle = () => {
        setIsTableFanOn(!isTableFanOn)
    };
    const handleRoomCoolerToggle = () => {
        setIsRoomCoolerOn(!isRoomCoolerOn)
    }
    const handleRefigeratorToggle = () => {
        setIsRefigeratorOn(!isRefigeratorOn)
    }
    const handleTvToggle = () => {
        setIsTvOn(!isTvOn)
    }
    const handleLaptopToggle = () => {
        setIsLaptopOn(!isLaptopOn)
    }
    const handleComputerToggle = () => {
        setIsComputerOn(!isComputerOn)
    }
    const handlePrinterSmallToggle = () => {
        setIsPrinterSmallOn(!isPrinterSmallOn)
    }
    const handleMicroWaveToggle = () => {
        setIsMicroWaveOn(!isMicroWaveOn)
    }
    const handleJuicerMixerToggle = () => {
        setIsJuicerMixerOn(!isJuicerMixerOn)
    }
    const handleToasterToggle = () => {
        setIsToasterOn(!isToasterOn)
    }
    const handleGeyserToggle = () => {
        setIsGeyserOn(!isGeyserOn)
    }
    const handleAc1TonToggle = () => {
        setIsAc1TonOn(!isAc1TonOn)
    }
    const handleAc15TonToggle = () => {
        setIsAc15TonOn(!isAc15TonOn)
    }
    const handleAc2TonToggle = () => {
        setIsAc2TonOn(!isAc2TonOn)
    }
    const handleWashingMachineToggle = () => {
        setIsWashingMachineOn(!isWashingMachineOn)
    }
    const handleIronToggle = () => {
        setIsIronOn(!isIronOn)
    }
    const handleVaccumCleanerToggle = () => {
        setIsVaccumCleanerOn(!isVaccumCleanerOn)
    }
    const handleExhaustFansToggle = () => {
        setIsExhaustFansOn(!isExhaustFansOn)
    }
    const handlePhoneChargerToggle = () => {
        setIsPhoneChargerOn(!isPhoneChargerOn)
    }
    const handleSetTopBoxToggle = () => {
        setIsSetTopBoxOn(!isSetTopBoxOn)
    }
    const handleWifiRouterToggle = () => {
        setIsWifiRouterOn(!isWifiRouterOn)
    }
    const handleWaterPurifierToggle = () => {
        setIsWaterPurifierOn(!isWaterPurifierOn)
    }
    const handleAirPurifierToggle = () => {
        setIsAirPurifierOn(!isAirPurifierOn)
    }
    const handleHairApplianceToggle = () => {
        setIsHairApplianceOn(!isHairApplianceOn)
    }
    const handleDishWasherToggle = () => {
        setIsDishWasherOn(!isDishWasherOn)
    }
    const handleInductionCooktopToggle = () => {
        setIsInductionCooktopOn(!isInductionCooktopOn)
    }
    const handleSpeakerToggle = () => {
        setIsSpeakerOn(!isSpeakerOn)
    }
    const handleCoffeeMakerToggle = () => {
        setIsCoffeeMakerOn(!isCoffeeMakerOn)
    }
    const handleCCTVCameraToggle = () => {
        setIsCCTVCameraOn(!isCCTVCameraOn)
    }
    const handleBlenderToggle = () => {
        setIsBlenderOn(!isBlenderOn)
    }
    const handleKettleToggle = () => {
        setIsKettleOn(!isKettleOn)
    }


    // Watt
    const handleWattageSelect = (event) => {
        setSelectedWattage(event.target.value);
    }
    const handleTubelightWattageSelect = (event) => {
        setTubelightSelectedWattage(event.target.value);
    };
    const handleCFLWattageSelect = (event) => {
        setCFLSelectedWattage(event.target.value)
    }
    const handleLEDWattageSelect = (event) => {
        setLEDSelectedWattage(event.target.value)
    }
    const handleBulbWattageSelect = (event) => {
        setBulbSelectedWattage(event.target.value);
    };
    const handleCeilingFanWattageSelect = (event) => {
        setCeilingfanSelectedWattage(event.target.value);
    };
    const handleTableFanWattageSelect = (event) => {
        setTablefanSelectedWattage(event.target.value);
    };
    const handleRoomCoolerWattageSelect = (event) => {
        setRoomCoolerSelectedWattage(event.target.value);
    };
    const handleRefigeratorWattageSelect = (event) => {
        setRefigeratorSelectedWattage(event.target.value);
    };
    const handleTvWattageSelect = (event) => {
        setTvSelectedWattage(event.target.value);
    };
    const handleLaptopWattageSelect = (event) => {
        setLaptopSelectedWattage(event.target.value);
    }
    const handleComputerWattageSelect = (event) => {
        setComputerSelectedWattage(event.target.value);
    }
    const handlePrinterSmallWattageSelect = (event) => {
        setPrinterSmallSelectedWattage(event.target.value);
    }
    const handleMicroWaveWattageSelect = (event) => {
        setMicroWaveSelectedWattage(event.target.value);
    }
    const handleJuicerMixerWattageSelect = (event) => {
        setJuicerMixerSelectedWattage(event.target.value);
    }
    const handleToasterWattageSelect = (event) => {
        setToasterSelectedWattage(event.target.value);
    }
    const handleGeyserWattageSelect = (event) => {
        setGeyserSelectedWattage(event.target.value);
    }
    const handleAc1TonWattageSelect = (event) => {
        setAc1TonSelectedWattage(event.target.value);
    }
    const handleAc15TonWattageSelect = (event) => {
        setAc15TonSelectedWattage(event.target.value);
    }
    const handleAc2TonWattageSelect = (event) => {
        setAc2TonSelectedWattage(event.target.value);
    }
    const handleWashingMachineWattageSelect = (event) => {
        setWashingMachineSelectedWattage(event.target.value);
    }
    const handleIronWattageSelect = (event) => {
        setIronSelectedWattage(event.target.value);
    }
    const handleVaccumCleanerWattageSelect = (event) => {
        setVaccumCleanerSelectedWattage(event.target.value);
    }
    const handleExhaustFansWattageSelect = (event) => {
        setExhaustFansSelectedWattage(event.target.value);
    }
    const handlePhoneChargerWattageSelect = (event) => {
        setPhoneChargerSelectedWattage(event.target.value);
    }
    const handleSetTopBoxWattageSelect = (event) => {
        setSetTopBoxSelectedWattage(event.target.value);
    }
    const handleWifiRouterWattageSelect = (event) => {
        setWifiRouterSelectedWattage(event.target.value);
    }
    const handleWaterPurifierWattageSelect = (event) => {
        setWaterPurifierSelectedWattage(event.target.value);
    }
    const handleAirPurifierWattageSelect = (event) => {
        setAirPurifierSelectedWattage(event.target.value);
    }
    const handleHairApplianceWattageSelect = (event) => {
        setHairApplianceSelectedWattage(event.target.value);
    }
    const handleDishWasherWattageSelect = (event) => {
        setDishWasherSelectedWattage(event.target.value);
    }
    const handleInductionCooktopWattageSelect = (event) => {
        setInductionCooktopSelectedWattage(event.target.value);
    }
    const handleSpeakerWattageSelect = (event) => {
        setSpeakerSelectedWattage(event.target.value);
    };
    const handleCoffeeMakerWattageSelect = (event) => {
        setCoffeeMakerSelectedWattage(event.target.value);
    };
    const handleCCTVCameraWattageSelect = (event) => {
        setCCTVCameraSelectedWattage(event.target.value);
    };
    const handleBlenderWattageSelect = (event) => {
        setBlenderSelectedWattage(event.target.value);
    };
    const handleKettleWattageSelect = (event) => {
        setKettleSelectedWattage(event.target.value);
    };
    // ======================================================


    // Load
    const handleLoadsSelect = (event) => {
        setSelectedLoads(event.target.value);
    }
    const handleTubelightLoadsSelect = (event) => {
        setTubelightSelectedLoads(event.target.value);
        console.log(event.target.value);
    };
    const handleCFLLoadsSelect = (event) => {
        setCFLSelectedLoads(event.target.value);
    };
    const handleLEDLoadsSelect = (event) => {
        setLEDSelectedLoads(event.target.value)
    }
    const handleBulbLoadsSelect = (event) => {
        setBulbSelectedLoads(event.target.value);
    };
    const handleCeilingFanLoadsSelect = (event) => {
        setCeilingFanSelectedLoads(event.target.value);
    };
    const handleTableFanLoadsSelect = (event) => {
        setTableFanSelectedLoads(event.target.value);
    };
    const handleRoomCoolerLoadsSelect = (event) => {
        setRoomCoolerSelectedLoads(event.target.value);
    };
    const handleRefigeratorLoadsSelect = (event) => {
        setRefigeratorSelectedLoads(event.target.value);
    };
    const handleTvLoadsSelect = (event) => {
        setTvSelectedLoads(event.target.value);
    };
    const handleLaptopLoadsSelect = (event) => {
        setLaptopSelectedLoads(event.target.value);
    }
    const handleComputerLoadsSelect = (event) => {
        setComputerSelectedLoads(event.target.value);
    }
    const handlePrinterSmallLoadsSelect = (event) => {
        setPrinterSmallSelectedLoads(event.target.value);
    }
    const handleMicroWaveLoadsSelect = (event) => {
        setMicroWaveSelectedLoads(event.target.value);
    }
    const handleJuicerMixerLoadsSelect = (event) => {
        setJuicerMixerSelectedLoads(event.target.value);
    }
    const handleToasterLoadsSelect = (event) => {
        setToasterSelectedLoads(event.target.value);
    }
    const handleGeyserLoadsSelect = (event) => {
        setGeyserSelectedLoads(event.target.value);
    }
    const handleAc1TonLoadsSelect = (event) => {
        setAc1TonSelectedLoads(event.target.value);
    }
    const handleAc15TonLoadsSelect = (event) => {
        setAc15TonSelectedLoads(event.target.value);
    }
    const handleAc2TonLoadsSelect = (event) => {
        setAc2TonSelectedLoads(event.target.value);
    }
    const handleWashingMachineLoadsSelect = (event) => {
        setWashingMachineSelectedLoads(event.target.value);
    }
    const handleIronLoadsSelect = (event) => {
        setIronSelectedLoads(event.target.value);
    }
    const handleVaccumCleanerLoadsSelect = (event) => {
        setVaccumCleanerSelectedLoads(event.target.value);
    }
    const handleExhaustFansLoadsSelect = (event) => {
        setExhaustFansSelectedLoads(event.target.value);
    }
    const handlePhoneChargerLoadsSelect = (event) => {
        setPhoneChargerSelectedLoads(event.target.value);
    }
    const handleSetTopBoxLoadsSelect = (event) => {
        setSetTopBoxSelectedLoads(event.target.value);
    }
    const handleWifiRouterLoadsSelect = (event) => {
        setWifiRouterSelectedLoads(event.target.value);
    }
    const handleWaterPurifierLoadsSelect = (event) => {
        setWaterPurifierSelectedLoads(event.target.value);
    }
    const handleAirPurifierLoadsSelect = (event) => {
        setAirPurifierSelectedLoads(event.target.value);
    }
    const handleHairApplianceLoadsSelect = (event) => {
        setHairApplianceSelectedLoads(event.target.value);
    }
    const handleDishWasherLoadsSelect = (event) => {
        setDishWasherSelectedLoads(event.target.value);
    }
    const handleInductionCooktopLoadsSelect = (event) => {
        setInductionCooktopSelectedLoads(event.target.value);
    }
    const handleSpeakerLoadsSelect = (event) => {
        setSpeakerSelectedLoads(event.target.value);
    };
    const handleCoffeeMakerLoadsSelect = (event) => {
        setCoffeeMakerSelectedLoads(event.target.value);
    };
    const handleCCTVCameraLoadsSelect = (event) => {
        setCCTVCameraSelectedLoads(event.target.value);
    };
    const handleBlenderLoadsSelect = (event) => {
        setBlenderSelectedLoads(event.target.value);
    };
    const handleKettleLoadsSelect = (event) => {
        setKettleSelectedLoads(event.target.value);
    };
    //   ========================================================= 



    // Consumption time
    const handleConsumptionTimeSelect = (event) => {
        setSelectedConsumptionTime(event.target.value);
    }
    const handleTubelightConsumptionTimeSelect = (event) => {
        setTubelightSelectedConsumptionTime(event.target.value);
    }
    const handleCFLConsumptionTimeSelect = (event) => {
        setCFLSelectedConsumptionTime(event.target.value)
    };
    const handleLEDConsumptionTimeSelect = (event) => {
        setLEDSelectedConsumptionTime(event.target.value)
    };
    const handleBulbConsumptionTimeSelect = (event) => {
        setBulbSelectedConsumptionTime(event.target.value);
    };
    const handleCeilingFanConsumptionTimeSelect = (event) => {
        setceilingFanSelectedConsumptionTime(event.target.value);
    };
    const handleTableFanConsumptionTimeSelect = (event) => {
        setTableFanSelectedConsumptionTime(event.target.value);
    };
    const handleRoomCoolerConsumptionTimeSelect = (event) => {
        setRoomCoolerSelectedConsumptionTime(event.target.value);
    };
    const handleRefigeratorConsumptionTimeSelect = (event) => {
        setRefigeratorSelectedConsumptionTime(event.target.value);
    };
    const handleTvConsumptionTimeSelect = (event) => {
        setTvSelectedConsumtiontime(event.target.value);
    };
    const handleLaptopConsumptionTimeSelect = (event) => {
        setLaptopSelectedConsumption(event.target.value);
    }
    const handleComputerConsumptionTimeSelect = (event) => {
        setComputerSelectedConsumption(event.target.value);
    }
    const handlePrinterSmallConsumptionTimeSelect = (event) => {
        setPrinterSmallSelectedConsumption(event.target.value);
    }
    const handleMicroWaveConsumptionTimeSelect = (event) => {
        setMicroWaveSelectedConsumption(event.target.value);
    }
    const handleJuicerMixerConsumptionTimeSelect = (event) => {
        setJuicerMixerSelectedConsumption(event.target.value);
    }
    const handleToasterConsumptionTimeSelect = (event) => {
        setToasterSelectedConsumption(event.target.value);
    }
    const handleGeyserConsumptionTimeSelect = (event) => {
        setGeyserSelectedConsumption(event.target.value);
    }
    const handleAc1TonConsumptionTimeSelect = (event) => {
        setAc1TonSelectedConsumption(event.target.value);
    }
    const handleAc15TonConsumptionTimeSelect = (event) => {
        setAc15TonSelectedConsumption(event.target.value);
    }
    const handleAc2TonConsumptionTimeSelect = (event) => {
        setAc2TonSelectedConsumption(event.target.value);
    }
    const handleWashingMachineConsumptionTimeSelect = (event) => {
        setWashingMachineSelectedConsumption(event.target.value);
    }
    const handleIronConsumptionTimeSelect = (event) => {
        setIronSelectedConsumption(event.target.value);
    }
    const handleVaccumCleanerConsumptionTimeSelect = (event) => {
        setVaccumCleanerSelectedConsumption(event.target.value);
    }
    const handleExhaustFansConsumptionTimeSelect = (event) => {
        setExhaustFansSelectedConsumption(event.target.value);
    }
    const handlePhoneChargerConsumptionTimeSelect = (event) => {
        setPhoneChargerSelectedConsumption(event.target.value);
    }
    const handleSetTopBoxConsumptionTimeSelect = (event) => {
        setSetTopBoxSelectedConsumption(event.target.value);
    }
    const handleWifiRouterConsumptionTimeSelect = (event) => {
        setWifiRouterSelectedConsumption(event.target.value);
    }
    const handleWaterPurifierConsumptionTimeSelect = (event) => {
        setWaterPurifierSelectedConsumption(event.target.value);
    }
    const handleAirPurifierConsumptionTimeSelect = (event) => {
        setAirPurifierSelectedConsumption(event.target.value);
    }
    const handleHairApplianceConsumptionTimeSelect = (event) => {
        setHairApplianceSelectedConsumption(event.target.value);
    }
    const handleDishWasherConsumptionTimeSelect = (event) => {
        setDishWasherSelectedConsumption(event.target.value);
    }
    const handleInductionCooktopConsumptionTimeSelect = (event) => {
        setInductionCooktopSelectedConsumption(event.target.value);
    }
    const handleSpeakerConsumptionTimeSelect = (event) => {
        setSpeakerSelectedConsumptionTime(event.target.value);
    };
    const handleCoffeeMakerConsumptionTimeSelect = (event) => {
        setCoffeeMakerSelectedConsumptionTime(event.target.value);
    };
    const handleCCTVCameraConsumptionTimeSelect = (event) => {
        setCCTVCameraSelectedConsumptionTime(event.target.value);
    };
    const handleBlenderConsumptionTimeSelect = (event) => {
        setBlenderSelectedConsumptionTime(event.target.value);
    };
    const handleKettleConsumptionTimeSelect = (event) => {
        setKettleSelectedConsumptionTime(event.target.value);
    };

    // Watt and Consumption calculation functions
    useEffect(() => {
        setTubeLightTotal(+tubelightSelectedWattage * +tubelightSelectedLoads * +tubelightSelectedConsumptionTime);
    }, [tubelightSelectedWattage, tubelightSelectedLoads, tubelightSelectedConsumptionTime]);
    useEffect(() => {
        setCflTotal(+cflSelectedWattage * +cflSelectedLoads * +cflSelectedConsumptionTime);
    }, [cflSelectedWattage, cflSelectedLoads, cflSelectedConsumptionTime]);
    useEffect(() => {
        setGeyserTotal(+cflSelectedWattage * +cflSelectedLoads * +cflSelectedConsumptionTime);
        // console.log(geyserTotal);
    }, [cflSelectedWattage, cflSelectedLoads, cflSelectedConsumptionTime]);
    useEffect(() => {
        setLEDTotal(+LEDSelectedWattage * +LEDselectedLoads * +LEDSelectedConsumptionTime);
        // console.log(LEDTotal);
    }, [LEDSelectedWattage, LEDSelectedConsumptionTime]);
    useEffect(() => {
        setBulbTotal(+bulbSelectedWattage * +bulbSelectedLoads * +bulbSelectedConsumptionTime);
        // console.log(bulbTotal);
    }, [bulbSelectedWattage, bulbSelectedLoads, bulbSelectedConsumptionTime]);
    useEffect(() => {
        setCeilingFanTotal(+ceilingFanSelectddWattage * +ceilingFanSelectedLoads * +ceilingFanSelectedConsumptionTime);
    }, [ceilingFanSelectddWattage, ceilingFanSelectedLoads, ceilingFanSelectedConsumptionTime]);
    useEffect(() => {
        setTableFanTotal(+tableFanSelectddWattage * +tableFanSelectedLoads * +tableFanSelectedConsumptionTime);
    }, [tableFanSelectddWattage, tableFanSelectedLoads, tableFanSelectedConsumptionTime]);
    useEffect(() => {
        setRoomCoolerTotal(+roomCoolerSelectddWattage * +roomCoolerSelectedLoads * +roomCoolerSelectedConsumptionTime);
    }, [roomCoolerSelectddWattage, roomCoolerSelectedLoads, roomCoolerSelectedConsumptionTime]);
    useEffect(() => {
        setRefigeratorTotal(+refigeratorSelectddWattage * +refigeratorSelectedLoads * +refigeratorSelectedConsumptionTime);
    }, [refigeratorSelectddWattage, refigeratorSelectedLoads, refigeratorSelectedConsumptionTime]);
    useEffect(() => {
        setTvTotal(+tvSelectedWattage * +tvSelectedLoads * +tvSelectedConsumptionTime);
    }, [tvSelectedWattage, tvSelectedLoads, tvSelectedConsumptionTime]);
    useEffect(() => {
        setLaptopTotal(+laptopSelectedWattage * +laptopSelectedLoads * +laptopSelectedConsumptionTime);
    }, [laptopSelectedWattage, laptopSelectedLoads, laptopSelectedConsumptionTime]);
    useEffect(() => {
        setComputerTotal(+computerSelectedWattage * +computerSelectedLoads * +computerSelectedConsumptionTime);
    }, [computerSelectedWattage, computerSelectedLoads, computerSelectedConsumptionTime]);
    useEffect(() => {
        setPrinterSmallTotal(+printerSmallSelectedWattage * +printerSmallSelectedLoads * +printerSmallSelectedConsumptionTime);
    }, [printerSmallSelectedWattage, printerSmallSelectedLoads, printerSmallSelectedConsumptionTime]);
    useEffect(() => {
        setMicroWaveTotal(+microWaveSelectedWattage * +microWaveSelectedLoads * +microWaveSelectedConsumptionTime);
    }, [microWaveSelectedWattage, microWaveSelectedLoads, microWaveSelectedConsumptionTime]);
    useEffect(() => {
        setJuicerMixerTotal(+juicerMixerSelectedWattage * +juicerMixerSelectedLoads * +juicerMixerSelectedConsumptionTime);
    }, [juicerMixerSelectedWattage, juicerMixerSelectedLoads, juicerMixerSelectedConsumptionTime]);
    useEffect(() => {
        setToasterTotal(+toasterSelectedWattage * +toasterSelectedLoads * +toasterSelectedConsumptionTime);
    }, [toasterSelectedWattage, toasterSelectedLoads, toasterSelectedConsumptionTime]);
    useEffect(() => {
        setGeyserTotal(+geyserSelectedWattage * +geyserSelectedLoads * +geyserSelectedConsumptionTime);
    }, [geyserSelectedWattage, geyserSelectedLoads, geyserSelectedConsumptionTime]);
    useEffect(() => {
        setAc1TonTotal(+ac1TonSelectedWattage * +ac1TonSelectedLoads * +ac1TonSelectedConsumptionTime);
    }, [ac1TonSelectedWattage, ac1TonSelectedLoads, ac1TonSelectedConsumptionTime]);
    useEffect(() => {
        setAc15TonTotal(+ac15TonSelectedWattage * +ac15TonSelectedLoads * +ac15TonSelectedConsumptionTime);
    }, [ac15TonSelectedWattage, ac15TonSelectedLoads, ac15TonSelectedConsumptionTime]);
    useEffect(() => {
        setAc2TonTotal(+ac2TonSelectedWattage * +ac2TonSelectedLoads * +ac2TonSelectedConsumptionTime);
    }, [ac2TonSelectedWattage, ac2TonSelectedLoads, ac2TonSelectedConsumptionTime]);
    useEffect(() => {
        setWashingMachineTotal(+washingMachineSelectedWattage * +washingMachineSelectedLoads * +washingMachineSelectedConsumptionTime);
    }, [washingMachineSelectedWattage, washingMachineSelectedLoads, washingMachineSelectedConsumptionTime]);
    useEffect(() => {
        setIronTotal(+ironSelectedWattage * +ironSelectedLoads * +ironSelectedConsumptionTime);
    }, [ironSelectedWattage, ironSelectedLoads, ironSelectedConsumptionTime]);
    useEffect(() => {
        setVaccumCleanerTotal(+vaccumCleanerSelectedWattage * +vaccumCleanerSelectedLoads * +vaccumCleanerSelectedConsumptionTime);
    }, [vaccumCleanerSelectedWattage, vaccumCleanerSelectedLoads, vaccumCleanerSelectedConsumptionTime]);
    useEffect(() => {
        setExhaustFansTotal(+exhaustFansSelectedWattage * +exhaustFansSelectedLoads * +exhaustFansSelectedConsumptionTime);
    }, [exhaustFansSelectedWattage, exhaustFansSelectedLoads, exhaustFansSelectedConsumptionTime]);
    useEffect(() => {
        setPhoneChargerTotal(+phoneChargerSelectedWattage * +phoneChargerSelectedLoads * +phoneChargerSelectedConsumptionTime);
    }, [phoneChargerSelectedWattage, phoneChargerSelectedLoads, phoneChargerSelectedConsumptionTime]);
    useEffect(() => {
        setSetTopBoxTotal(+setTopBoxSelectedWattage * +setTopBoxSelectedLoads * +setTopBoxSelectedConsumptionTime);
    }, [setTopBoxSelectedWattage, setTopBoxSelectedLoads, setTopBoxSelectedConsumptionTime]);
    useEffect(() => {
        setWifiRouterTotal(+wifiRouterSelectedWattage * +wifiRouterSelectedLoads * +wifiRouterSelectedConsumptionTime);
    }, [wifiRouterSelectedWattage, wifiRouterSelectedLoads, wifiRouterSelectedConsumptionTime]);
    useEffect(() => {
        setWaterPurifierTotal(+waterPurifierSelectedWattage * +waterPurifierSelectedLoads * +waterPurifierSelectedConsumptionTime);
    }, [waterPurifierSelectedWattage, waterPurifierSelectedLoads, waterPurifierSelectedConsumptionTime]);
    useEffect(() => {
        setAirPurifierTotal(+airPurifierSelectedWattage * +airPurifierSelectedLoads * +airPurifierSelectedConsumptionTime);
    }, [airPurifierSelectedWattage, airPurifierSelectedLoads, airPurifierSelectedConsumptionTime]);
    useEffect(() => {
        setHairApplianceTotal(+hairApplianceSelectedWattage * +hairApplianceSelectedLoads * +hairApplianceSelectedConsumptionTime);
    }, [hairApplianceSelectedWattage, hairApplianceSelectedLoads, hairApplianceSelectedConsumptionTime]);
    useEffect(() => {
        setDishWasherTotal(+dishWasherSelectedWattage * +dishWasherSelectedLoads * +dishWasherSelectedConsumptionTime);
    }, [dishWasherSelectedWattage, dishWasherSelectedLoads, dishWasherSelectedConsumptionTime]);
    useEffect(() => {
        setInductionCooktopTotal(+inductionCooktopSelectedWattage * +inductionCooktopSelectedLoads * +inductionCooktopSelectedConsumptionTime);
    }, [inductionCooktopSelectedWattage, inductionCooktopSelectedLoads, inductionCooktopSelectedConsumptionTime]);
    useEffect(() => {
        setSpeakerTotal(+speakerSelectedWattage * +speakerSelectedLoads * +speakerSelectedConsumptionTime);
        // console.log(ovenTotal);
    }, [speakerSelectedWattage, speakerSelectedLoads, speakerSelectedConsumptionTime]);
    useEffect(() => {
        setCoffeeMakerTotal(+coffeeMakerSelectedWattage * +coffeeMakerSelectedLoads * +coffeeMakerSelectedConsumptionTime);
        // console.log(lightsTotal);
    }, [coffeeMakerSelectedWattage, coffeeMakerSelectedLoads, coffeeMakerSelectedConsumptionTime]);
    useEffect(() => {
        setCCTVCameraTotal(+cctvCameraSelectedWattage * +cctvCameraSelectedLoads * +cctvCameraSelectedConsumptionTime);
        // console.log(lightsTotal);
    }, [cctvCameraSelectedWattage, cctvCameraSelectedLoads, cctvCameraSelectedConsumptionTime]);
    useEffect(() => {
        setBlenderTotal(+blenderSelectedWattage * +blenderSelectedLoads * +blenderSelectedConsumptionTime);
    }, [blenderSelectedWattage, blenderSelectedLoads, blenderSelectedConsumptionTime]);
    useEffect(() => {
        setKettleTotal(+kettleSelectedWattage * +kettleSelectedLoads * +kettleSelectedConsumptionTime);
    }, [kettleSelectedWattage, kettleSelectedLoads, kettleSelectedConsumptionTime]);



    // const [tubelightpercentageValue, setTubelightPercentageValue]=useState();
    // const handleTubelightPercentage=()=>{
    //     const tubelightPercentage = (tubeLightTotal / 1200 * 100).toFixed(2);
    //     setTubelightPercentageValue(tubelightPercentage)
    // }


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
    const totalWattHours = tubeLightTotal + geyserTotal + LEDTotal

    //  Calculation of the percentages for each device
    //  const tubelightPercentage = (tubeLightTotal / totalWattHours * 100).toFixed(2);
     const geyserPercentage = (geyserTotal / totalWattHours * 100).toFixed(2);
     const LEDPercentage = (LEDTotal / totalWattHours * 100).toFixed(2);

    // Function for the final calculate button
    const handleFinalCalculateClick = () => {
        setShowPieChart(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ConsumptionData = [
            { label: 'Tubelight', value: tubeLightTotal },
            { label: 'CFL', value: cflTotal },
            { label: 'LED Machine', value: LEDTotal },
            { label: 'Bulb', value: bulbTotal },
            { label: 'Ceiling Fan', value: ceilingFantotal },
            { label: 'Table Fan', value: tableFantotal },
            { label: 'Room Cooler', value: roomCoolerTotal },
            { label: 'Refigerator', value: refigeratorTotal },
            { label: 'TV', value: tvTotal },
            { label: 'Laptop', value: laptopTotal },
            { label: 'Computer', value: computerTotal },
            { label: 'Printer Small', value: printerSmallTotal },
            { label: 'Microwave', value: microWaveTotal },
            { label: 'Juicer Mixer Grinder', value: juicerMixerTotal },
            { label: 'Toaster', value: toasterTotal },
            { label: 'Geyser', value: geyserTotal },
            { label: 'AC 1 Ton', value: ac1TonTotal },
            { label: 'AC 1.5 Ton', value: ac15TonTotal },
            { label: 'AC 2 Ton', value: ac2TonTotal },
            { label: 'Washing Machine', value: washingMachineTotal },
            { label: 'Iron', value: ironTotal },
            { label: 'Vaccum Cleaner', value: vaccumCleanerTotal },
            { label: 'Exhaust Fans', value: exhaustFansTotal },
            { label: 'Phone Charger', value: phoneChargerTotal },
            { label: 'Set Top Box', value: setTopBoxTotal },
            { label: 'Wifi Router', value: wifiRouterTotal },
            { labele: 'Water Purifier', value: waterPurifierTotal },
            { label: 'Air Purifier', value: airPurifierTotal },
            { label: 'Hair Appliance', value: hairApplianceTotal },
            { label: 'Dish Washer', value: dishWasherTotal },
            { label: 'Induction Cooktop', value: inductionCooktopTotal },
            { label: 'Speaker', value: speakerTotal },
            { label: 'Coffee Maker', value: coffeeMakerTotal },
            { label: 'CCTV Camera', value: cctvCameraTotal },
            { label: 'Blender', value: blenderTotal },
            { label: 'Kettle', value: kettleTotal }

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
    if(isTubelightOn && tubeLightTotal>0){
        const tubePercentage=(tubeLightTotal/1200 * 100).toFixed(2);
        console.log(tubePercentage)
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
                            // className={isTubelightOn ? `bg-lightBlue text-[#F0EFFF] py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium` : 'bg-[#F0EFFF] text-lightBlue py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium'}
                            // onClick={handleSummerClick}
                            >Summer</button>

                            <button
                            // className=
                            //  {isCFLOn ? `
                            // 'bg-lightBlue text-[#F0EFFF] py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium` : 'bg-[#F0EFFF] text-lightBlue py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium'}
                            // onClick={handleWinterClick}
                            >Winter</button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='overflow-x-auto'>
                                <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                                    <thead className="text-blue uppercase font-medium bg-lightYellow">
                                        <tr>
                                            <th className="py-4 pr-6 pl-5">Appliances</th>
                                            <th className="py-4 pr-6 pl-5">Status</th>
                                            <th className="py-4 pr-6 pl-5">Power of Appliances</th>
                                            <th className="py-4 pr-6 pl-5"> No of Appliances</th>
                                            <th className="py-4 pr-6 pl-5"> Operational Hours</th>
                                            <th className="py-4 pr-6 pl-5">Total Energy</th>
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
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">Tubelight</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <div className={styles.toggle}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isTubelightOn}
                                                        onChange={handleTubelighToggle}
                                                    />
                                                    <label htmlFor="switch">Toggle</label>
                                                </div>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        defaultValue={40}
                                                        disabled={!isTubelightOn}
                                                        onChange={handleTubelightWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTubelightOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={tubelightSelectedLoads}
                                                        disabled={!isTubelightOn}
                                                        onChange={handleTubelightLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTubelightOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={tubelightSelectedConsumptionTime}
                                                        disabled={!isTubelightOn}
                                                        onChange={handleTubelightConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTubelightOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input
                                                        name="watt"
                                                        id="watt"
                                                        value={tubeLightTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTubelightOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* CFL */}

                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">CFL</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isCFLOn}
                                                        onChange={handleCFLToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={30}
                                                        disabled={!isCFLOn}
                                                        onChange={handleCFLWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCFLOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>

                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={cflSelectedLoads}
                                                        disabled={!isCFLOn}
                                                        onChange={handleCFLLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCFLOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>

                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={cflSelectedConsumptionTime}
                                                        disabled={!isCFLOn}
                                                        onChange={handleCFLConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCFLOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={cflTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCFLOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>
                                            </td>
                                        </tr>

                                        {/* LED  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">LED</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isLEDOn}
                                                        onChange={handleLEDToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={9}
                                                        disabled={!isCFLOn}
                                                        onChange={handleLEDWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLEDOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>

                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={LEDselectedLoads}
                                                        disabled={!isLEDOn}
                                                        onChange={handleLEDLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLEDOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>

                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={LEDSelectedConsumptionTime}
                                                        disabled={!isLEDOn}
                                                        onChange={handleLEDConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLEDOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" 
                                                      id="watt"
                                                      value={LEDTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLEDOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>
                                            </td>
                                        </tr>
                                        {/* Incandescent Bulb */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Incandescent Bulb</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isBulbOn}
                                                        onChange={handlebulbToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={60}
                                                        disabled={!isBulbOn}
                                                        onChange={handleBulbWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBulbOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>

                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={bulbSelectedLoads}
                                                        disabled={!isBulbOn}
                                                        onChange={handleBulbLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBulbOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>

                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={bulbSelectedConsumptionTime}
                                                        disabled={!isBulbOn}
                                                        onChange={handleBulbConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBulbOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={bulbTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBulbOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />


                                                </Select>
                                            </td>
                                        </tr>
                                        {/* Ceiling Fan */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Ceiling Fan</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isCeilingFanOn}
                                                        onChange={handleCeilingFanToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={75}
                                                        disabled={!isCeilingFanOn}
                                                        onChange={handleCeilingFanWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCeilingFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={ceilingFanSelectedLoads}
                                                        disabled={!isCeilingFanOn}
                                                        onChange={handleCeilingFanLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCeilingFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={ceilingFanSelectedConsumptionTime}
                                                        disabled={!isCeilingFanOn}
                                                        onChange={handleCeilingFanConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCeilingFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={ceilingFantotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCeilingFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Table Fan */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Table Fan</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isTableFanOn}
                                                        onChange={handleTableFanToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={50}
                                                        disabled={!isTableFanOn}
                                                        onChange={handleTableFanWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTableFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={tableFanSelectedLoads}
                                                        disabled={!isTableFanOn}
                                                        onChange={handleTableFanLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTableFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={tableFanSelectedConsumptionTime}
                                                        disabled={!isTableFanOn}
                                                        onChange={handleTableFanConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTableFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={tableFantotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTableFanOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Room cooler */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Room Cooler</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isRoomCoolerOn}
                                                        onChange={handleRoomCoolerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td>
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={250}
                                                        disabled={!isRoomCoolerOn}
                                                        onChange={handleRoomCoolerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRoomCoolerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={roomCoolerSelectedLoads}
                                                        disabled={!isRoomCoolerOn}
                                                        onChange={handleRoomCoolerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRoomCoolerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={roomCoolerSelectedConsumptionTime}
                                                        disabled={!isRoomCoolerOn}
                                                        onChange={handleRoomCoolerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRoomCoolerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={roomCoolerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRoomCoolerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Refigerator */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Refigerator</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isRefigeratorOn}
                                                        onChange={handleRefigeratorToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={250}
                                                        disabled={!isRefigeratorOn}
                                                        onChange={handleRefigeratorWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRefigeratorOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={refigeratorSelectedLoads}
                                                        disabled={!isRefigeratorOn}
                                                        onChange={handleRefigeratorLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRefigeratorOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={refigeratorSelectedConsumptionTime}
                                                        disabled={!isRefigeratorOn}
                                                        onChange={handleRefigeratorConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRefigeratorOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={refigeratorTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isRefigeratorOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* TV*/}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">TV</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isTvOn}
                                                        onChange={handleTvToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={100}
                                                        disabled={!isTvOn}
                                                        onChange={handleTvWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTvOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={tvSelectedLoads}
                                                        disabled={!isTvOn}
                                                        onChange={handleTvLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTvOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={tvSelectedConsumptionTime}
                                                        disabled={!isTvOn}
                                                        onChange={handleTvConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTvOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={tvTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isTvOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Laptop  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Laptop</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isLaptopOn}
                                                        onChange={handleLaptopToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={100}
                                                        disabled={!isLaptopOn}
                                                        onChange={handleLaptopWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLaptopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={laptopSelectedLoads}
                                                        disabled={!isLaptopOn}
                                                        onChange={handleLaptopLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLaptopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={laptopSelectedConsumptionTime}
                                                        disabled={!isLaptopOn}
                                                        onChange={handleLaptopConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLaptopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={laptopTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isLaptopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>
                                        {/* Computer  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Computer</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isComputerOn}
                                                        onChange={handleComputerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={200}
                                                        disabled={!isComputerOn}
                                                        onChange={handleComputerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isComputerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={computerSelectedLoads}
                                                        disabled={!isComputerOn}
                                                        onChange={handleComputerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isComputerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={computerSelectedConsumptionTime}
                                                        disabled={!isComputerOn}
                                                        onChange={handleComputerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isComputerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={computerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isComputerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>
                                        {/* Printer Small  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Printer Small</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isPrinterSmallOn}
                                                        onChange={handlePrinterSmallToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={200}
                                                        disabled={!isPrinterSmallOn}
                                                        onChange={handlePrinterSmallWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPrinterSmallOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={printerSmallSelectedLoads}
                                                        disabled={!isPrinterSmallOn}
                                                        onChange={handlePrinterSmallLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPrinterSmallOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={printerSmallSelectedConsumptionTime}
                                                        disabled={!isPrinterSmallOn}
                                                        onChange={handlePrinterSmallConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPrinterSmallOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={printerSmallTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPrinterSmallOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Microwave  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Microwave</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isMicroWaveOn}
                                                        onChange={handleMicroWaveToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1400}
                                                        disabled={!isMicroWaveOn}
                                                        onChange={handleMicroWaveWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isMicroWaveOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={microWaveSelectedLoads}
                                                        disabled={!isMicroWaveOn}
                                                        onChange={handleMicroWaveLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isMicroWaveOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={microWaveSelectedConsumptionTime}
                                                        disabled={!isMicroWaveOn}
                                                        onChange={handleMicroWaveConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isMicroWaveOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={microWaveTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isMicroWaveOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Juicer Mixer Grinder  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Juicer Mixer Grinder</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isJuicerMixerOn}
                                                        onChange={handleJuicerMixerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={800}
                                                        disabled={!isJuicerMixerOn}
                                                        onChange={handleJuicerMixerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isJuicerMixerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={juicerMixerSelectedLoads}
                                                        disabled={!isJuicerMixerOn}
                                                        onChange={handleJuicerMixerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isJuicerMixerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={juicerMixerSelectedConsumptionTime}
                                                        disabled={!isJuicerMixerOn}
                                                        onChange={handleJuicerMixerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isJuicerMixerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={juicerMixerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isJuicerMixerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Toaster  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Toaster</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isToasterOn}
                                                        onChange={handleToasterToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={800}
                                                        disabled={!isToasterOn}
                                                        onChange={handleToasterWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isToasterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={toasterSelectedLoads}
                                                        disabled={!isToasterOn}
                                                        onChange={handleToasterLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isToasterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={toasterSelectedConsumptionTime}
                                                        disabled={!isToasterOn}
                                                        onChange={handleToasterConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isToasterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={toasterTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isToasterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Geyser   */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Geyser</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isGeyserOn}
                                                        onChange={handleGeyserToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={2200}
                                                        disabled={!isGeyserOn}
                                                        onChange={handleGeyserWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isGeyserOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={geyserSelectedLoads}
                                                        disabled={!isGeyserOn}
                                                        onChange={handleGeyserLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isGeyserOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={geyserSelectedConsumptionTime}
                                                        disabled={!isGeyserOn}
                                                        onChange={handleGeyserConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isGeyserOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={geyserTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isGeyserOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* AC 1 ton   */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">AC 1 ton</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isAc1TonOn}
                                                        onChange={handleAc1TonToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1200}
                                                        disabled={!isAc1TonOn}
                                                        onChange={handleAc1TonWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc1TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={ac1TonSelectedLoads}
                                                        disabled={!isAc1TonOn}
                                                        onChange={handleAc1TonLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc1TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={ac1TonSelectedConsumptionTime}
                                                        disabled={!isAc1TonOn}
                                                        onChange={handleAc1TonConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc1TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={ac1TonTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc1TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* AC 1.5 Ton   */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">AC 1.5 Ton</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isAc15TonOn}
                                                        onChange={handleAc15TonToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1700}
                                                        disabled={!isAc15TonOn}
                                                        onChange={handleAc15TonWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc15TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={ac15TonSelectedLoads}
                                                        disabled={!isAc15TonOn}
                                                        onChange={handleAc15TonLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc15TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={ac15TonSelectedConsumptionTime}
                                                        disabled={!isAc15TonOn}
                                                        onChange={handleAc15TonConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc15TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={ac15TonTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc15TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* AC 2 Ton   */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">AC 2 Ton</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isAc2TonOn}
                                                        onChange={handleAc2TonToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={2300}
                                                        disabled={!isAc2TonOn}
                                                        onChange={handleAc2TonWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc2TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={ac2TonSelectedLoads}
                                                        disabled={!isAc2TonOn}
                                                        onChange={handleAc2TonLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc2TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={ac2TonSelectedConsumptionTime}
                                                        disabled={!isAc2TonOn}
                                                        onChange={handleAc2TonConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc2TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={ac2TonTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAc2TonOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Washing Machine   */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Washing Machine</td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isWashingMachineOn}
                                                        onChange={handleWashingMachineToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1000}
                                                        disabled={!isWashingMachineOn}
                                                        onChange={handleWashingMachineWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWashingMachineOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={washingMachineSelectedLoads}
                                                        disabled={!isWashingMachineOn}
                                                        onChange={handleWashingMachineLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWashingMachineOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={washingMachineSelectedConsumptionTime}
                                                        disabled={!isWashingMachineOn}
                                                        onChange={handleWashingMachineConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWashingMachineOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={washingMachineTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWashingMachineOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Iron   */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Iron
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isIronOn}
                                                        onChange={handleIronToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1200}
                                                        disabled={!isIronOn}
                                                        onChange={handleIronWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isIronOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={ironSelectedLoads}
                                                        disabled={!isIronOn}
                                                        onChange={handleIronLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isIronOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={ironSelectedConsumptionTime}
                                                        disabled={!isIronOn}
                                                        onChange={handleIronConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isIronOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={ironTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isIronOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Vaccum Cleaner */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Vaccum Cleaner
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isVaccumCleanerOn}
                                                        onChange={handleVaccumCleanerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1400}
                                                        disabled={!isVaccumCleanerOn}
                                                        onChange={handleVaccumCleanerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isVaccumCleanerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={vaccumCleanerSelectedLoads}
                                                        disabled={!isVaccumCleanerOn}
                                                        onChange={handleVaccumCleanerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isVaccumCleanerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={vaccumCleanerSelectedConsumptionTime}
                                                        disabled={!isVaccumCleanerOn}
                                                        onChange={handleVaccumCleanerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isVaccumCleanerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={vaccumCleanerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isVaccumCleanerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Exhaust Fans  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Exhaust Fans
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isExhaustFansOn}
                                                        onChange={handleExhaustFansToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={40}
                                                        disabled={!isExhaustFansOn}
                                                        onChange={handleExhaustFansWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isExhaustFansOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={exhaustFansSelectedLoads}
                                                        disabled={!isExhaustFansOn}
                                                        onChange={handleExhaustFansLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isExhaustFansOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={exhaustFansSelectedConsumptionTime}
                                                        disabled={!isExhaustFansOn}
                                                        onChange={handleExhaustFansConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isExhaustFansOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={exhaustFansTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isExhaustFansOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Phone Charger */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Phone Charger
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isPhoneChargerOn}
                                                        onChange={handlePhoneChargerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={40}
                                                        disabled={!isPhoneChargerOn}
                                                        onChange={handlePhoneChargerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPhoneChargerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={phoneChargerSelectedLoads}
                                                        disabled={!isPhoneChargerOn}
                                                        onChange={handlePhoneChargerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPhoneChargerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={phoneChargerSelectedConsumptionTime}
                                                        disabled={!isPhoneChargerOn}
                                                        onChange={handlePhoneChargerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPhoneChargerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={phoneChargerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isPhoneChargerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Set Top Box */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Set Top Box
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isSetTopBoxOn}
                                                        onChange={handleSetTopBoxToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={40}
                                                        disabled={!isSetTopBoxOn}
                                                        onChange={handleSetTopBoxWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSetTopBoxOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={setTopBoxSelectedLoads}
                                                        disabled={!isSetTopBoxOn}
                                                        onChange={handleSetTopBoxLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSetTopBoxOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={setTopBoxSelectedConsumptionTime}
                                                        disabled={!isSetTopBoxOn}
                                                        onChange={handleSetTopBoxConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSetTopBoxOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={setTopBoxTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSetTopBoxOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Wifi Router */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Wifi Router
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isWifiRouterOn}
                                                        onChange={handleWifiRouterToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={20}
                                                        disabled={!isWifiRouterOn}
                                                        onChange={handleWifiRouterWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWifiRouterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={wifiRouterSelectedLoads}
                                                        disabled={!isWifiRouterOn}
                                                        onChange={handleWifiRouterLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWifiRouterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={wifiRouterSelectedConsumptionTime}
                                                        disabled={!isWifiRouterOn}
                                                        onChange={handleWifiRouterConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWifiRouterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={wifiRouterTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWifiRouterOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Water Purifier */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Water Purifier
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isWaterPurifierOn}
                                                        onChange={handleWaterPurifierToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={90}
                                                        disabled={!isWaterPurifierOn}
                                                        onChange={handleWaterPurifierWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWaterPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={waterPurifierSelectedLoads}
                                                        disabled={!isWaterPurifierOn}
                                                        onChange={handleWaterPurifierLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWaterPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={waterPurifierSelectedConsumptionTime}
                                                        disabled={!isWaterPurifierOn}
                                                        onChange={handleWaterPurifierConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWaterPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={waterPurifierTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isWaterPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Air Purifier */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Air Purifier
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isAirPurifierOn}
                                                        onChange={handleAirPurifierToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={215}
                                                        disabled={!isAirPurifierOn}
                                                        onChange={handleAirPurifierWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAirPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={airPurifierSelectedLoads}
                                                        disabled={!isAirPurifierOn}
                                                        onChange={handleAirPurifierLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAirPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={airPurifierSelectedConsumptionTime}
                                                        disabled={!isAirPurifierOn}
                                                        onChange={handleAirPurifierConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAirPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={airPurifierTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isAirPurifierOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Hair Appliance */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Hair Appliance
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isHairApplianceOn}
                                                        onChange={handleHairApplianceToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1600}
                                                        disabled={!isHairApplianceOn}
                                                        onChange={handleHairApplianceWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isHairApplianceOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={hairApplianceSelectedLoads}
                                                        disabled={!isHairApplianceOn}
                                                        onChange={handleHairApplianceLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isHairApplianceOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={hairApplianceSelectedConsumptionTime}
                                                        disabled={!isHairApplianceOn}
                                                        onChange={handleHairApplianceConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isHairApplianceOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={hairApplianceTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isHairApplianceOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Dish Washer */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Dish Washer
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isDishWasherOn}
                                                        onChange={handleDishWasherToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1800}
                                                        disabled={!isDishWasherOn}
                                                        onChange={handleDishWasherWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isDishWasherOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={dishWasherSelectedLoads}
                                                        disabled={!isDishWasherOn}
                                                        onChange={handleDishWasherLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isDishWasherOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={dishWasherSelectedConsumptionTime}
                                                        disabled={!isDishWasherOn}
                                                        onChange={handleDishWasherConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isDishWasherOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={dishWasherTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isDishWasherOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Induction Cooktop  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Induction Cooktop
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isInductionCooktopOn}
                                                        onChange={handleInductionCooktopToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={2500}
                                                        disabled={!isInductionCooktopOn}
                                                        onChange={handleInductionCooktopWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isInductionCooktopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={inductionCooktopSelectedLoads}
                                                        disabled={!isInductionCooktopOn}
                                                        onChange={handleInductionCooktopLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isInductionCooktopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={inductionCooktopSelectedConsumptionTime}
                                                        disabled={!isInductionCooktopOn}
                                                        onChange={handleInductionCooktopConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isInductionCooktopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={inductionCooktopTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isInductionCooktopOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Speaker */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Speaker
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isSpeakerOn}
                                                        onChange={handleSpeakerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={80}
                                                        disabled={!isSpeakerOn}
                                                        onChange={handleSpeakerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSpeakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={speakerSelectedLoads}
                                                        disabled={!isSpeakerOn}
                                                        onChange={handleSpeakerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSpeakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={speakerSelectedConsumptionTime}
                                                        disabled={!isSpeakerOn}
                                                        onChange={handleSpeakerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSpeakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={speakerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isSpeakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Coffee Maker */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Coffee Maker
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isCoffeeMakerOn}
                                                        onChange={handleCoffeeMakerToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1300}
                                                        disabled={!isCoffeeMakerOn}
                                                        onChange={handleCoffeeMakerWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCoffeeMakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={coffeeMakerSelectedLoads}
                                                        disabled={!isCoffeeMakerOn}
                                                        onChange={handleCoffeeMakerLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCoffeeMakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={coffeeMakerSelectedConsumptionTime}
                                                        disabled={!isCoffeeMakerOn}
                                                        onChange={handleCoffeeMakerConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCoffeeMakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={coffeeMakerTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCoffeeMakerOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* CCTV Camera */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">CCTV Camera
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isCCTVCameraOn}
                                                        onChange={handleCCTVCameraToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={100}
                                                        disabled={!isCCTVCameraOn}
                                                        onChange={handleCCTVCameraWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCCTVCameraOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={cctvCameraSelectedLoads}
                                                        disabled={!isCCTVCameraOn}
                                                        onChange={handleCCTVCameraLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCCTVCameraOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={cctvCameraSelectedConsumptionTime}
                                                        disabled={!isCCTVCameraOn}
                                                        onChange={handleCCTVCameraConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCCTVCameraOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={cctvCameraTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isCCTVCameraOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Blender */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Blender
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isBlenderOn}
                                                        onChange={handleBlenderToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={420}
                                                        disabled={!isBlenderOn}
                                                        onChange={handleBlenderWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBlenderOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={blenderSelectedLoads}
                                                        disabled={!isBlenderOn}
                                                        onChange={handleBlenderLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBlenderOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={blenderSelectedConsumptionTime}
                                                        disabled={!isBlenderOn}
                                                        onChange={handleBlenderConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBlenderOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={blenderTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isBlenderOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                        {/* Kettle  */}
                                        <tr className='odd:bg-[#EBEBEB] even:bg-[#F8F6F6]'>
                                            <td className="pr-6 pl-5 py-6 whitespace-nowrap font-semibold">Kettle
                                            </td>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">
                                                <label className={styles.toggleSwitch}>
                                                    <input type="checkbox" id="switch"
                                                        checked={isKettleOn}
                                                        onChange={handleKettleToggle}
                                                    />
                                                    <span className={styles.toggleSwitchSlider}></span>
                                                </label>
                                            </td>
                                            <td >
                                                {/* <AirConWatt /> */}
                                                <Select>
                                                    <input name="watt"
                                                        id="watt"
                                                        value={1200}
                                                        disabled={!isKettleOn}
                                                        onChange={handleKettleWattageSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isKettleOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/*<AirconNo Of loads / > */}
                                            <td>
                                                <Select>
                                                    <input name="loads" id="loads" value={kettleSelectedLoads}
                                                        disabled={!isKettleOn}
                                                        onChange={handleKettleLoadsSelect}
                                                        className={`w-16 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isKettleOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            {/* <AirConsumption /> */}
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt" value={kettleSelectedConsumptionTime}
                                                        disabled={!isKettleOn}
                                                        onChange={handleKettleConsumptionTimeSelect}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isKettleOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                            <td>
                                                <Select>
                                                    <input name="watt" id="watt"
                                                    value={kettleTotal}
                                                        className={`w-24 p-1 ml-4 text-white h-8 outline-none rounded-md flex justify-center items-center text-xl text-rgbaHeader select${isKettleOn ? ' bg-lightGreen' : ' bg-lightGreen opacity-50'}`}
                                                    />
                                                </Select>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table >
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
                        tubePercentage={tubeLightTotal}
                        cflPercentage={cflTotal}
                        LEDPercentage={LEDTotal}
                        bulbPercentage={bulbTotal}
                        ceilingFanPercentage={ceilingFantotal}
                        tableFanPercentage={tableFantotal}
                        roomCoolerPercentage={roomCoolerTotal}
                        regrigeratorPercentage={refigeratorTotal}
                        tvPercentage={tvTotal}
                        laptopPercentage={laptopTotal}
                        computerPercentage={computerTotal}
                        printerSmallPercentage={printerSmallTotal}
                        microWavePercentage={microWaveTotal}
                        juicerMixerPercentage={juicerMixerTotal}
                        toasterPercentage={toasterTotal}
                        geyserPercentage={geyserTotal}
                        ac1TonPercentage={ac1TonTotal}
                        ac15TonPercentage={ac15TonTotal}
                        ac2TonPercentage={ac2TonTotal}
                        washingMachinePercentage={washingMachineTotal}
                        ironPercentage={ironTotal}
                        vaccumCleanerPercentage={vaccumCleanerTotal}
                        exhaustFansPercentage={exhaustFansTotal}
                        phoneChargerPercentage={phoneChargerTotal}
                        setTopBoxPercentage={setTopBoxTotal}
                        wifiRouterPercentage={wifiRouterTotal}
                        waterPurifierPercentage={waterPurifierTotal}
                        airPurifierPercentage={airPurifierTotal}
                        hairAppliancePercentage={hairApplianceTotal}
                        dishWasherPercentage={dishWasherTotal}
                        inductionCooktopPercentage={inductionCooktopTotal}
                        speakerPercentage={speakerTotal}
                        coffeeMakerPercentage={coffeeMakerTotal}
                        cctvCameraPercentage={cctvCameraTotal}
                        blenderPercentage={blenderTotal}
                        kettlePercentage={kettleTotal}
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
