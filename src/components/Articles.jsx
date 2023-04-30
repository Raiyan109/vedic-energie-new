import React from 'react';
import styled from 'styled-components';
import img from '../assets/article.png'

const Section = styled.div`

scroll-snap-align:center;
`
const Articles = () => {
    return (
        <Section className='bg-gradient-to-b from-yellow via-lightGreen to-green'>
            <div className='flex flex-col justify-center items-center mb-4'>

                <h1 id='article' className="text-3xl font-bold text-green" style={{ marginTop: "70px" }}>Recent Articles

                </h1>
                <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-10">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                                <div className="overflow-hidden bg-white mb-10">
                                    <img
                                        src={img} alt='article'
                                    />
                                    <div className="p-6 text-left sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="#"
                                                className="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Sustainable Fashion
                                            </a>
                                            <p className='text-md font-normal text-primary'>Published On December, 2022</p>
                                        </h3>
                                        <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is
                                            that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here',
                                            making it look like readable English. Many desktop
                                            publishing packages and web page editors now use
                                            Lorem Ipsum as their default model text, and a search
                                            for 'lorem ipsum' will uncover many web sites still in
                                            their infancy. Various versions have evolved over the
                                            years, sometimes by accident, sometimes on purpose
                                            (injected humour and the like).
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                                <div className="mb-10 overflow-hidden bg-white">
                                    <img
                                        src={img}
                                        alt='article'
                                    />
                                    <div className="p-6 text-left sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="#"
                                                className="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Sustainable Fashion
                                            </a>
                                            <p className='text-md font-normal text-primary'>Published On December, 2022</p>
                                        </h3>
                                        <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is
                                            that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here',
                                            making it look like readable English. Many desktop
                                            publishing packages and web page editors now use
                                            Lorem Ipsum as their default model text, and a search
                                            for 'lorem ipsum' will uncover many web sites still in
                                            their infancy. Various versions have evolved over the
                                            years, sometimes by accident, sometimes on purpose
                                            (injected humour and the like).
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                                <div className="mb-10 overflow-hidden bg-white">
                                    <img
                                        src={img}
                                        alt='article'
                                    />
                                    <div className="p-6 text-left sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="#"
                                                className="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Sustainable Fashion
                                            </a>
                                            <p className='text-md font-normal text-primary'>Published On December, 2022</p>
                                        </h3>
                                        <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is
                                            that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here',
                                            making it look like readable English. Many desktop
                                            publishing packages and web page editors now use
                                            Lorem Ipsum as their default model text, and a search
                                            for 'lorem ipsum' will uncover many web sites still in
                                            their infancy. Various versions have evolved over the
                                            years, sometimes by accident, sometimes on purpose
                                            (injected humour and the like).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Section>
    );
};

export default Articles;