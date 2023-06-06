import React, { useRef, useState } from "react";
import styled from 'styled-components';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';
import img1 from '../assets/solar-panels.png'

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Section = styled.div`

background-color:#2F45B7;
scroll-snap-align:center;
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #FFB951;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media only screen and (max-width:700px){
    height:130vh;
    padding-top:17px;
  
}
`
const EnergyResidency = () => {
    return (
        <Section>

            <section id="energyRes">
                <div className="container flex flex-col justify-center px-4 mx-auto lg:py-24 py-12 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center py-6 lg:px-2 md:px-6 px-2 text-center rounded-sm lg:max-w-md lg:text-left">
                        <h1 className="lg:text-5xl md:text-5xl font-bold text-4xl text-white lg:leading-loose leading-12">
                            Why choose Vedic Energie?
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-white">
                            Firstly, we with our clients try to identify the loop holes. Then
                            the energy saving services and measures are customized
                            according to the clients requirement. Finally, the
                            implementation of services/products that Vedic Energie
                            offers you, including:
                        </p>
                        <div className="text-white flex lg:justify-start md:justify-center justify-center items-center">
                            <ul className="list-disc flex flex-col justify-center items-start">
                                <li>Solar panel Consultation</li>
                                <li>Energy Calculator</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={img1} alt="energy-residency" className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" style={{
                            boxShadow: '17px 15px 35px 8px white',

                        }} />
                    </div>
                </div>
            </section>
            {/* <Swiper pagination={{ clickable: true }} autoplay={{ delay: 900 }} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    
                </SwiperSlide>



            </Swiper> */}
        </Section>
    );
};

export default EnergyResidency;