import React, { useState } from 'react';

const SummerSwitch = () => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`flex w-20 h-8 rounded-full transition-all duration-500 cursor-pointer  ${isSelected ? 'bg-yellow' : 'bg-deepGray'}`}>
            <span className={`h-8 w-8  rounded-full transition-all duration-500 shadow-lg ${isSelected && 'ml-12'} ${isSelected ? 'bg-orange' : 'bg-green'}`} ></span>
        </div>
    );
};

export default SummerSwitch;