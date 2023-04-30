import SummerSwitch from "../components/SummerSwitch";
import Toggle from "../components/Toggle";
import WattInput from "../components/WattInput";
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
                watt: <WattInput />
            },
            {
                name: "Geyser",
                status: <WinterSwitch />,
                watt: <WattInput />
            },
            {
                name: "Washing Machine",
                status: "399",
                watt: <WattInput />
            },
            {
                name: "Microwave",
                status: "678",
                watt: <WattInput />
            },
            {
                name: "Fridge",
                status: "678",
                watt: <WattInput />
            },
            {
                name: "Lights",
                status: "678",
                watt: <WattInput />
            },
        ]
    },
    {
        label: "Winter",
        title: "Top countries",
        items: [
            {
                name: "Mauritania",
                status: "203",
                watt: <WattInput />
            },
            {
                name: "United state america",
                status: "408",
                watt: <WattInput />
            },
            {
                name: "France",
                status: "99",
                watt: <WattInput />
            },
            {
                name: "Germany",
                status: "320",
                watt: <WattInput />
            },
        ]
    }
]