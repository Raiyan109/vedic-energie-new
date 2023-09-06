import React from 'react';

const AddButton = ({ text }) => {
    return (
        <div className='flex justify-center items-center'>
            <button className='py-4 rounded-md lg:w-44 md:w-1/3 w-full text-center border-white text-blue bg-[#F0EFFF] hover:bg-lightBlue hover:transition-all'>{text}</button>
        </div>
    );
};

export default AddButton;