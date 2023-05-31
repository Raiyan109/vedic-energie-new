import React from 'react';
import styled from 'styled-components';
import img from '../assets/article.png'
import greenWashingImg from '../assets/greenwashing.png'
import foodImg from '../assets/food_1024x577.jpg'
import sustainReportImg from '../assets/sustain-report_1024x577.jpg'
import { Link } from 'react-router-dom';
import { Blogs } from '../constants';
import Article from './Article';

const Section = styled.div`

scroll-snap-align:center;
`
const Articles = () => {
    return (
        <Section className='bg-gradient-to-b from-[#abb6f0] via-[#879af5] to-lightBlue'>

            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <h1 id='article' className="text-3xl font-bold text-blue">Recent Articles</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-20">
                            {
                                Blogs.map(article =>
                                    <Article key={article.id} article={article} id={article.id} />
                                )
                            }
                        </div>

                        {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px] bg-white">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src={foodImg}
                                        alt="image"
                                        className="w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                                    />
                                </div>
                                <div className='p-4'>
                                    <h3>
                                        <a
                                            href="#"
                                            className="text-green hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            Emissions from Food Industry
                                        </a>
                                    </h3>
                                    <p className='text-md font-normal text-green'>Published On December, 2022</p>
                                    <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                        The food Industry is not just one of the largest industries but is very important too. As food is our daily requirement, but the Food Industry is causing hazards and harm to nature. The production of food articles involves the steps like growing, processing, packaging, storing, and transporting all these steps cause pollution to nature and contribute to greenhouse gases. Processes like cultivation results and the production of methane, nitrous oxide, carbon dioxide, and other gas which is caused by use of fertilizers, pesticides, and the cutting of forests. The very next step of the process is packaging which requires a lot of paper, aluminum, and other materials, the production of which is harmful to nature. The process does not end here, the transportation of food is also a threat to nature as it involves air pollution in the process of transportation.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px] bg-white">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src={sustainReportImg}
                                        alt="image"
                                        className="w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                                    />
                                </div>
                                <div className='p-4'>
                                    <h3>
                                        <a
                                            href="#"
                                            className="text-green hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            Sustainability Reporting
                                        </a>
                                    </h3>
                                    <p className='text-md font-normal text-green'>Published On December, 2022</p>
                                    <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                        Sustainability reporting is a disclosure of a company’s progress towards its Environment, Social and Economic (ESG) goals. This report includes the approach to mitigate the dangers or adapt to them, and the financial implications involved in this procedure. Sustainability reporting allows companies to reflect on the three parameters and report in a transparent manner their positive and negative consequences. Being a sort of social responsibility, it can strengthen both brand reputation and profits. Businesses cannot survive in the long run unless they operate in a lawful and socially responsible as well as sustainable manner.
                                        Businesses cannot survive in the long run unless they operate in a lawful and socially responsible as well as sustainable manner.
                                        Businesses cannot survive in the long run unless they operate.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>


        </Section>
    );
};

export default Articles;