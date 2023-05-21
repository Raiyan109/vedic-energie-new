import React from 'react';
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
  const filteredData = [airPercentage, geyserPercentage, washingPercentage, ovenPercentage, fridgePercentage, lightPercentage].filter(value => value !== null && value !== 0)
  console.log(filteredData);
  const array = [120, 320, 343, 454, 676, 4554]
  const data = {
    labels: ['Air Conditioner', 'Geyser', 'Washing Machine', 'Oven', 'Fridge', 'Lights'],
    datasets: [
      {
        label: 'Energy consumption',
        data: filteredData ? filteredData : array,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 0,

      },
    ],
  };

  return (

    <Section>
      <div className="items-center py-20 box">
        <h1 className='text-indigo font-bold text-3xl underline m-auto items-center text-center pb-10'>High Energy Consumption Weightage <br /> of the Devices</h1>
        <div className="w-[400px] h-[300px] sm:w-[600px] sm:h-[500px] mx-auto my-auto">
          <Pie width={150} height={150} data={data}
            options=

            {{
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
                    // return `${value}%`
                    const datapoints = context.chart.data.datasets[0].data;
                    function totalsum(total, datapoint) {
                      return total + datapoint;
                    }
                    const totalvalue = datapoints.reduce(totalsum, 0);
                    const percentageValue = (value / totalvalue * 100).toFixed(0);
                    return `${percentageValue}%`;
                  }
                }
              }
            }}
            plugins={[ChartDataLabels]}
          />

        </div>
      </div>

    </Section>
  );
}