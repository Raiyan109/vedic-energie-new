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
    console.log(value);
    const capitalValue = Math.trunc(capitaValue.data)
    console.log(capitalValue);
    const gauge = useGauge({
        domain: [0, 5000],
        startAngle: 70,
        endAngle: 290,
        numTicks: 21,
        diameter: 500
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
                        className="stroke-white"
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
                        y="-130"
                        className="text-8xl fill-blue font-bold name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {value}
                    </text>
                    <text
                        y="-70"
                        className="text-xl fill-blue font-bold name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        User's consumption
                    </text>
                    {/* <text
                        y="80"
                        className="text-xl fill-blue font-bold name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {message}
                    </text> */}
                    <text
                        y="50"
                        className="text-2xl fill-blue name-text"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        State's average consumption : {capitalValue}
                    </text>

                </g>
            </svg>
        </div>
    );
};

export default ColoredGauge;
