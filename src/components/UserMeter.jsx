import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const UserMeter = ({ userData }) => {
    console.log(userData);

    const RADIAN = Math.PI / 180;
    const data = [
        { name: '0', value: 0, color: '#ff0000' },
        { name: '150', value: 450, color: '#00ff00' },
        { name: '300', value: 600, color: '#0000ff' },
        { name: '450', value: 750, color: '#924f64' },
        { name: '600', value: 1000, color: '#dc8965' },
        { name: '750', value: 1500, color: '#d2e1f7' },
        { name: '900', value: 2000, color: '#131b27' },

    ];
    const cx = 150;
    const cy = 200;
    const iR = 50;
    const oR = 100;
    const value = userData
    // const value = conData[0].data
    // const value = conData.map(x => x.data)
    console.log(value);
    const needle = (value, data, cx, cy, iR, oR, color) => {
        // console.log(value);
        let total = 0;
        data.forEach((v) => {
            // console.log(v);
            total += v.value;
            // console.log(total);
        });
        const ang = 180.0 * (1 - value / total);
        const length = (iR + 2 * oR) / 3;
        const sin = Math.sin(-RADIAN * ang);
        const cos = Math.cos(-RADIAN * ang);
        const r = 5;
        const x0 = cx + 5;
        const y0 = cy + 5;
        const xba = x0 + r * sin;
        const yba = y0 - r * cos;
        const xbb = x0 - r * sin;
        const ybb = y0 + r * cos;
        const xp = x0 + length * cos;
        const yp = y0 + length * sin;

        return [
            <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
            <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
        ];
    };
    return (
        <div>
            <div>
                {userData && userData.data}

                {/* <p>{item.value} kWh</p>
                <p>{selected ? "Selected" : ""}</p> */}
            </div>

            <div id='perCapitaChart'>
                <div className='flex justify-center items-center py-4'>
                    <h1 className='text-xl text-orange font-bold lg:max-w-none max-w-sm text-center'>User's Consumption Data</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80%', height: '50%' }}>
                        <PieChart width={400} height={500}>
                            <Pie
                                dataKey="value"
                                startAngle={180}
                                endAngle={0}
                                data={data}
                                cx={cx}
                                cy={cy}
                                innerRadius={iR}
                                outerRadius={oR}
                                fill="#8884d8"
                                stroke="none"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            {needle(value, data, cx, cy, iR, oR, '#d0d000')}
                        </PieChart>
                    </div>
                    <div className='absolute'>
                        <h1 className='text-green text-center'>{value}</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserMeter;