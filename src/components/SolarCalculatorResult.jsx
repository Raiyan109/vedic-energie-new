import React, { useEffect, useState } from 'react';

const SolarCalculatorResult = ({powerPlantSize,plantCost,electricityGeneration,financialSaving,co2Mitigated,equivalentPlanting}) => {
  console.log(powerPlantSize,plantCost,electricityGeneration,financialSaving,co2Mitigated,equivalentPlanting);
  // console.log(solarInputValue);
  // console.log(budgetResult);
  // const [result,setResult] = useState(0)
  // console.log(result);

  // useEffect(() => {
  //   if (powerPlantSize) {
  //     setResult(powerPlantSize);
  //   } else if (solarInputValue) {
  //     console.log(solarInputValue);
  //     setResult(solarInputValue);
  //   } else if (budgetResult) {
  //     setResult(budgetResult);
  //   }
  // }, [powerPlantSize, solarInputValue, budgetResult]);

    return (
        <div className='flex justify-center items-center'>
<div>
<div class="bg-gray-200 grid grid-cols-1 gap-4">
  
  {/* <!-- Card 1 --> */}
  <a class="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
    
    {/* <!-- Icon --> */}
    <div class="col-span-12 md:col-span-1 text-blue text-2xl">
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>1 . */}1.
    </div>
    
    {/* <!-- Title --> */}
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold pt-16"> Size of Power Plant</p>
    </div>
    
    {/* <!-- Description --> */}
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> {powerPlantSize}kW</p>
    </div>
    
  </a>
  
  
  {/* <!-- Card 2 --> */}
  <a class="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
    
    {/* <!-- Icon --> */}
    <div class="col-span-12 md:col-span-1 text-blue text-2xl">
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>1 . */}2.
    </div>
    
    {/* <!-- Title --> */}
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold pt-16"> Cost of the Plant </p>
    </div>
    
    {/* <!-- Description --> */}
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Rs. {plantCost} </p>
    </div>
    
  </a>
  
  
  {/* <!-- Card 3 --> */}
  <a class="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
    
    {/* <!-- Icon --> */}
    <div class="col-span-12 md:col-span-1 text-blue text-2xl pb-3">
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>1 . */}3.
    </div>
    
    {/* <!-- Title --> */}
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold pt-16"> Total Electricity Generation from Solar Plant: </p>
    </div>
    
    {/* <!-- Description --> */}
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Annual : {electricityGeneration} kWh </p>
      <p class="text-sm text-gray-800 font-light"> {`Life-Time (25 years) : ${electricityGeneration*25} kWh`} </p>
    </div>
    
  </a>

  {/* <!-- Card 4 --> */}
  <a class="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
    
    {/* <!-- Icon --> */}
    <div class="col-span-12 md:col-span-1 text-blue text-2xl">
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>1 . */}4.
    </div>
    
    {/* <!-- Title --> */}
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold pt-16"> Financial Savings : </p>
    </div>
    
    {/* <!-- Description --> */}
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Monghly : Rs. {financialSaving} </p>
      <p class="text-sm text-gray-800 font-light"> {`Annual : Rs. ${financialSaving*10}`} </p>
      <p class="text-sm text-gray-800 font-light"> {`Life-Time (25 years) : Rs. ${financialSaving* 10 * 25}`} </p>
    </div>
    
  </a>

  {/* <!-- Card 5 --> */}
  <a class="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
    
    {/* <!-- Icon --> */}
    <div class="col-span-12 md:col-span-1 text-blue text-2xl">
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>1 . */}5.
    </div>
    
    {/* <!-- Title --> */}
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold pt-16"> Total Electricity Generation from Solar Plant: </p>
    </div>
    
    {/* <!-- Description --> */}
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Annual : {electricityGeneration} kWh </p>
      <p class="text-sm text-gray-800 font-light"> {`Life-Time (25 years) : ${electricityGeneration*25} kWh`} </p>
    </div>
    
  </a>
  
</div>
</div>
        </div>
    );
};

export default SolarCalculatorResult;