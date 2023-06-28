import React from 'react';
import styled from 'styled-components';

const SolarPanelCapSlider = ({ value, handleSolarPanelCapacityRange, min, max, text }) => {
    return (
        <div className='pt-3'>
            {/* <span className='text-lightYellow text-md'>{text}</span> */}
            <fieldset className="flex flex-nowrap items-center max-w-xs space-x-2 py-2">
                <label htmlFor="No of people in your home">
                    <Slider id="slider" type="range"
                        list="markers"
                        min={min}
                        max={max}
                        step='10'
                        defaultValue={value}
                        onChange={handleSolarPanelCapacityRange}
                        className="" />
                    {/* <datalist id="markers">
                        <option value="0"></option>
                        <option value="25"></option>
                        <option value="50"></option>
                        <option value="75"></option>
                        <option value="100"></option>
                    </datalist> */}
                </label>
            </fieldset>
        </div>
    );
};

export default SolarPanelCapSlider;

const Slider = styled.input`
// -webkit-appearance:none;
// width:100%;
// height:6px;
// border-radius:4px;
// background-color:#FEFFCD;
// outline:none;
// opacity:1;
// --webkit-transition:0.2s;
// transition:opacity 0.2s;

// ::-webkit-slider-thumb{
//     -webkit-appearance:none;
//     appearance:none;
//     width:16px;
//     height:16px;
//     border-radius:50%;
//     background:#C1F4C8;
//     cursor:pointer;
// }

// ::-moz-range-thumb{
//     -webkit-appearance:none;
//     appearance:none;
//     width:16px;
//     height:16px;
//     border-radius:50%;
//     background:#C1F4C8;
//     cursor:pointer;
}
`