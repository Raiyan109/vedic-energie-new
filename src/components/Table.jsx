import React from 'react';
import { useState } from "react"
import { customTableItems, tableItems } from '../constants';
import AddButton from './AddButton';
import CalculateButton from './CalculateButton';
import FinalCalculate from './FinalCalculate';

const Table = () => {
    const [selectedItem, setSelectedItem] = useState(0)

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
                    <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                        <thead className="text-blue uppercase font-medium bg-lightYellow">
                            <tr>
                                <th className="py-4 pr-6 pl-5">{tableItems[selectedItem].title}</th>
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
                                        <td className="pr-6 pl-5  whitespace-nowrap font-semibold">{item.name}</td>
                                        <td className="pr-6  whitespace-nowrap">{item.status}</td>
                                        <td className="pr-6  whitespace-nowrap">
                                            <span className='py-2 px-3 rounded-full font-semibold text-xs'>{item.watt}</span>
                                        </td>
                                        <td className="pr-6  whitespace-nowrap">{item.consumption}</td>
                                        <td className="pr-6  whitespace-nowrap">{item.assumptions}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    {/* Custom Machines Section */}
                    <div className="lg:max-w-none max-w-xl mt-8 py-6">
                        <h3 className="text-blue lg:text-2xl font-bold text-xl">
                            If You Want To Add Other Machines You Can Customize It Here
                        </h3>
                    </div>

                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                        <table className="lg:w-1/3 table-auto text-left border-separate border-spacing-y-3">

                            <tbody className="text-blue py-3">
                                {
                                    customTableItems.map((item, idx) => (
                                        <tr key={idx} className='odd:bg-gray even:bg-lightGray'>
                                            <td className="pr-6 pl-5  whitespace-nowrap font-semibold">{item.name}</td>
                                            <td className="pr-6  whitespace-nowrap">{item.status}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <AddButton text='Add' />
                    </div>
                </div>

                <div className='py-20 flex justify-center items-center'>
                    <FinalCalculate />
                </div>
            </div>
        </div>
    );
};

export default Table;