import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../assets/solarbg2.png'
const Shop = () => {
 const [data,setData]=useState([]);
 useEffect(()=>{
  fetch('shopdata.json')
  .then(res=>res.json())
  .then(data=>{
    setData(data)
  })
 },[])
    return (
        <div className=''>
            <Header/>
           <section className=' flex items-center h-full bg-cover bg-center bg-no-repeat p-32  ' style={{ backgroundImage: `url(${bg})` }}>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
            {
              data.map(solar=>
                <div key={solar.id} className='container flex flex-col item-center justify-center m-4'>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={solar.image} alt="avatar" />
        <div className="py-5 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800" tabIndex={0} role="link">{solar.name}</a>
          <span className="text-sm text-gray-700 dark:text-gray-200">{solar.price}</span>
        </div>
      </div>
            </div>
                )
            }
            </div>
           </section>
            <Footer/>
        </div>
    );
};

export default Shop;