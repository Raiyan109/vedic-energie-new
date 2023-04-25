import React, { useReducer, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsFillSunFill } from 'react-icons/bs'
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import Toggle from '../components/Toggle';
import Input from '../components/Input';
import CircleProgressBar from '../components/CircleProgressBar';

const EnergyCalculation = () => {



    return (
        <div>
            <Header />
            <CircleProgressBar />
            <Footer />
        </div>
    );
};

export default EnergyCalculation;