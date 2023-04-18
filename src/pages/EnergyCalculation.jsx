import React, { useReducer, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsFillSunFill } from 'react-icons/bs'
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import Toggle from '../components/Toggle';
import Input from '../components/Input';

const EnergyCalculation = () => {


    const initialState = {
        airCon: 0,
        HeatPump: 0,
        HotTub: 0,
        ClothesDryer: 0,
        summer: false
    }

    const reducer = (state, action) => {
        console.log(action);
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case "SUMMER":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
                break;

            default:
                state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.preventDefault()
        console.log(state);
    }

    const inputDispatch = (e) => {
        dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })
    }

    const [enabled, setEnabled] = useState(false);
    return (
        <div>
            <Header />
            <section className="bg-lightYellow p-32">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Energy Calculator</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Calculate your daily appliances energy</p>
                    </div>

                    <div className='flex justify-between items-center text-xl'>
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-orange ">
                            <div className='flex justify-between items-center gap-4'>
                                <BsFillSunFill />
                                <h3>Summer</h3>
                            </div>
                        </button>
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-blue text-white">
                            <div className='flex justify-between items-center gap-4'>
                                <FaCanadianMapleLeaf />
                                <h3>Winter</h3>
                            </div>
                        </button>
                    </div>


                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <form
                                        onSubmit={submit}
                                    >
                                        <table class="min-w-full">
                                            <tbody>
                                                <tr class="bg-gray-100 border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Air conditioner</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <label for="themeSwitcherTwo" class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
                                                            <input type="checkbox" className="sr-only peer"
                                                                checked={enabled}
                                                                readOnly />
                                                            <div
                                                                onClick={() => {
                                                                    setEnabled(!enabled);
                                                                }}
                                                                className="w-11 h-6 bg-green rounded-full peer  peer-focus:ring-green  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-yellow after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue"
                                                            ></div>
                                                            <span className="ml-2 text-sm font-medium text-gray-900">
                                                                ON
                                                            </span>
                                                        </label>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {/* <Input /> */}
                                                        <input type="number"
                                                            name="airCon"
                                                            id="url"
                                                            onChange={(e) => inputDispatch(e)} className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset dark:border-green dark:text-white dark:bg-green focus:ring-orange" autocomplete="off" />
                                                    </td>


                                                </tr>
                                                <tr class="bg-white border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Heat pump</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Toggle />
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <input type="number"
                                                            name="HeatPump"
                                                            id="url"
                                                            onChange={(e) => inputDispatch(e)} className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset dark:border-green dark:text-white dark:bg-green focus:ring-orange" autocomplete="off" />
                                                    </td>

                                                </tr>
                                                <tr class="bg-gray-100 border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hot Tub</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Toggle />
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <input type="number"
                                                            name="HotTub"
                                                            id="url"
                                                            onChange={(e) => inputDispatch(e)} className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset dark:border-green dark:text-white dark:bg-green focus:ring-orange" autocomplete="off" />
                                                    </td>

                                                </tr>
                                                <tr class="bg-white border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Clothes dryer</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Toggle />
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <input type="number"
                                                            name="ClothesDryer"
                                                            id="url"
                                                            onChange={(e) => inputDispatch(e)} className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset dark:border-green dark:text-white dark:bg-green focus:ring-orange" autocomplete="off" />
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                        <button

                                            className='px-4 py-3 bg-blue text-white rounded-md'>Calculate</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EnergyCalculation;