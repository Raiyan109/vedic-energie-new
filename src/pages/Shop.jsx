import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Shop = () => {
 const [data, setData] = useState([]);
 useEffect(() => {
  fetch('https://vedic-energie-server-6c3c7yp8s-polyakhtar.vercel.app/products')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
 }, []);

    return (
        <div className=' '>
            <Header />
            <section className='bg-blue mx-auto flex items-center h-full lg:p-32 pb-10 pt-32' >
                <div className="flex lg:w-2/3 mx-2 lg:mx-auto grid grid-cols-1 gap-6 overflow-hidden rounded-lg shadow-lg">
                    {
                        data.map(solar => (
                            <div key={solar._id} className="flex overflow-hidden bg-white rounded-lg shadow-lg">
                                <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${solar.image})`, backgroundSize: '100% 100%' }} />
                                <div className="lg:w-2/3 w-full p-4 md:p-4">
                                    <h1 className="text-xl font-bold text-gray-800 my-2">{solar.name}</h1>
                                    <p className='text-md'>
                                        {solar.pros}
                                    </p>
                                    <p className="text-md font-semibold text-gray-600 my-2">Old Price: {solar.oldPrice}</p>
                                    <p className="text-md font-semibold text-gray-600 my-2">New Price: {solar.newPrice}</p>
                                    <Link to={`/shop/${solar._id}`}>
                                        <button className='bg-blue text-white rounded-md px-2 py-1 text-sm'>READ MORE</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Shop;






