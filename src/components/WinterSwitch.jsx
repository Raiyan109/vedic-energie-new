import React from 'react';
import styled from 'styled-components';

const WinterSwitch = () => {
    const Section = styled.div`
    input:checked {
        background-color: #22c55e; /* bg-green-500 */
      }
    
      input:checked ~ span:last-child {
        --tw-translate-x: 1.75rem; /* translate-x-7 */
      }
    `

    return (
        <Section>
            <label className="flex items-center relative w-max cursor-pointer select-none">

                <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue bg-yellow" />
                <span className="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
                <span className="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
                <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray" />
            </label>
        </Section>
    );
};

export default WinterSwitch;