import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Spinner = () => (
    <div className="mx-auto border-t-4 border-yellow border-solid border-1/4 w-16 h-16 rounded-full animate-spin">
      {/* Add your spinner design or loading text here */}
  </div>
  );
  
const Shop = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://vedic-energie-server-6c3c7yp8s-polyakhtar.vercel.app/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className=' '>
            <Header />
            <section className='bg-blue mx-auto flex items-center h-full lg:p-32 pb-10 pt-32' >
            {loading ? (
                    <Spinner /> // Show spinner when loading is true
                ) : (

                <div className="flex lg:mx-auto mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 overflow-hidden rounded-lg shadow-lg">
                    {
                        data.map(solar => (
                            <div key={solar._id} className="flex overflow-hidden rounded-lg shadow-lg">
                                <div className="w-full max-w-xs overflow-hidden bg-yellow">
                                    <div className="h-56 relative">
                                        <img className="object-cover w-full h-full" src={solar.image} alt="avatar" />
                                    </div>
                                    <div className="py-5 my-2">
                                        <a href="#" className="block text-xl font-bold text-center" tabIndex={0} role="link">{solar.name}</a>
                                        <span className="text-sm text-black font-semibold mx-6 my-2">
                                            <span className='mr-2'>Price: </span>
                                            <span className='line-through mr-2'>{solar.oldPrice} </span>
                                            <span className='mr-2'>{solar.newPrice}</span>
                                        </span>
                                        <div className='my-3 text-center flex justify-center'> {/* Use flex and justify-center for horizontal alignment */}
                                            <Link to={`/shop/${solar._id}`}>
                                                <button className='bg-blue text-white rounded-md px-2 py-1 text-sm'>READ MORE</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default Shop;






