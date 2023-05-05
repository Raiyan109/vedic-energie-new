import Assumptions from "../components/Assumptions";
import Consumption from "../components/Consumption";
import AirConsumption from "../components/Consumptions/AirConsumption";
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
                consumption: <AirConsumption />,
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


// Watts
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


// Consumption times
export const AirConsTimes = [
    { "range": 2 },
    { "range": 3 },
    { "range": 4 },
    { "range": 5 },
    { "range": 6 },
    { "range": 7 },
    { "range": 8 },
    { "range": 9 },
    { "range": 10 },
    { "range": 11 },
    { "range": 12 },
    { "range": 13 },
    { "range": 14 },
    { "range": 15 },
    { "range": 16 }
];

export const perCapitaEnergyConsumptionData = [
    {
        "name": "ANDAMAN & NICOBAR ISLANDS", "data": 367.3948635
    },
    { "name": "TELANGANA", "data": 367.3948635 },
    {
        "name": "ANDHRA PRADESH", "data": 328.8017687
    },
    {
        "name": "ARUNACHAL PRADESH", "data": 120.9100817
    },
    {
        "name": "ASSAM", "data": 105.9831799
    },
    {
        "name": "BIHAR", "data": 118.696485
    },
    {
        "name": "CHANDIGARH", "data": 564.5855402
    },
    {
        "name": "Chattisgarh", "data": 213.6288618
    },
    {
        "name": "DADRA & NAGAR HAVELI", "data": 227.6468725
    },
    {
        "name": "DAMAN & DIU", "data": 227.6468725
    },
    {
        "name": "Delhi", "data": 769.6764012

    },
    {
        "name": "GOA", "data": 803.6070406
    },
    {
        "name": "GUJARAT", "data": 230.8895989
    },
    {
        "name": "HARYANA", "data": 396.2473579
    },
    {
        "name": "HIMACHAL PRADESH", "data": 315.5510177
    },
    {
        "name": "JAMMU & KASHMIR", "data": 351.5578652
    },
    {
        "name": "JHARKHAND", "data": 164.0695139
    },
    {
        "name": "KARNATAKA", "data": 231.4683404
    },
    {
        "name": "KERALA", "data": 356.8132333
    },
    {
        "name": "Lakshadweep", "data": 584.7475217

    },
    {
        "name": "Madhya Pradesh", "data": 193.9362348
    },
    {
        "name": "Maharashtra", "data": 238.8970754
    },
    {
        "name": "Manipur", "data": 133.1151101
    },
    {
        "name": "Meghalaya", "data": 149.3007878
    },
    {
        "name": "Mizoram", "data": 223.1352359
    },
    {
        "name": "Nagaland", "data": 174.6663681
    },
    {
        "name": "Odisha", "data": 181.9562597
    },
    {
        "name": "Puducherry", "data": 511.8043742
    },
    {
        "name": "Punjab", "data": 498.6657989
    },
    {
        "name": "Rajasthan", "data": 175.969487
    },
    {
        "name": "Sikkim", "data": 167.4600871
    },
    {
        "name": "Tamil Nadu", "data": 425.7338017
    },
    {
        "name": "Telengana", "data": 336.2290976
    },
    {
        "name": "Tripura", "data": 141.8425359
    },
    {
        "name": "Uttar Pradesh", "data": 186.49766
    },
    {
        "name": "Uttarkhand", "data": 275.6128816
    },
    {
        "name": "West Bengal", "data": 176.9817362
    },
]