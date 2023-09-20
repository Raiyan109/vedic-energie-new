import React, { useContext } from 'react';
import { CALC_CONTEXT } from '../context/CalcProvider';
import moment from 'moment';

const AdminPanel = () => {
    const { step1Data } = useContext(CALC_CONTEXT)
    const { step2Data } = useContext(CALC_CONTEXT)
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
                {/* <div className="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
                    <div className="h-16 text-blue-500 flex items-center justify-center">
                        <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                            <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
                        <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </button>
                        <button className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
                            <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </button>
                        <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                <line x1="12" y1="11" x2="12" y2="17"></line>
                                <line x1="9" y1="14" x2="15" y2="14"></line>
                            </svg>
                        </button>
                        <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </button>
                    </div>
                </div> */}
                <div className="flex-grow overflow-hidden h-full flex flex-col">
                    {/* <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
                        <div className="flex h-full text-gray-600 dark:text-gray-400">
                            <a href="#" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Company</a>
                            <a href="#" className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Users</a>
                            <a href="#" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Expense Centres</a>
                            <a href="#" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Currency Exchange</a>
                        </div>
                        <div className="ml-auto flex items-center space-x-7">
                            <button className="h-8 px-3 rounded-md shadow text-white bg-blue-500">Deposit</button>

                            <button className="flex items-center">
                                <span className="relative flex-shrink-0">
                                    <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
                                    <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
                                </span>
                                <span className="ml-2">James Smith</span>
                                <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div> */}
                    <div className="flex-grow flex overflow-x-hidden">
                        {/* <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                            <div className="text-xs text-gray-400 tracking-wider">USERS</div>
                            <div className="relative mt-2">
                                <input type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
                                <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <div className="space-y-4 mt-3">
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        Kathyrn Murphy
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Design</div>
                                        <div className="ml-auto text-xs text-gray-500">$1,902.00</div>
                                    </div>
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        Mert Cukuren
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">Sales</div>
                                        <div className="ml-auto text-xs text-gray-500">$2,794.00</div>
                                    </div>
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        Albert Flores
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md">Marketing</div>
                                        <div className="ml-auto text-xs text-gray-400">$0.00</div>
                                    </div>
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        Jane Cooper
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Design</div>
                                        <div className="ml-auto text-xs text-gray-500">$762.00</div>
                                    </div>
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        Ronald Richards
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">Sales</div>
                                        <div className="ml-auto text-xs text-gray-400">$0.00</div>
                                    </div>
                                </button>
                            </div>
                        </div> */}
                        <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
                            {/* <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
                                <div className="flex w-full items-center">
                                    <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                                        <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" className="w-12 mr-4 rounded-full" alt="profile" />
                                        Mert Cukuren
                                    </div>
                                    <div className="ml-auto sm:flex hidden items-center justify-end">
                                        <div className="text-right">
                                            <div className="text-xs text-gray-400 dark:text-gray-400">Account balance:</div>
                                            <div className="text-gray-900 text-lg dark:text-white">$2,794.00</div>
                                        </div>
                                        <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                                            <svg viewBox="0 0 24 24" className="w-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                                    <a href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activities</a>
                                    <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">Transfer</a>
                                    <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Budgets</a>
                                    <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Notifications</a>
                                    <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Cards</a>
                                </div>
                            </div> */}
                            <div className="sm:p-7 p-4">
                                <div className="flex w-full items-center mb-7">
                                    <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                                        <svg viewBox="0 0 24 24" className="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        Last 30 days
                                        <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                    <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                                        Filter by
                                        <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                    <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                                        <span className="mr-3">Page 2 of 4</span>
                                        <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                                            <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                                            <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <h1 className='text-center py-10 text-xl text-blue'>Step 1</h1>
                                {

                                    <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                                        <thead className="text-blue uppercase font-medium bg-lightYellow">
                                            <tr>
                                                <th className="py-4 pr-6 pl-5">Index</th>
                                                <th className="py-4 pr-6 pl-5">State</th>
                                                <th className="py-4 pr-6">City</th>
                                                <th className="py-4 pr-6">People Count</th>
                                                <th className="py-4 pr-6">Units</th>
                                                <th className="py-4 pr-6">Rs.</th>
                                                <th className="py-4 pr-6">User Total</th>
                                                <th className="py-4 pr-6">State Total</th>
                                                <th className="py-4 pr-6">Calculation time</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-blue py-3">
                                            {
                                                step1Data && step1Data.map((data, idx) => (
                                                    <tr key={idx} className='odd:bg-gray even:bg-lightGray'>
                                                        <td className="pr-6 pl-9  whitespace-nowrap">{idx + 1}</td>
                                                        <td className="pr-6 pl-5  whitespace-nowrap font-semibold">{data.state}</td>
                                                        <td className="pr-6  whitespace-nowrap">{data.city}</td>
                                                        <td className="pr-6  whitespace-nowrap">
                                                            <span className='py-2 px-3 rounded-full font-semibold text-xs'>{data.peopleCount}</span>
                                                        </td>
                                                        <td className="pr-6  whitespace-nowrap">{data.units}</td>
                                                        <td className="pr-6  whitespace-nowrap">{data.amount}</td>
                                                        <td className="pr-6  whitespace-nowrap">{data.userTotal}</td>
                                                        <td className="pr-6  whitespace-nowrap">{data.stateTotal}</td>
                                                        <td className="pr-6  whitespace-nowrap">{moment(data.createdAt).format('MMMM Do, h:mm a')}</td>

                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                }

                                <h1 className='text-center py-10 text-xl text-blue'>Step 2</h1>

                                {/*  */}
                                {
                                    <div className='overflow-x-auto'>
                                        <table className="w-full table-auto text-left border-separate border-spacing-y-3">
                                            <thead className="text-blue uppercase font-medium bg-lightYellow">
                                                <tr>
                                                    {/* <th className="py-4 pr-6 pl-5">Machine Name</th> */}
                                                    <th className="py-4 pr-6 pl-5">Consumption time</th>
                                                    <th className="py-4 pr-6 pl-9">Machine Names</th>
                                                    <th className="py-4 pr-6 pl-9">Consumptions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-blue py-3">
                                                {
                                                    step2Data && step2Data.map((data, idx) => (
                                                        <tr key={idx} className='odd:bg-gray even:bg-lightGray'>
                                                            <td className="pr-6  whitespace-nowrap pl-5">{moment(data.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                                                            <td className="pr-6  whitespace-nowrap pl-5">{data.consumptionTitles.join(", ")}</td>
                                                            <td className="pr-6  whitespace-nowrap">{data.consumptionValues.join(", ")}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                }

                                <div className="flex w-full mt-5 space-x-2 justify-end">
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                                        <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">1</button>
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">2</button>
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">3</button>
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">4</button>
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                                        <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;