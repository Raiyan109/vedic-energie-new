import Assumptions from "../components/Assumptions";
import Consumption from "../components/Consumption";
import AirConsumption from "../components/Consumptions/GeyserConsumption";
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
        switches: [0, 2, 4, 6], // switches 1, 3, 5, and 7 will be off
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
        switches: [1, 3, 5, 7], // switches 0, 2, 4, and 6 will be off
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
    { "range": 0.1666666667, "name": '10 Minutes' },
    { "range": 2, "name": '2 Hours' },
    { "range": 3, "name": '3 Hours' },
    { "range": 4, "name": '4 Hours' },
    { "range": 5, "name": '5 Hours' },
    { "range": 6, "name": '6 Hours' },
    { "range": 7, "name": '7 Hours' },
    { "range": 8, "name": '8 Hours' },
    { "range": 9, "name": '9 Hours' },
    { "range": 10, "name": '10 Hours' },
    { "range": 11, "name": '11 Hours' },
    { "range": 12, "name": '12 Hours' },
    { "range": 13, "name": '13 Hours' },
    { "range": 14, "name": '14 Hours' },
    { "range": 15, "name": '15 Hours' },
    { "range": 16, "name": '16 Hours' }
];

export const GeyserConsTimes = [
    {
        "range": 0.08333333333,
        "name": "5 Minutes"
    },
    {
        "range": 0.1666666667,
        "name": "10 Minutes"
    },
    {
        "range": 0.25,
        "name": "15 Minutes"
    },
    {
        "range": 0.33333333333,
        "name": "20 Minutes"
    },
    {
        "range": 0.41666666666,
        "name": "25 Minutes"
    },
    {
        "range": 0.5,
        "name": "30 Minutes"
    },
    {
        "range": 0.58333333333,
        "name": "35 Minutes"
    },
    {
        "range": 0.66666666666,
        "name": "40 Minutes"
    },
    {
        "range": 0.75,
        "name": "45 Minutes"
    },
    {
        "range": 0.83333333333,
        "name": "50 Minutes"
    },
    {
        "range": 0.91666666666,
        "name": "55 Minutes"
    },
    {
        "range": 1,
        "name": "1 Hour"
    },
]

export const MicrowaveConsTimes = [
    {
        "range": 0.08333333333,
        "name": "5 Minutes"
    },
    {
        "range": 0.1666666667,
        "name": "10 Minutes"
    },
    {
        "range": 0.25,
        "name": "15 Minutes"
    },
    {
        "range": 0.33333333333,
        "name": "20 Minutes"
    },
    {
        "range": 0.41666666666,
        "name": "25 Minutes"
    },
    {
        "range": 0.5,
        "name": "30 Minutes"
    },
    {
        "range": 0.58333333333,
        "name": "35 Minutes"
    },
    {
        "range": 0.66666666666,
        "name": "40 Minutes"
    },
    {
        "range": 0.75,
        "name": "45 Minutes"
    },
    {
        "range": 0.83333333333,
        "name": "50 Minutes"
    },
    {
        "range": 0.91666666666,
        "name": "55 Minutes"
    },
    {
        "range": 1,
        "name": "1 Hour"
    },
]

export const WashingMachineConsTimes = [
    {
        "range": 0.1666666667,
        "name": "10 Minutes"
    },
    {
        "range": 0.25,
        "name": "15 Minutes"
    },
    {
        "range": 0.33333333333,
        "name": "20 Minutes"
    },
    {
        "range": 0.41666666666,
        "name": "25 Minutes"
    },
    {
        "range": 0.5,
        "name": "30 Minutes"
    },
    {
        "range": 0.58333333333,
        "name": "35 Minutes"
    },
    {
        "range": 0.66666666666,
        "name": "40 Minutes"
    },
    {
        "range": 0.75,
        "name": "45 Minutes"
    },
    {
        "range": 0.83333333333,
        "name": "50 Minutes"
    },
    {
        "range": 0.91666666666,
        "name": "55 Minutes"
    },
    {
        "range": 1,
        "name": "1 Hour"
    },
    {
        "range": 1,
        "name": "1 hour 5 min"
    },
    {
        "range": 1,
        "name": "1 Hour 10 min"
    },
    {
        "range": 1,
        "name": "1 Hour 15 min"
    },
    {
        "range": 1,
        "name": "1 Hour 20 min"
    },
    {
        "range": 1,
        "name": "1 Hour 25 min"
    },
    {
        "range": 1,
        "name": "1 Hour 30 min"
    },
    {
        "range": 1,
        "name": "1 Hour 35 min"
    },
    {
        "range": 1,
        "name": "1 Hour 40 min"
    },
    {
        "range": 1,
        "name": "1 Hour 45 min"
    },
    {
        "range": 1,
        "name": "1 Hour 50 min"
    },
    {
        "range": 1,
        "name": "1 Hour 55 min"
    },
    {
        "range": 1,
        "name": "2 Hour"
    },
    {
        "range": 1,
        "name": "2 Hour 5 min"
    },
    {
        "range": 1,
        "name": "2 Hour 10 min"
    },
    {
        "range": 1,
        "name": "2 Hour 15 min"
    },
    {
        "range": 1,
        "name": "2 Hour 20 min"
    },
    {
        "range": 1,
        "name": "2 Hour 25 min"
    },
    {
        "range": 1,
        "name": "2 Hour 30 min"
    },
]

export const FridgeConsTimes = [
    { "range": 12, "name": '12 Hours' },
    { "range": 13, "name": '13 Hours' },
    { "range": 14, "name": '14 Hours' },
    { "range": 15, "name": '15 Hours' },
    { "range": 16, "name": '16 Hours' },
    { "range": 17, "name": '17 Hours' },
    { "range": 18, "name": '18 Hours' },
    { "range": 19, "name": '19 Hours' },
    { "range": 20, "name": '20 Hours' },
    { "range": 21, "name": '21 Hours' },
    { "range": 22, "name": '22 Hours' },
    { "range": 23, "name": '23 Hours' },
    { "range": 24, "name": '24 Hours' }
]

export const LightConsTimes = [
    { "range": 1, "name": '1 Hours' },
    { "range": 2, "name": '2 Hours' },
    { "range": 3, "name": '3 Hours' },
    { "range": 4, "name": '4 Hours' },
    { "range": 5, "name": '5 Hours' },
    { "range": 6, "name": '6 Hours' },
    { "range": 7, "name": '7 Hours' },
    { "range": 8, "name": '8 Hours' },
    { "range": 9, "name": '9 Hours' },
    { "range": 10, "name": '10 Hours' },
    { "range": 11, "name": '11 Hours' },
    { "range": 12, "name": '12 Hours' },
    { "range": 13, "name": '13 Hours' },
    { "range": 14, "name": '14 Hours' },
    { "range": 15, "name": '15 Hours' },
    { "range": 16, "name": '16 Hours' },
]

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