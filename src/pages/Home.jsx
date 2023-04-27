import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Efficient from '../components/Efficient';
import EnergyResidency from '../components/EnergyResidency';
import Upcoming from '../components/Upcoming';
import Client from '../components/Client';
import See from '../components/See';
import Articles from '../components/Articles';
import Brands from '../components/Brands';
import Affiliate from '../components/Affiliate';
import BackToTopButton from '../components/BackToTopButton';


const Home = () => {
    return (
        <div className='font-Poppins'>
            <Header />
            <Banner />
            <Efficient />
            <EnergyResidency />
            <Upcoming />
            <Affiliate />
            {/* <Client />
            <Brands /> */}
            <See />
            <Articles />
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default Home;