import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Section = styled.div`
scroll-snap-align:center;
`
const EnergyDemandManagement = () => {

    const [states, setStates] = useState([])
    useEffect(() => {
        // const url = 'states.json'
        fetch('states.json')
            .then(res => res.json())
            .then(data => setStates(data))
    }, [])
    return (
        <Section>
            <Header />
            <div class="mx-auto max-w-5xl p-12 h-screen">
                <div class="flex flex-col md:flex-row justify-center mt-20 gap-10">
                    <div class="md:w-1/2 flex justify-start mt-5 md:justify-items-start w-full">
                        <div class="shadow-md flex-auto max-w-md p-10 pb-20">
                            <div className='flex flex-col w-full max-w-xs'>
                                <label className='mb-3' for='education'>
                                    State
                                </label>
                                <select
                                    name='state'
                                    id='state'

                                >
                                    {
                                        states.map(state => <option value={state.state}>{state.state}</option>)
                                    }

                                </select>
                            </div>
                            <div class="w-full">
                                <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> Last Name</div>
                                <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="Doe" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                            </div>
                            <div class="w-full">
                                <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> Email</div>
                                <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="jhon@doe.com" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                            </div>
                            <div class="mt-6 relative">
                                <div class="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full">Submit</div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                        <div class="md:text-4xl text-xl font-black uppercase">Awesome tool for your future team</div>
                        <div class="text-xl mt-4">Develop your workforce and make it a selling machine</div>
                    </div>
                </div>
            </div>
            <Footer />
        </Section>
    );
};

export default EnergyDemandManagement;