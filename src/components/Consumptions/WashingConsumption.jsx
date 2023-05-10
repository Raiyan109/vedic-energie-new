import React from 'react';
import styled from 'styled-components';
import { WashingMachineConsTimes } from '../../constants';

const Section = styled.div`
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    color:#FEFFCD;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
 }
 select::-ms-expand {
    display: none;
 }
 .select {
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
`
const WashingConsumption = ({ washingSelectedConsumptionTime, isWashingOn, handleConsumptionTimeSelect }) => {
    return (
        <>
            <Section>
                <select name="watt" id="watt" value={washingSelectedConsumptionTime}
                    disabled={!isWashingOn}
                    onChange={handleConsumptionTimeSelect}
                    className='w-36 h-8 bg-lightGreen rounded-md flex justify-center items-center text-xl text-rgbaHeader select'>

                    {
                        WashingMachineConsTimes.map((range, idx) => (
                            <option value={range.range}>{range.name}</option>
                        ))
                    }
                </select>
            </Section>
        </>
    );
};

export default WashingConsumption;