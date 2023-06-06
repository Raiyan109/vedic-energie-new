import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = () => {
    return (
        <div className='absolute top-32'>
            <button className='w-[137px] h-[50px] bg-orange rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-lightYellow hover:text-orange hover:transition-all'><Link to={-1}>Go back</Link></button>
        </div>
    );
};

export default BackToHome;