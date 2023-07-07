import React, { useState, useEffect } from 'react';

const EMICalculator = ({plantCost}) => {
    const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(8.75);
  const [loanPeriod, setLoanPeriod] = useState(10);
  const [emi, setEmi] = useState(0);

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
  };

  useEffect(() => {
    calculateEmi();
  }, [plantCost, interestRate, loanPeriod]);
    return (
        <>
            <div className="relative p-6 flex-auto">
                        <div className='bg-lightGreen p-5'>
                            <h1 className='text-xl text-center'>EMI Calculator</h1>
                            <div className='flex'>
                                <h3>Cost of the solar plant : </h3>
                                <input value={plantCost} type="text" onChange={handlePlantCostChange} />
                            </div>
                            <div className='flex'>
                                <h3>Loan Amount : </h3>
                                <input value={plantCost} type="text" disabled />
                                Rs.
                            </div>
                            <div className='flex'>
                                <h3>Loan Interest rate : </h3>
                                <input value={interestRate} type="text" onChange={handleInterestRateChange} />
                                %
                            </div>
                            <div className='flex'>
                                <h3>Loan Period in years : </h3>
                                <input value={loanPeriod} type="text" onChange={handleLoanPeriodChange} />
                                years
                            </div>
                            <div className='flex'>
                                <h3>EMI per month : </h3>
                                {emi.toFixed(2)}
                            </div>
                            <button onClick={calculateEmi} className='bg-white text-lightGreen p-2 rounded-lg mt-8'>EMI Calculate</button>
                        </div>
                   
                </div>
        </>
    );
};

export default EMICalculator;