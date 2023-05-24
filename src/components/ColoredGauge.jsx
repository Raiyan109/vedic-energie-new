import React, { useState } from "react";
import { useGauge } from "use-gauge";

// const useSpeedTest = () => {
//     // const [value, setValue] = useState(50);

//     return {
//         value: Math.min(value, 100)
//     };
// };

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

    const circleClassName = value > capitalValue ? "stroke-[#FF0000]" : "stroke-green";
    const message =
        value > capitalValue
            ? "Your consumption crossed the capita consumption"
            : "Your consumption is OK";


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
                        strokeWidth={40}
                    />
                    <path
                        {...gauge.getArcProps({
                            offset: 30,
                            startAngle: 70,
                            endAngle: gauge.valueToAngle(value)
                        })}
                        fill="none"
                        className={circleClassName}
                        strokeLinecap="round"
                        strokeWidth={40}
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
                    {/* <text
                        y="80"
                        className="text-xl fill-blue font-bold name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {message}
                    </text> */}
                </g>
            </svg>
        </div>
    );
};

export default ColoredGauge;
