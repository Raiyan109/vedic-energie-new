import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsFillSunFill } from 'react-icons/bs'
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import Toggle from '../components/Toggle';
import Input from '../components/Input';

const EnergyCalculation = () => {
    return (
        <div>
            <Header />
            <section className="bg-lightYellow p-32">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Aliquip definiebas ad est</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Quando cetero his ne, eum admodum sapientem ut.</p>
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
                                    <table class="min-w-full">

                                        <tbody>
                                            <tr class="bg-gray-100 border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    Air conditioner</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Toggle />
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Input />
                                                </td>

                                            </tr>
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Heat pump</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Toggle />
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Input />
                                                </td>

                                            </tr>
                                            <tr class="bg-gray-100 border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hot Tub</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Toggle />
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Input />
                                                </td>

                                            </tr>
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Clothes dryer</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Toggle />
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Input />
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
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