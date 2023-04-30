import SummerSwitch from "../components/SummerSwitch";
import Toggle from "../components/Toggle";
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
                impression: "Good"
            },
            {
                name: "Geyser",
                status: <WinterSwitch />,
                impression: "Normal"
            },
            {
                name: "Washing Machine",
                status: "399",
                impression: "Great"
            },
            {
                name: "Microwave",
                status: "678",
                impression: "Bad"
            },
            {
                name: "Fridge",
                status: "678",
                impression: "Bad"
            },
            {
                name: "Lights",
                status: "678",
                impression: "Bad"
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
                impression: "Good"
            },
            {
                name: "United state america",
                status: "408",
                impression: "Great"
            },
            {
                name: "France",
                status: "99",
                impression: "Bad"
            },
            {
                name: "Germany",
                status: "320",
                impression: "Normal"
            },
        ]
    }
]