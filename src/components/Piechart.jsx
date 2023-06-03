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

export default function PieChart({ airPercentage, geyserPercentage, washingPercentage, ovenPercentage, fridgePercentage, lightPercentage }) {
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
    ];

    const filteredData = data
      .filter(({ value }) => value !== null && value !== 0)
      .map(({ label, value }) => ({ label, value }));

    const labels = filteredData.map(({ label }) => label);

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
  }, [airPercentage, geyserPercentage, washingPercentage, ovenPercentage, fridgePercentage, lightPercentage]);



  return (

    <Section>
      <div className="py-20 box">
        <h1 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5 text-center mb-24">High Energy Consumption Wattage <br /> of the Devices</h1>
        <div className="container flex lg:flex-row  flex-col lg:mx-0 md:mx-auto mx-auto">
          <div className='lg:max-w-2xl max-w-lg mx-auto mb-16'>
            <h2 className='lg:text-2xl md:text-xl text-lg leading-relaxed text-blue lg:text-left text-center px-6'>By comparing the user's energy consumption with the state's per capita energy consumption, the calculator provides a benchmark for the user to evaluate their own energy usage. If the user's consumption is significantly higher than the state's average, it suggests that they might have opportunities for energy-saving improvements</h2>
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
      </div>

    </Section>
  );
}