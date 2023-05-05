import React from 'react';
import { Link } from 'react-router-dom';

const LetsGoButton = () => {
    return (
        <div className='pt-6'>
            <Link to='#perCapitaChart' smooth>
                <button className='w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Lets Go</button>
            </Link>
        </div>
    );
};

export default LetsGoButton;