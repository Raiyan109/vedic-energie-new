import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const SpeedOMeter = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [3],
                    backgroundColor: (context) => {
                        console.log(context)
                        const chart = context.chart;
                        const { ctx, chartArea } = chart
                        if (!chartArea) {
                            return null
                        }
                        if (context.dataIndex === 0) {
                            return getGradient(chart)
                        }
                        else {
                            return 'black'
                        }
                    },
                    borderColor: 'white',
                    borderWidth: 1,
                    cutout: '95%',
                    circumference: 180,
                    rotation: 270,
                    borderRadius: 5,
                },
            ],
        })

        setChartOptions({
            responsive: true,
            // maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: 'This is a circular gauge chart'
                },
            },
        })
    }, [])

    const getGradient = (chart) => {
        const { ctx, chartArea: { top, bottom, left, right } } = chart;
        const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
        gradientSegment.addColorStop(0, '#75ed9d')
        gradientSegment.addColorStop(0.5, 'yellow')
        gradientSegment.addColorStop(0.8, 'orange')
        gradientSegment.addColorStop(1, 'red')
        return gradientSegment;
    }

    return (
        <div>
            <div className='flex justify-center items-center py-14'>
                <h1 className='underline text-4xl text-indigo font-bold lg:max-w-none max-w-lg text-center'>Per Capita Energy Consumption
                    W.R.T State</h1>
            </div>
            <Doughnut options={chartOptions} data={chartData} />;
        </div>
    );
};

export default SpeedOMeter;