import React, { useState } from 'react';
import { useGauge } from 'use-gauge';
import '../components/style.css'

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function Volume({ value, capitaValue }) {
    console.log(capitaValue);
    const diameter = 500;

    const gauge = useGauge({
        diameter,
        startAngle: 45,
        endAngle: 315,
        domain: [0, 1500],
        numTicks: 21,
    });

    const svgProps = gauge.getSVGProps();
    const gaugeOpacity = lerp(0, 100, value / 100);

    const { tip, base, points } = gauge.getNeedleProps({
        value,
        baseRadius: 12,
        tipRadius: 8,
    });

    return (
        <svg className="w-full overflow-visible" {...svgProps}>
            <defs>
                <filter id="ledGlow" width="50px" height="50px" x="-25px" y="-25px">
                    <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
                </filter>
                <filter
                    id="inset-shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="linearRGB"
                >
                    <feFlood floodColor="rgba(255, 255, 255, 1)" result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceAlpha"
                        operator="out"
                        result="composite1"
                    />
                    <feOffset dx="0" dy="0" in="composite1" result="offset" />
                    <feGaussianBlur
                        stdDeviation="2 2"
                        in="offset"
                        edgeMode="none"
                        result="blur"
                    />
                    <feComposite
                        in="blur"
                        in2="SourceAlpha"
                        operator="in"
                        result="composite2"
                    />
                    <feMerge result="merge">
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode in="composite2" />
                    </feMerge>
                </filter>
                <linearGradient
                    id="gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <stop stopColor="#FFFFFF" offset="0" />
                    <stop stopColor="#000000" offset="1" />
                </linearGradient>
            </defs>
            {/* <g>
                <ellipse
                    fill="lightYellow"
                    filter="url(#inset-shadow)"
                    opacity={0.1}
                    cx="0"
                    cy="0"
                    rx={diameter / 4 + 4}
                    ry={diameter / 4 + 4}
                />
                <ellipse
                    fill="#01C2EF"
                    opacity={gaugeOpacity / 100}
                    filter="url(#ledGlow)"
                    cx="0"
                    cy="0"
                    rx={diameter / 4 + 4}
                    ry={diameter / 4 + 4}
                />
                <ellipse
                    fill="#01C2EF"
                    opacity={gaugeOpacity / 100}
                    cx="0"
                    cy="0"
                    rx={diameter / 4 + 4}
                    ry={diameter / 4 + 4}
                />
                <ellipse
                    fill="lightYellow"
                    opacity={1}
                    cx="0"
                    cy="0"
                    rx={diameter / 4 - 8}
                    ry={diameter / 4 - 8}
                />
                <ellipse
                    fill="url(#gradient)"
                    className="mix-blend-soft-light"
                    opacity={0.15}
                    cx="0"
                    cy="0"
                    rx={diameter / 4 - 8}
                    ry={diameter / 4 - 8}
                />
                <text
                    x="0"
                    y="-30"
                    className="text-xl fill-orange font-bold"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    Capita Data
                </text>
                <text
                    x="0"
                    y="20"
                    className="text-2xl fill-orange font-bold"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    {capitaValue}
                </text>
            </g> */}
            <g>
                <text
                    x="0"
                    y="-30"
                    className="text-xl fill-orange font-bold"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    Capita Data
                </text>
                <text
                    x="0"
                    y="20"
                    className="text-2xl fill-orange font-bold"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    {capitaValue}
                </text>
            </g>
            <g id="ticks">
                {gauge.ticks.map((angle) => {
                    const ellipsePos = gauge.getTickProps({ angle, length: 154 });
                    const cx = ellipsePos.x2 - ellipsePos.x1;
                    const cy = ellipsePos.y2 - ellipsePos.y1;
                    const asValue = gauge.angleToValue(angle);

                    return (
                        <g key={`tick-group-${angle}`}>
                            <rect
                                // className="fill-white"
                                x={cx - 6}
                                y={cy - 6}
                                width={25}
                                height={12}
                                style={{
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            {asValue <= value && (
                                <rect
                                    fill="#01C2EF"
                                    opacity={0.8}
                                    filter="url(#ledGlow)"
                                    x={cx - 3}
                                    y={cy - 3}
                                    width={6}
                                    height={6}
                                    style={{
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    }}
                                />
                            )}
                            <rect
                                className={`light ${asValue <= value ? 'active' : ''}`}
                                fill="#01C2EF"
                                x={cx - 3}
                                y={cy - 3}
                                width={20}
                                height={6}
                                style={{
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                        </g>
                    );
                })}
            </g>
            <g id="needle">
                <line
                    stroke="#01C2EF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    filter="url(#ledGlow)"
                    x1={
                        (diameter / 8) * Math.cos(toRadians(gauge.valueToAngle(value) + 90))
                    }
                    y1={
                        (diameter / 8) * Math.sin(toRadians(gauge.valueToAngle(value) + 90))
                    }
                    x2={
                        (diameter / 6) * Math.cos(toRadians(gauge.valueToAngle(value) + 90))
                    }
                    y2={
                        (diameter / 6) * Math.sin(toRadians(gauge.valueToAngle(value) + 90))
                    }
                />
                <line
                    stroke="#01C2EF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    x1={
                        (diameter / 8) * Math.cos(toRadians(gauge.valueToAngle(value) + 90))
                    }
                    y1={
                        (diameter / 8) * Math.sin(toRadians(gauge.valueToAngle(value) + 90))
                    }
                    x2={
                        (diameter / 6) * Math.cos(toRadians(gauge.valueToAngle(value) + 90))
                    }
                    y2={
                        (diameter / 6) * Math.sin(toRadians(gauge.valueToAngle(value) + 90))
                    }
                />
            </g>
        </svg>
    );
}

export default function BlurryGauge({ value, capitaValue }) {
    const capitalValue = capitaValue.data
    console.log(capitalValue);
    return (
        // <div className="h-screen w-full flex flex-col items-center justify-center">
        <div>
            <Volume value={value} capitaValue={capitalValue} />
        </div>
        // </div>
    );
}
