import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
           <section className='container mx-auto flex items-center h-full p-32' >
           <div className="flex w-full grid grid-cols-1 gap-6 overflow-hidden bg-white rounded-lg shadow-lg">
            {
              data.map(solar=>
                <div key={solar.id} className="flex overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="w-1/3 bg-cover" style={{backgroundImage: `url(${solar.image})`}} />
                <div className="w-2/3 p-4 md:p-4">
                  <h1 className="text-xl font-bold text-gray-800 my-2">{solar.name}</h1>
                  <p className='text-md'>
                    {solar.pros}
                  </p>
                  <p className=" text-md font-semibold text-gray-600 my-2">Price: {solar.price}</p>
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