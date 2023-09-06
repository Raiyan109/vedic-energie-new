import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';
import bg from '../assets/ellipse.png'
// Chart.register(ChartDataLabels);
ChartJS.register(ArcElement, Tooltip, Legend);

const Section = styled.div`
.box{
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover; 
background-position: center; 
`

export default function PieChartCalc({ airPercentage, geyserPercentage, washingPercentage, ovenPercentage, fridgePercentage, lightPercentage,ceilingFanPercentage,tvPercentage,laptopPercentage, ironPercentage, otherMPercentage }) {
  console.log(ovenPercentage);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const data = [
      { label: 'Air Conditioner', value: airPercentage },
      { label: 'Geyser', value: geyserPercentage },
      { label: 'Washing Machine', value: washingPercentage },
      { label: 'Oven', value: ovenPercentage },
      { label: 'Fridge', value: fridgePercentage },
      { label: 'Lights', value: lightPercentage },
      { label: 'Ceiling Fan', value: ceilingFanPercentage},
      { lable: 'Tv', value: tvPercentage},
      { lable: 'Laptop', value: laptopPercentage},
      { lable: 'Iron', value: ironPercentage},
      { lable: 'Other', value: otherMPercentage}
    ];

    const filteredData = data
      .filter(({ value }) => value !== null && value !== 0)
      .map(({ label, value }) => ({ label, value }));



    const labels = filteredData.map(({ label }) => label);
    console.log(labels);
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Energy consumption',
          data: filteredData.map(({ value }) => value),
          backgroundColor: [
            '#1D6126',
            '#75ed9d',
            '#2F45B7',
            '#FFB951',
            '#FEFFCD',
            '#9BA4B5',
          ],
          borderWidth: 0,
        },
      ],
    });

    // Send the percentageValue to the backend
    // const percentageValue = calculatePercentageValue(filteredData);
    // if (percentageValue !== null) {
    //   sendPercentageValue(percentageValue);
    // }

  }, [airPercentage, geyserPercentage, washingPercentage, ovenPercentage, fridgePercentage, lightPercentage, ceilingFanPercentage, tvPercentage, laptopPercentage, ironPercentage, otherMPercentage]);

  // const calculatePercentageValue = (filteredData) => {
  //   const totalValue = filteredData.reduce((total, { value }) => total + value, 0);
  //   if (totalValue !== 0) {
  //     const percentageValue = ((filteredData[0].value / totalValue) * 100).toFixed(0);
  //     return percentageValue;
  //   }
  //   return null;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const ConsumptionData = [
    //   { label: 'Air Conditioner', value: airPercentage },
    //   { label: 'Geyser', value: geyserPercentage },
    //   { label: 'Washing Machine', value: washingPercentage },
    //   { label: 'Oven', value: ovenPercentage },
    //   { label: 'Fridge', value: fridgePercentage },
    //   { label: 'Lights', value: lightPercentage },
    // ];

    // const filteredData = ConsumptionData
    //   .filter(({ value }) => value !== null && value !== 0)
    //   .map(({ label, value }) => ({ label, value }));
    // const consumptionValue = filteredData.map(({ value }) => value)

    // const consumptionTitle = filteredData.map(({ label }) => label);

    // const step2 = {
    //   consumptionValues: consumptionValue,
    //   consumptionTitles: consumptionTitle,
    // };


    // const response = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step2', {
    //   method: 'POST',
    //   body: JSON.stringify(step2),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const json = await response.json()



    // if (response.ok) {
    //   // setError(null)
    //   console.log('New calculation added', json);
    //   const res = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step2');
    //   const data = await res.json();
    // }
    // else {

    // }
  }

  return (

    <Section>
      <div className="py-20 box">
        <h1 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5 text-center mb-24">High Energy Consumption Wattage <br /> of the Devices</h1>

        <form onSubmit={handleSubmit}>
          <div className="container flex lg:flex-row  flex-col lg:mx-0 md:mx-auto mx-auto">
            <div className='lg:max-w-2xl max-w-lg mx-auto mb-16'>
              <h2 className='lg:text-2xl md:text-xl text-lg leading-relaxed text-blue lg:text-left text-center px-6'>The pie chart helps identify the specific devices or appliances that contribute significantly to overall energy consumption. Devices with larger slices in the pie chart indicate higher energy consumption and may be good targets for energy efficiency improvements.</h2>
            </div>
            <div className='lg:w-96 lg:h-96 w-[600px] h-80 flex justify-center items-center lg:pr-0 pr-16 md:mx-auto '>
              {chartData && (
                <Pie
                  width={150}
                  height={150}
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        enabled: false
                      },
                      legend: {
                        display: true,
                        position: 'right',
                        align: 'start',
                        labels: {
                          boxWidth: 25,
                          boxHeight: 26,
                          color: 'black',
                        }

                      },
                      datalabels: {
                        color: 'white',
                        display: true,
                        formatter: (value, context) => {
                          const datapoints = context.chart.data.datasets[0].data;
                          const totalvalue = datapoints.reduce((total, datapoint) => total + datapoint, 0);
                          const percentageValue = ((value / totalvalue) * 100).toFixed(0);
                          return `${percentageValue}%`;
                        }
                      }
                    }
                  }}
                  plugins={[ChartDataLabels]}
                />
              )}
            </div>

          </div>
          {/* <div className='flex justify-center items-center'>
            <button className='w-[137px] h-[50px] bg-orange rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all p-2'>Submit to backend</button>
          </div> */}
        </form>
      </div>

    </Section>
  );
}