import React, { useContext, useEffect, useRef, useState } from 'react';
import { CALC_CONTEXT } from '../context/CalcProvider';
import EMICalculator from './EMICalculator';

const SolarModal = ({ powerPlantSize, plantCost, electricityGeneration, financialSaving, co2Mitigated, equivalentPlanting }) => {
  console.log(powerPlantSize);
  const { showModal, setShowModal } = useContext(CALC_CONTEXT)

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowModal]);

  return (
    <div>

      <div
        className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl" ref={modalRef}>
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold lg:text-left text-center">
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
              <table className='mb-7'>
                <tbody>
                  <tr>
                    <td className='bg-blue text-white p-2'>1. Size of power plant :</td>
                    <td className='bg-orange text-white w-32 p-2'>{powerPlantSize} kW</td>
                  </tr>
                  {/* Cost */}
                  <tr>
                    <td className='bg-blue text-white p-2'>2. Cost of the plant :</td>
                    <td className='bg-orange text-white p-2'>Rs. {plantCost}</td>
                  </tr>
                  {/* Total Electricity generation */}
                  <tr>
                    <td className='bg-blue text-white p-2'>2. Total electricity generation from solar plant :</td>
                    <td className='bg-orange text-white p-2'></td>
                  </tr>
                  <tr>
                    <td className='bg-blue text-white p-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Annual :</td>
                    <td className='bg-orange text-white p-2'>{electricityGeneration} kWh</td>
                  </tr>
                  <tr>
                    <td className='bg-blue text-white p-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Life-Time (25 years):</td>
                    <td className='bg-orange text-white p-2'>{`${electricityGeneration * 25} kWh`}</td>
                  </tr>
                  {/* Financial saving */}
                  <tr>
                    <td className='bg-blue text-white p-2'>3. Financial savings :</td>
                    <td className='bg-orange text-white p-2'></td>
                  </tr>
                  <tr>
                    <td className='bg-blue text-white p-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Monthly :</td>
                    <td className='bg-orange text-white p-2'>Rs. {financialSaving}</td>
                  </tr>
                  <tr>
                    <td className='bg-blue text-white p-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Annual :</td>
                    <td className='bg-orange text-white p-2'>Rs. {`${financialSaving * 10}`}</td>
                  </tr>
                  <tr>
                    <td className='bg-blue text-white p-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Life-Time (25 years):</td>
                    <td className='bg-orange text-white p-2'>Rs. {`${financialSaving * 10 * 25}`}</td>
                  </tr>
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <td className='bg-blue text-white p-4 w-96'>Carbon dioxide emissions mitigate is</td>
                    <td className='bg-orange text-white p-4 w-32'>{co2Mitigated} Tonnes</td>
                  </tr>
                  <tr>
                    <td className='bg-blue text-white p-4 w-96'>This installation will be equivalent to planting</td>
                    <td className='bg-orange text-white p-4 w-32'>{equivalentPlanting.toFixed()} Teak trees over the life time.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* EMI */}
            <div>
              <EMICalculator plantCost={plantCost} />
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