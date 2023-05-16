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
  console.log(airPercentage, geyserPercentage, washingPercentage);
  const data = {
    labels: ['Air Conditioner', 'Geyser', 'Washing Machine', 'Oven', 'Fridge', 'Lights'],
    datasets: [
      {
        label: 'Energy consumption',
        data: [airPercentage, geyserPercentage, washingPercentage, ovenPercentage, fridgePercentage, lightPercentage],
        backgroundColor: [
          '#6D61F6',
          '#53CFEA',
          '#0027F1',
          '#924f64',
          '#d2e1f7',
          '#186f4c'
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