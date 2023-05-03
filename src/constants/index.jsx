import Assumptions from "../components/Assumptions";
import Consumption from "../components/Consumption";
import CustomMachines from "../components/CustomMachines";
import SummerSwitch from "../components/SummerSwitch";
import Toggle from "../components/Toggle";
import AirConWattInput from "../components/WattInputs/AirConWattInput";
import FridgeInput from "../components/WattInputs/FridgeInput";
import GeyserInput from "../components/WattInputs/GeyserInput";
import LightsInput from "../components/WattInputs/LightsInput";
import MicroWaveInput from "../components/WattInputs/MicroWaveInput";
import WashingInput from "../components/WattInputs/WashingInput";
import WinterSwitch from "../components/WinterSwitch";

export const states = [
    { "name": "ANDAMAN & NICOBAR ISLANDS" },
    { "name": "TELANGANA" },
    { "name": "ANDHRA PRADESH" },
    { "name": "ARUNACHAL PRADESH" },
    { "name": "ASSAM" },
    { "name": "BIHAR" },
    { "name": "CHANDIGARH" },
    { "name": "DADRA & NAGAR HAVELI " },
    { "name": "DAMAN & DIU" },
    { "name": "GOA" },
    { "name": "GUJARAT" },
    { "name": "HARYANA" },
    { "name": "HIMACHAL PRADESH" },
    { "name": "JAMMU & KASHMIR" },
    { "name": "JHARKHAND" },
    { "name": "KARNATAKA" },
    { "name": "KERALA" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
    { "name": "LAKSHADWEEP" },
];
export const districts = [
    { "name": "SOUTH ANDAMAN" },
    { "name": "NICOBAR" },
    { "name": "NORTH AND MIDDLE ANDAMAN" },
    { "name": "HYDERABAD" },
    { "name": "MEDAK" },
    { "name": "NIZAMABAD" },
    { "name": "ADILABAD" },
    { "name": "KARIMNAGAR" },
    { "name": "WARANGAL" },
];
export const cities = [
    { "name": "Port Blair" },
    { "name": "Visakhapatnam" },
    { "name": "Vijayawada" },
    { "name": "Guntur" },
    { "name": "Nellore" },
    { "name": "Kurnool" },
    { "name": "Kakinada" },
    { "name": "Tirupati" },
    { "name": "Anantapur" },
    { "name": "Kadapa" },
];

export const tableItems = [
    {
        label: "Summer",
        title: "Machines",
        items: [
            {
                name: "Air Conditioner",
                status: <SummerSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Geyser",
                status: <WinterSwitch />,
                watt: <GeyserInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Washing Machine",
                status: <SummerSwitch />,
                watt: <WashingInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Microwave",
                status: <SummerSwitch />,
                watt: <MicroWaveInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Fridge",
                status: <SummerSwitch />,
                watt: <FridgeInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Lights",
                status: <SummerSwitch />,
                watt: <LightsInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
        ]
    },
    {
        label: "Winter",
        title: "Machines",
        items: [
            {
                name: "Air Conditioner",
                status: <SummerSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Geyser",
                status: <WinterSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Washing Machine",
                status: <SummerSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Microwave",
                status: <SummerSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Fridge",
                status: <SummerSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
            {
                name: "Lights",
                status: <SummerSwitch />,
                watt: <AirConWattInput />,
                consumption: <Consumption />,
                assumptions: <Assumptions />
            },
        ]
    }
];

export const customTableItems = [
    // {
    //     items: [
    //         {
    //             name: <CustomMachines />,
    //             status: <SummerSwitch />
    //         }
    //     ]
    // },
    { "name": <CustomMachines />, "status": <SummerSwitch /> }
];

export const customMachines = [
    { "name": "Heater" },
    { "name": "Cooler" },
    { "name": "Heater" },
    { "name": "Fans" },
];

export const AirConWattRanges = [
    { "range": 1000 },
    { "range": 1500 },
    { "range": 2000 },
    { "range": 2500 },
];
export const GeyserWattRanges = [
    { "range": 1000 },
    { "range": 1500 },
    { "range": 2000 },
    { "range": 2500 },
];
export const WashingWattRanges = [
    { "range": 400 },
    { "range": 3000 }
];
export const MicroWaveWattRanges = [
    { "range": 600 },
    { "range": 1200 },
    { "range": 3000 }
];
export const FridgeWattRanges = [
    { "range": 100 },
    { "range": 250 }
];
export const LightsWattRanges = [
    { "range": 7 },
    { "range": 23 }
];