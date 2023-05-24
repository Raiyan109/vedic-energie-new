import React, { useState } from "react";
import { useGauge } from "use-gauge";

const useSpeedTest = () => {
    const [value, setValue] = useState(50);

    return {
        value: Math.min(value, 100)
    };
};

const ColoredGauge = ({ value, capitaValue }) => {
    // const { value } = useSpeedTest();
    const capitalValue = Math.trunc(capitaValue.data)
    console.log(capitalValue);
    const gauge = useGauge({
        domain: [0, 1500],
        startAngle: 70,
        endAngle: 290,
        numTicks: 21,
        diameter: 400
    });

    const needle = gauge.getNeedleProps({
        value,
        baseRadius: 10,
        tipRadius: 2
    });

    return (
        <div>
            <svg className="w-full overflow-visible p-4" {...gauge.getSVGProps()}>
                <g id="arcs">
                    <path
                        {...gauge.getArcProps({
                            offset: 30,
                            startAngle: 70,
                            endAngle: 290
                        })}
                        fill="none"
                        className="stroke-gray"
                        strokeLinecap="round"
                        strokeWidth={15}
                    />
                    <path
                        {...gauge.getArcProps({
                            offset: 30,
                            startAngle: 70,
                            endAngle: gauge.valueToAngle(value)
                        })}
                        fill="none"
                        className="stroke-green"
                        strokeLinecap="round"
                        strokeWidth={15}
                    />
                </g>
                <g id="needle">
                    <text
                        y="-1rem"
                        className="text-6xl fill-blue font-bold name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {capitalValue}
                    </text>
                    <text
                        y="50"
                        className="text-xl fill-blue font-bold name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        Capita Consumption Data
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default ColoredGauge;
