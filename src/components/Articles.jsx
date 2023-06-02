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

            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 px-4">
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
                    </div>
                </div>
            </section>


        </Section>
    );
};

export default Articles;