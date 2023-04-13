import React from 'react';

const Input = () => {
    return (
        <div>


            <div className="flex">

                <input type="text" name="url" id="url" placeholder="" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset dark:border-green dark:text-white dark:bg-green focus:ring-orange" autocomplete="off" />
            </div>

        </div>
    );
};

export default Input;