import React from "react";
import { useGauge } from "use-gauge";

const START_ANGLE = 80;
const END_ANGLE = 280;

export function Arced({ value, capitaValue }) {
  console.log(capitaValue);
  const gauge = useGauge({
    domain: [0, 12000],
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
    if (value > capitaValue) {
      return "red"; // Red color when user value is greater than capitaValue
    }
    return "#0cccad"; // Default color
  };
  const arcStroke2 = () => {
    if (value > capitaValue) {
      return "red"; // Red color when user value is greater than capitaValue
    }
    return "yellow"; // Default color
  };
  const arcStroke3 = () => {
    if (value > capitaValue) {
      return "bg-orange"; // Red color when user value is greater than capitaValue
    }
    return "green"; // Default color
  };

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
              startAngle: gauge.valueToAngle(8000),
              endAngle: gauge.valueToAngle(12000)
            })}
            fill="none"
            strokeLinecap="round"
            // stroke={arcStroke1()}
            strokeWidth={24}
            // className="stroke-orange"
            className={value < capitaValue ? `stroke-indigo` : 'stroke-orange'}
          />
          <path
            {...gauge.getArcProps({
              offset: -20,
              startAngle: gauge.valueToAngle(4000),
              endAngle: gauge.valueToAngle(8000)
            })}
            fill="none"
            // stroke={arcStroke2()}
            className="stroke-lightYellow"
            strokeWidth={24}
          />
          <path
            {...gauge.getArcProps({
              offset: -20,
              startAngle: gauge.valueToAngle(0),
              endAngle: gauge.valueToAngle(4000)
            })}
            fill="none"
            // stroke={arcStroke3()}
            className="stroke-green"
            strokeWidth={24}
          />
          {/* <path
            {...gauge.getArcProps({
              offset: -70,
              startAngle: gauge.valueToAngle(0),
              endAngle: gauge.valueToAngle(500)
            })}
            fill="none"
            className="stroke-green-mui-400"
            strokeWidth={24}
          /> */}
        </g>
        <g id="ticks">
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
        </g>
        <g id="needle">

          <circle className="fill-green" {...needle.base} r={20} />
          <circle className="fill-green" {...needle.base} />
          <circle className="fill-green" {...needle.tip} />
          <polyline className="fill-green" points={needle.points} />
          <circle className="fill-white" {...needle.base} r={4} />
          <rect
            className="fill-green"
            x="-8rem"
            y="2rem"
            width="60%"
            height="5rem"
          />
          <text
            x="0"
            y="50"
            className="text-2xl fill-orange font-bold"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            Capita Data
          </text>
          <text
            x="0"
            y="90"
            className="text-2xl fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {capitaValue.data}
          </text>
        </g>
      </svg>
    </div>
  );
}
