import React, { useState } from "react";
import { useGauge } from "use-gauge";

const START_ANGLE = 80;
const END_ANGLE = 280;

export function Arced({ value, capitaValue }) {
  const [errorMessage, setErrorMessage] = useState('');
  const gauge = useGauge({
    domain: [0, 1500],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 7 /** This is for the tiny lines above the arc like sunshine. */,
    diameter: 450
  });

  const needle = gauge.getNeedleProps({
    value,
    baseRadius: 12,
    tipRadius: 2
  });


  const arcStroke1 = () => {
    if (value > capitaValue.data) {
      return "red"; // Red color when user value is greater than capitaValue
    }
    return "#0cccad"; // Default color
  };
  const arcStroke2 = () => {
    if (value > capitaValue.data) {
      return "red"; // Red color when user value is greater than capitaValue
    }
    return "yellow"; // Default color
  };
  const arcStroke3 = () => {
    if (value > capitaValue.data) {
      return "#ec3e27";
    }
    return "green"; // Default color
  };

  const color = arcStroke3();
  const errorMsg = value > capitaValue.data ? 'Your Consumption has increased!' : '';


  return (
    <div className="p-4">
      <svg className="w-full overflow-visible p-2" {...gauge.getSVGProps()}>
        <g id="arcs">
          {/* <path
            {...gauge.getArcProps({
              offset: -20,
              startAngle: START_ANGLE,
              endAngle: END_ANGLE
            })}
            fill="none"
            className="stroke-gray-200"
            strokeLinecap="round"
            strokeWidth={24}
          /> */}
          <path
            {...gauge.getArcProps({
              offset: -20,
              startAngle: gauge.valueToAngle(1000),
              endAngle: gauge.valueToAngle(1500)
            })}
            fill="none"
            strokeLinecap="round"
            stroke={arcStroke1()}
            strokeWidth={24}
          />
          <path
            {...gauge.getArcProps({
              offset: -20,
              startAngle: gauge.valueToAngle(500),
              endAngle: gauge.valueToAngle(1000)
            })}
            fill="none"
            stroke={arcStroke2()}
            strokeWidth={24}
          />
          <path
            {...gauge.getArcProps({
              offset: -20,
              startAngle: gauge.valueToAngle(0),
              endAngle: gauge.valueToAngle(500)
            })}
            fill="none"
            stroke={color}
            strokeWidth={24}
          />
        </g>
        {/* <g id="ticks">
          {gauge.ticks.map((angle) => {
            const asValue = gauge.angleToValue(angle);
            const showText = asValue % 2 === 0;

            return (
              <div key={`tick-group-${angle}`}>
                <line
                  className="stroke-black"
                  strokeWidth={2}
                  {...gauge.getTickProps({ angle, length: showText ? 25 : 6 })}
                />
                <text
                  className="text-xl fill-gray-800 font-medium"
                  {...gauge.getLabelProps({ angle, offset: -40 })}
                >
                  {gauge.angleToValue(angle)}
                </text>
              </div>
            );
          })}
        </g> */}
        <g id="needle">

          <circle className="fill-green" {...needle.base} r={20} />
          <circle className="fill-green" {...needle.base} />
          <circle className="fill-green" {...needle.tip} />
          <polyline className="fill-green" points={needle.points} />
          <circle className="fill-white" {...needle.base} r={4} />
          <rect
            className="fill-green"
            x="-8rem"
            y="-19rem"
            width="60%"
            height="5rem"
          />
          <text
            x="0"
            y="-280"
            className="text-2xl fill-orange font-bold"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            Capita Data
          </text>
          <text
            x="0"
            y="-250"
            className="text-2xl fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {capitaValue.data}
          </text>
          <text
            x="0"
            y="-60"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-[#ec3e27] font-semibold text-lg"
          >
            {errorMsg}
          </text>
        </g>
      </svg>
    </div>
  );
}
