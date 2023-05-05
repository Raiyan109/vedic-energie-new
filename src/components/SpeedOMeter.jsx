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
            labels: ['300', '200', '100'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [2],
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
                    needleValue: 22,
                    borderColor: 'white',
                    borderWidth: 1,
                    cutout: '90%',
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
            // console.log(chart);
            const { ctx, config, data, chartArea: { top, bottom, left, right, width, height } } = chart

            ctx.save();
            // console.log(data);
            const needleValue = data.datasets[0].needleValue
            const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0)
            const angle = Math.PI + (1 / dataTotal * needleValue * Math.PI)

            const cx = width / 2
            const cy = chart._metasets[0].data[0].y
            console.log(ctx.canvas.offsetTop);

            // Needle
            ctx.translate(cx, cy)
            ctx.rotate(angle)
            ctx.beginPath()
            ctx.moveTo(0, -2)
            ctx.lineTo(height - (ctx.canvas.offsetTop + 20), 0)
            ctx.lineTo(0, 2)
            ctx.fillStyle = '#444'
            ctx.fill()
            ctx.restore()

            // Needle dot
            ctx.beginPath()
            ctx.arc(cx, cy, 5, 0, 10)
            ctx.fill()
            ctx.restore()

            // Value
            ctx.font = '50px Helvetica'
            ctx.fillStyle = '#444'
            ctx.fillText(needleValue, cx, cy + 50)
            ctx.textAlign = 'center'
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '50%', height: '50%' }}>
                    <Doughnut options={chartOptions} data={chartData} plugins={[gaugeNeedle]} />
                </div>
            </div>
        </div>
    );
};

export default SpeedOMeter;