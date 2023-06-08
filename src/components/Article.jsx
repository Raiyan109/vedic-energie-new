import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article, id }) => {
    return (
        <div>
            <div key={article.id} className="mx-auto mb-10 max-w-[370px] bg-white">
                <div className="mb-8 overflow-hidden rounded">
                    <img
                        src={article.image}
                        alt="image"
                        className="w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    />
                </div>
                <div className='p-4'>
                    <h3>
                        <a
                            href="#"
                            className="text-blue hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {article.title}
                        </a>
                    </h3>
                    <p className='text-md font-normal text-blue'>{article.date}</p>
                    <p className="text-primary mb-7 text-sm leading-relaxed py-10">
                        {article.body}
                    </p>
                    <Link to={`/blog/${id}`} ><button className='text-blue text-xs text-right'>See details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Article;