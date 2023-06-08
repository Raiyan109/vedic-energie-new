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


export const Category1 = [
    { "id": 1, "item": 'Using LED light bulbs in homes and buildings is only one of many ways to reduce energy costs and CO2 emissions, and achieve substantial reductions in electricity bills.' },

    { "id": 2, "item": 'Utilize natural light by using electronic chokes and regulators.' },
    { "id": 3, "item": 'Use of light-colored, loose weave curtains on windows to allow daylight and also decorate with lighter colors that reflected daylight. ' },
    { "id": 4, "item": 'Use of task-lighting, i.e. focus the light where you need it.' },
    { "id": 5, "item": 'Installing exhaust fans at higher elevation than ceiling fans.' },
    { "id": 6, "item": 'Start using solar water heaters; the initial investments for upgrades typically pay for themselves through saved energy bills in just a few years.' },
    { "id": 7, "item": 'Install Insulation and timer in water heaters to reduce wastage of heat.' },
    { "id": 8, "item": 'Use cloth napkins and rags instead of paper towels in the kitchen.' },
    { "id": 9, "item": 'The so-called zero bulb uses 12 to 15-watt power, so do not keep it on overnight as a night bulb.' },
    { "id": 10, "item": 'Do not allow the refrigerator to frost. Whenever the frost gets more than 5mm thick, defrost the refrigerator. Defrosting the refrigerator 5-6 times a year can reduce power consumption drastically.' },
    { "id": 11, "item": 'Battery chargers such as those for cell phones, laptops, and digital cameras draw power whenever they are plugged in and are very inefficient to pull the plug and save electricity.' },
    { "id": 12, "item": 'Plant trees around your house. Planting trees and shrubs to shade AC units but not to block the airflow. A unit operating in the shade uses as much as 10% less electricity than the same operating in the sun.' },
    { "id": 13, "item": 'Set the thermostat of AC at 26 degree celsius for optimal cooling. Prefer AC having automatic temperature cut-off. And keeping regulators at a low cool position.' },
    { "id": 14, "item": 'During summer, keep the thermostat at high. The less difference between the indoor and outdoor temperatures, the lower will be the energy consumption.' },
    { "id": 15, "item": 'Clean AC filter every month.' },
    { "id": 16, "item": 'Roof-garden can reduce the load on AC.' },
]

export const Category2 = [
    { "id": 1, "item": 'Install motion sensors to avoid wastage of electricity.' },

    { "id": 2, "item": 'Replace old model appliances with new ones as they are more efficient.' },
    { "id": 3, "item": 'Check Energy Efficiency Ratio (EER) before purchasing an Air conditioner, and close the doors while using AC. turn off the AC half an hour before leaving the room. ' },
    { "id": 4, "item": 'Use of Star-rating app (linked to standards and labeling database). It will allow users to compare personalized energy saving devices across the same class and get real-time feedback from consumers so that they can make informed purchase decisions. ' },
    { "id": 5, "item": '5-star brushless DC (BLDC) motor ceiling fan - consumes an average of 32 watts, 36% less than AC induction motors ceiling fan. Energy performance of ceiling fans:', "img": 'https://i.ibb.co/pQf9cJg/category2img3.png' },
    { "id": 6, "item": 'UJALA programme LED bulbs by EESL (9 watt bulb with luminosity of 900 lumens ; cost - Rs. 80 per bulb)' },
    { "id": 7, "item": '5 star refrigerators consume 30-35% less energy compared to 3-star refrigerators. (example -180L direct cool refrigerator-  energy consumption range <138KWh/year for 5 star as compared to 172-215KWh/year for 3 star refrigerator). Energy performance of direct cool refrigerators:', "img": 'https://i.ibb.co/1b55FWf/category2img2.png', "text": 'Energy performance of frost-free refrigerators:', "img2": 'https://i.ibb.co/1b55FWf/category2img2.png', "text2": 'Installing a 5-star rated TV (32-inch LED with aspect ratio 0f 16:9) consumes 45-50% less electricity as compared to a 3-star rated TV.' },

]




export const Blogs = [
    {
        "id": 1,
        "image": 'https://i.ibb.co/zJ10N0G/greenwashing.png',
        "title": 'Green Washing',
        "date": "December, 2022",
        "body": "Throughout the generations of advancement and capitalism which has led to world of perceptions, the perceptions portrayed by giant multinational companies. The idea behind such perception is playing with the human behaviour, that to make it expensive and ‘seems’ like legit. The era of mass production with cutting edge technology has no doubt led to the growth of economics, but it also creates a vicious cycle of cutting down the cost so much so that quality of the product degrades further, harming not just the society but also the nature. For long, this process has been rampant and to the fact both MNC’s and the society realised the impact of such product. The society became sceptical about such products and MNC’s tricked us with their ‘too good to be true products,’ ‘sustainable and eco-friendly’ products."
    },
    {
        "id": 2,
        "image": 'https://i.ibb.co/cxVyJPP/food-1024x577.jpg',
        "title": 'Emissions from Food Industry',
        "date": "December, 2022",
        "body": "The food Industry is not just one of the largest industries but is very important too. As food is our daily requirement, but the Food Industry is causing hazards and harm to nature. The production of food articles involves the steps like growing, processing, packaging, storing, and transporting all these steps cause pollution to nature and contribute to greenhouse gases. Processes like cultivation results and the production of methane, nitrous oxide, carbon dioxide, and other gas which is caused by use of fertilizers, pesticides, and the cutting of forests. The very next step of the process is packaging which requires a lot of paper, aluminum, and other materials, the production of which is harmful to nature. The process does not end here, the transportation of food is also a threat to nature as it involves air pollution in the process of transportation."
    },
    {
        "id": 3,
        "image": 'https://i.ibb.co/vx9hSYs/sustain-report-1024x577.jpg',
        "title": 'Sustainability Reporting',
        "date": "December, 2022",
        "body": "Sustainability reporting is a disclosure of a company’s progress towards its Environment, Social and Economic (ESG) goals. This report includes the approach to mitigate the dangers or adapt to them, and the financial implications involved in this procedure. Sustainability reporting allows companies to reflect on the three parameters and report in a transparent manner their positive and negative consequences. Being a sort of social responsibility, it can strengthen both brand reputation and profits. Businesses cannot survive in the long run unless they operate in a lawful and socially responsible as well as sustainable manner. Businesses cannot survive in the long run unless they operate in a lawful and socially responsible as well as sustainable manner. Businesses cannot survive in the long run unless they operate."
    }
]


// https://i.ibb.co/1b55FWf/category2img2.png
// https://i.ibb.co/zr960SF/catagory2img1.png