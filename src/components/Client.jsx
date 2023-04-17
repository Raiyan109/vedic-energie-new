import React, { useRef, useState } from "react";
import bg from '../assets/bg.png'
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { BsFillStarFill } from 'react-icons/bs'

const Section = styled.div`
height:100vh;
background-image: url(${bg});
scroll-snap-align:center;
.swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    
  
    /* Center slide text vertically */
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

import { Navigation, Pagination, Scrollbar,Autoplay } from "swiper";

const Client = () => {
    return (
        <Section className="">
            <Swiper navigation={true} pagination={{ clickable: true }} autoplay={{delay: 900}} modules={[Navigation, Pagination, Scrollbar, Autoplay]} className="mySwiper bg-cover bg-center bg-no-repeat p-8">
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
                        <h1 className="text-5xl font-bold text-green">What Our Clients Say
                        </h1>
                        <div className="flex gap-4 p-6 text-orange text-3xl">
                            <BsFillStarFill className="" />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                        </div>
                        <p className="py-6 lg:w-2/3 mx-auto leading-relaxed text-green font-thin">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                            anything embarrassing hidden in the middle of text.</p>
                        <p className='py-6 text-green font-semibold'>- Danny</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>

            </Swiper>
        </Section>
    );
};

export default Client;