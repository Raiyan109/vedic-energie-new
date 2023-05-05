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
            labels: ['Red', 'Blue'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [30, 6],
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
                    needleValue: 30,
                    borderColor: 'white',
                    borderWidth: 1,
                    cutout: '95%',
                    circumference: 180,
                    rotation: 270,
                    borderRadius: 5,
                },
            ],
        })

        // gaugeNeedle block


        setChartOptions({
            responsive: true,
            // maintainAspectRatio: false,
            plugins: [gaugeNeedle],
        })
    }, [])

    const gaugeNeedle = {
        id: 'gaugeNeedle',
        afterDatasetDraw(chart, args, options) {
            console.log(chart);
            const { ctx, config, data, chartArea: { top, bottom, left, right, width, height } } = chart

            ctx.save();
            console.log(data);
            const needleValue = data.datasets[0].needleValue
            const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0)
            const angle = Math.PI + (1 / dataTotal * needleValue * Math.PI)
            console.log(angle);

            ctx.beginPath()
            ctx.arc(10, 10, 5, 0, 10)
            ctx.fill()
            ctx.restore()

        }
    }

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
            <Doughnut options={chartOptions} data={chartData} plugins={[gaugeNeedle]} />;
        </div>
    );
};

export default SpeedOMeter;