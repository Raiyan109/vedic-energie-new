import React from 'react';

import Header from '../components/Header';

import Efficient from '../components/Efficient';
import EnergyResidency from '../components/EnergyResidency';
import Upcoming from '../components/Upcoming';
import See from '../components/See';
import Articles from '../components/Articles';
import Affiliate from '../components/Affiliate';
import BackToTopButton from '../components/BackToTopButton';
import Hero from '../components/Hero';
import Footer3 from '../components/Footer3';


const Home = () => {
    return (
        <div className='font-Poppins overflow-x-hidden'>
            <Header />
            <Hero />
            {/* <Banner /> */}
            <Efficient />
            <EnergyResidency />
            <Upcoming />
            <Affiliate />
            {/* <Client />
            <Brands /> */}
            <See />
            <Articles />
            <Footer3 />
            <BackToTopButton />
        </div>
    );
};

export default Home;