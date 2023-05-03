import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// Chart.register(ChartDataLabels);
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Piechart(){
const data = {
    labels: ['Air Conditioner', 'Lights', 'Geyser', 'Fridge', 'Washing Machine', 'Fans','Others'],
    datasets: [
      {
        label: 'Energy consumption',
        data: [30, 15, 10, 12, 20, 12,6],
        backgroundColor: [
          '#6D61F6',
          '#53CFEA',
          '#FEFFCD',
          '#6C9782',
          '#16277B',
          '#7BAEFB',
          '#2F45B7'
        ],
        borderWidth: 0,
   
      },
    ],
  };

  return(

    <div className="items-center">
        <h1 className='text-indigo font-bold text-3xl underline m-auto items-center text-center mt-10 pb-10'>High Energy Consumption Weightage <br /> of the Devices</h1>
            <div className=" w-[600px] h-[500px] flex mx-auto my-auto">
          <Pie width={150} height={150} data={data} 
           options={{responsive:true,
            plugins: {
                
                Tooltip:{enabled:true},
                legend: {
                    display: true,
                    position:'bottom',  
                    labels: {
                        boxWidth:25,
                        boxHeight:26,
                        color:'black'
                    }

                }
            }
            // datalabels:{
            //     display:true,
            //     formatter:(value,context)=>{
            //         // const datapoints=context.chart.data.datasets[0].data;
            //         // function totalsum(total,datapoint){
            //         //     return total+datapoint;
            //         // }
            //         // const totalvalue=datapoints.reduce(totalsum,0);
            //         // const percentageValue=(value /totalvalue *100).toFixed(0);
            //         return context.chart.data.datasets[0].data;
            //     }
            // }
        }} 
        />

            </div>

          </div>
  );
}