import React from 'react';

const RangeSlider = ({ value, handleRange }) => {
    return (
        <div>
            <fieldset className="flex flex-nowrap items-center max-w-xs space-x-2 dark:text-gray-100">
                <label for="No of people in your home">
                    <input id="slider" type="range"
                        min='1'
                        max='10'
                        defaultValue={value}
                        onChange={handleRange}
                        className="w-full h-2 rounded-lg cursor-pointer accent-lightYellow" />
                </label>
            </fieldset>
        </div>
    );
};

export default RangeSlider;