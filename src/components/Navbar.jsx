import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-9'>
            <Link to='/'>
                <h1>Vedic</h1>
            </Link>
            <ul className='flex'>
                <li className='px-[1rem]'><Link className='text-xl font-bold' to='/about'>About</Link></li>
                <li className='px-[1rem]'><Link className='text-xl font-bold' to='/services'>Services</Link></li>
                <li className='px-[1rem]'><Link className='text-xl font-bold' to='/blog'>Blog</Link></li>
                <li className='px-[1rem]'><Link className='text-xl font-bold' to='/contact'>Contact</Link></li>
                <li className='px-[1rem]'><Link className='text-xl font-bold' to='/about'>About</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;