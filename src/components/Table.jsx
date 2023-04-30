import React from 'react';
import { useState } from "react"
import { tableItems } from '../constants';

const Table = () => {
    const [selectedItem, setSelectedItem] = useState(0)
    const labelColors = {
        "Air Conditioner": {
            color: "text-blue bg-gray",
        },
        "Geyser": {
            color: "text-blue bg-lightGray",
        },
        "Washing Machine": {
            color: "text-blue bg-gray",
        },
        "Microwave": {
            color: "text-blue bg-lightGray",
        },
        "Fridge": {
            color: "text-blue bg-gray",
        },
        "Lights": {
            color: "text-blue bg-lightGray",
        },
    }
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">

                <div className="text-sm mt-12 overflow-x-auto">
                    <ul rol="tablist" className="w-full border-b flex items-center justify-center gap-x-3 overflow-x-auto">
                        {
                            tableItems.map((item, idx) => (
                                <li key={idx} className={`py-2 border-b-2 rounded-md w-44 text-center mb-10 ${selectedItem == idx ? "border-indigo-600 text-[#F0EFFF] bg-blue" : "border-white text-blue bg-[#F0EFFF]"}`}>
                                    <button
                                        role="tab"
                                        aria-selected={selectedItem == idx ? true : false}
                                        aria-controls={`tabpanel-${idx + 1}`}
                                        className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                        onClick={() => setSelectedItem(idx)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <table className="w-full table-auto text-left">
                        <thead className="text-blue uppercase font-medium bg-lightYellow">
                            <tr>
                                <th className="py-4 pr-6 pl-2">{tableItems[selectedItem].title}</th>
                                <th className="py-4 pr-6">Status</th>
                                <th className="py-4 pr-6">Watts</th>
                                <th className="py-4 pr-6">CONSUMPTION TIME</th>
                                <th className="py-4 pr-6">ASSUMPTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-blue py-3">
                            {
                                tableItems[selectedItem].items.map((item, idx) => (
                                    <tr key={idx} className='odd:bg-gray even:bg-lightGray'>
                                        <td className="pr-6 pl-2 py-4 whitespace-nowrap">{item.name}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap text-indigo-600">{item.status}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">
                                            <span className={`py-2 px-3 rounded-full font-semibold text-xs ${labelColors[item?.watt]?.color || ""}`}>{item.watt}</span>
                                        </td>
                                        <td className="pr-6 py-4 whitespace-nowrap text-indigo-600">{item.consumption}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap text-indigo-600">{item.assumptions}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;