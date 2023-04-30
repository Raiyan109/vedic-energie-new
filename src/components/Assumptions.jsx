import React from 'react';
import { BsQuestionLg } from 'react-icons/bs'
import styled from 'styled-components';

const Assumptions = () => {
    const Section = styled.div`
    .tooltip {
        position: relative;
      }
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 190px;
        background-color: #fff;
        color: #FFB951;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #1D6126 transparent transparent transparent;
      }
      
      .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
      }
    `
    return (
        <Section>
            <div className='flex justify-start items-center'>
                <button className='w-6 h-6 bg-lightGreen rounded-full flex justify-center items-center text-xl text-rgbaHeader tooltip'>
                    <BsQuestionLg className='text-white' />
                    <span className="tooltiptext">Tooltip text</span>
                </button>
            </div>

        </Section>
    );
};

export default Assumptions;