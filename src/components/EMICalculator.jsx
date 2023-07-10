import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EMICalculator = ({ plantCost }) => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(8.75);
  const [loanPeriod, setLoanPeriod] = useState(10);
  const [emi, setEmi] = useState(0);
  const [showEmiResult, setShowEmiResult] = useState(false)

  const handlePlantCostChange = (event) => {
    const newValue = parseFloat(event.target.value) || 0;
    setLoanAmount(newValue);
  };

  const handleInterestRateChange = (event) => {
    const newValue = parseFloat(event.target.value) || 0;
    setInterestRate(newValue);
  };

  const handleLoanPeriodChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setLoanPeriod(newValue);
  };

  const calculateEmi = () => {
    const ratePerMonth = interestRate / 100 / 12;
    const months = loanPeriod * 12;
    const emiCalculation =
      (plantCost *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, months)) /
      (Math.pow(1 + ratePerMonth, months) - 1);
    setEmi(emiCalculation || 0);
    setShowEmiResult(true)
  };

  useEffect(() => {
    calculateEmi();
  }, [plantCost, interestRate, loanPeriod]);
  return (
    <Section>
      <div className="relative p-6 flex-auto">
        <div className='bg-orange p-5 space-y-3'>
          <h1 className='text-3xl text-center mb-4'>EMI Calculator</h1>
          <div className='flex'>
            <h3>Cost of the solar plant : </h3>
            <input value={plantCost} className='placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md averageSelect text-black ml-6 mr-2' type="text" onChange={handlePlantCostChange} /> Rs.
          </div>
          <div className='flex'>
            <h3>Loan Amount : </h3>
            <input value={plantCost} className='placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md averageSelect text-black ml-24 mr-2' type="text" disabled />
            Rs.
          </div>
          <div className='flex'>
            <h3>Loan Interest rate : </h3>
            <input value={interestRate} className='placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md averageSelect text-black ml-16 mr-2' type="text" onChange={handleInterestRateChange} />
            %
          </div>
          <div className='flex'>
            <h3>Loan Period in years : </h3>
            <input value={loanPeriod} className='placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md averageSelect text-black md:ml-10 ml-14 mr-2' type="text" onChange={handleLoanPeriodChange} />
            years
          </div>
          <div className='flex'>
            <h3>EMI per month : </h3>
            {emi.toFixed(2)}
          </div>
          <button onClick={calculateEmi} className='bg-lightYellow hover:bg-yellow p-3 rounded-lg mt-8'>EMI Calculate</button>
        </div>

      </div>
    </Section>
  );
};

export default EMICalculator;

const Section = styled.div`
 .averageSelect{
    width: 40%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
`