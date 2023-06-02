import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { Blogs } from '../constants';

const ArticleDetail = () => {
    const { id } = useParams()


    const blogs = Blogs.find((item) => {
        return item.id === parseInt(id)
    })
    console.log(blogs);

    if (!blogs) {
        return (
            <section className='h-screen flex justify-center items-center'>
                Loading...
            </section>
        )
    }

    const { image, title, date, body } = blogs

    return (
        <>
            <Header />
            <div className='bg-gradient-to-b from-[#abb6f0] via-[#879af5] to-lightBlue'>
                <div className='py-20'>
                    <div className='container mx-auto py-10'>
                        <div className='flex flex-col'>
                            <div className='p-9'>
                                <img src={image} alt="" />
                            </div>

                            <div className='flex justify-center items-center p-9'>
                                <h1 className='text-5xl font-semibold text-green'>{title}</h1>
                            </div>
                            <h4 className='text-sm text-center text-green'>Published on {date}</h4>
                            <div className='p-6 text-2xl leading-10'>
                                <p>{body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticleDetail;