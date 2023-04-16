import React, { useRef, useState } from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import img1 from '../assets/solar-panels.png'

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Section = styled.div`
height:100vh;
background-color:#FFB951;
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
`
const EnergyResidency = () => {
    return (
        <Section>
            <Swiper pagination={{ clickable: true }} autoplay={{delay : 900}}  modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <section id="about" className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold sm:text-6xl text-white lg:leading-loose leading-12">Energy Supply Solution For Residency.

                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12 text-green">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>

                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={img1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide> slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>

            </Swiper>
        </Section>
    );
};

export default EnergyResidency;