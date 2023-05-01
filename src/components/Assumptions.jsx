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
        width: 130px;
        font-size:10px;
        background-color: #fff;
        color: #FFB951;
        
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 90px;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 0;
        left: -100px;
        margin-left: -5px;
      
        width: 10px;
        height: 0;
        
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
          <span className="tooltiptext">AC demand estimate(electric cooling and heating which consumes 4000 watt units)</span>
        </button>
      </div>

    </Section>
  );
};

export default Assumptions;