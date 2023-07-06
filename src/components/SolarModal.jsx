import React, { useContext, useState } from 'react';
import { CALC_CONTEXT } from '../context/CalcProvider';

const SolarModal = ({powerPlantSize,plantCost,electricityGeneration,financialSaving,co2Mitigated,equivalentPlanting}) => {
    const {showModal,setShowModal} = useContext(CALC_CONTEXT)
    return (
        <div>
            
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Solar Rooftop Calculator 
                  </h3>
                  {/* <button
                    className="p-1 ml-auto bg-yellow border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <div className='flex justify-center items-center'>
                        <span className="bg-yellow pb-3 text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </div>
                  </button> */}
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className='flex'>
                    <div className='bg-lightGreen flex-1'>
                        <div className='p-5'>
                            <div className='flex gap-4'>
                                <span>1 .</span>
                                <h1>Size of power plant:</h1>
                            </div>
                            <div className='flex gap-4'>
                                <span>2 .</span>
                                    <h1>Cost of the plant:</h1>
                            </div>
                            <div className='flex gap-4 h-16 mb-4'>
                                <span>3 .</span>
                                    <div>
                                        <h1>Total electricity generation from solar plant</h1>
                                        <h3>Annual :</h3>
                                        <h3>Life-time (25 years) :</h3>
                                    </div>
                            </div>
                            <div className='flex gap-4 h-16'>
                                <span>4 .</span>
                                    <div>
                                    <h1>Financial savings</h1>
                                    <h3>Monthly :</h3>
                                    <h3>Annually :</h3>
                                    <h3>Life-time (25 years) :</h3>
                                    </div>
                            </div>
                            <div className='flex gap-4 h-16 mt-9 border-t-2'>
                                {/* <span>5 .</span> */}
                                    <div>
                                      <h1 className='font-bold'>Carbon dioxide emissions mitigated is</h1>
                                      <h1 className='font-bold'>This installation will be equivalent to planting</h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray flex-2'>
                        <p className='mt-5'>{powerPlantSize} kW</p>
                        <p className='mb-6'>{plantCost} Rs.</p>
                        <p className=''>{electricityGeneration} kWh</p>
                        <p className='mb-8'>{`${electricityGeneration * 25} kWh`}</p>
                        <p>Rs. {financialSaving}</p>
                        <p>Rs. {`${financialSaving*10}`}</p>
                        <p>Rs. {`${financialSaving*10*25}`}</p>
                        <p className='border-t-2 mt-1'>{co2Mitigated} Tonnes</p>
                        <p>{equivalentPlanting.toFixed()} Teak trees over the life time.</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-green bg-orange font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        
  
        </div>
    );
};

export default SolarModal;