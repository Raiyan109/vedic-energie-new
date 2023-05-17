import React from 'react';
import styled from 'styled-components';
import img from '../assets/article.png'
import greenWashingImg from '../assets/greenwashing.png'
import foodImg from '../assets/food.jpg'
import sustainReportImg from '../assets/sustain-report.jpg'
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
                            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                                <div className="overflow-hidden bg-white mb-10">
                                    <img
                                        src={greenWashingImg} alt='article'
                                        className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer'
                                    />
                                    <div className="p-6 text-left sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="#"
                                                className="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Green washing
                                            </a>
                                            <p className='text-md font-normal text-primary'>Published On December, 2022</p>
                                        </h3>
                                        <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                            Throughout the generations of advancement and capitalism which has led to world of perceptions, the perceptions portrayed by giant multinational companies. The idea behind such perception is playing with the human behaviour, that to make it expensive and ‘seems’ like legit. The era of mass production with cutting edge technology has no doubt led to the growth of economics, but it also creates a vicious cycle of cutting down the cost so much so that quality of the product degrades further, harming not just the society but also the nature. For long, this process has been rampant and to the fact both MNC’s and the society realised the impact of such product. The society became sceptical about such products and MNC’s tricked us with their ‘too good to be true products,’ ‘sustainable and eco-friendly’ products.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                                <div className="mb-10 overflow-hidden bg-white">
                                    <img
                                        src={foodImg}
                                        alt='article'
                                        className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer'
                                    />
                                    <div className="p-6 text-left sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="#"
                                                className="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Emissions from Food Industry
                                            </a>
                                            <p className='text-md font-normal text-primary'>Published On December, 2022</p>
                                        </h3>
                                        <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                            The food Industry is not just one of the largest industries but is very important too. As food is our daily requirement, but the Food Industry is causing hazards and harm to nature. The production of food articles involves the steps like growing, processing, packaging, storing, and transporting all these steps cause pollution to nature and contribute to greenhouse gases. Processes like cultivation results and the production of methane, nitrous oxide, carbon dioxide, and other gas which is caused by use of fertilizers, pesticides, and the cutting of forests.





                                            The very next step of the process is packaging which requires a lot of paper, aluminum, and other materials, the production of which is harmful to nature. The process does not end here, the transportation of food is also a threat to nature as it involves air pollution in the process of transportation. Also the storing of food involves refrigeration which produces gases like chlorofluorocarbons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                                <div className="mb-10 overflow-hidden bg-white">
                                    <img
                                        src={sustainReportImg}
                                        alt='article'
                                        className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer'
                                    />
                                    <div className="p-6 text-left sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="#"
                                                className="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Sustainability Reporting
                                            </a>
                                            <p className='text-md font-normal text-primary'>Published On December, 2022</p>
                                        </h3>
                                        <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                                            Sustainability reporting is a disclosure of a company’s progress towards its Environment, Social and Economic (ESG) goals. This report includes the approach to mitigate the dangers or adapt to them, and the financial implications involved in this procedure. Sustainability reporting allows companies to reflect on the three parameters and report in a transparent manner their positive and negative consequences. Being a sort of social responsibility, it can strengthen both brand reputation and profits. In a world of changing expectations, companies must hold accountability for the way they affect the society and environments where they run.



                                            Climate change, global warming, community health, education, empowerment and business sustainability are some of the most pressing issues of our time. Businesses cannot survive in the long run unless they operate in a lawful and socially responsible as well as sustainable manner.
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