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
import Footer from '../components/Footer';
import SendMail from './SendMail/SendMail';


const Home = () => {
    return (
        <div className='font-Poppins overflow-x-hidden'>
            <Header />
            <Hero />
            {/* <Banner /> */}
            <Efficient />
            <EnergyResidency />
            <Upcoming />
            {/* <Affiliate /> */}
            {/* <Client />
            <Brands /> */}
            <See />
            <Articles />
            <SendMail/>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default Home;