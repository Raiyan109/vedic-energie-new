import React from 'react';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];


const DMeter = ({ data }) => {
    console.log(data);
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="data"
                    label={(entry) => entry.state_id}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Sector
                        cx="50%"
                        cy="50%"
                        innerRadius={85}
                        outerRadius={90}
                        startAngle={-90}
                        endAngle={90}
                        fill="#ffc107"
                    />
                    <Sector
                        cx="50%"
                        cy="50%"
                        innerRadius={85}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={270}
                        fill="#f44336"
                    />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DMeter;