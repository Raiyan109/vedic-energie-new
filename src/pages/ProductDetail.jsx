import React, { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
    const {id}=useParams();
    const [productDetails,setProductDetails]=useState([]);
    useEffect(()=>{
        fetch(`https://vedic-energie-server-6c3c7yp8s-polyakhtar.vercel.app/productdetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProductDetails(data)
        })
    },[])
    return (
        <div className=''>
            <Header/>
            <section className='bg-blue mx-auto lg:p-32 text-white'>
             {
                productDetails.map(product=><div key={product._id}>
                    <div className='lg:flex'>
                    <div className='lg:w-1/2 w-full mr-10 lg:p-0 p-8 pt-32'>
                        <img src={product.productImage} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full lg:p-0 p-8'>
                     <h1 className='text-2xl text-yellow font-semibold'>{product.productName}</h1>
                     <p className='my-3'>
                        <span>Brand: </span>
                        <span>{product.brand}</span>
                     </p>
                     <div className='my-5'>
                        <h3 className='font-semibold text-yellow'>{product.hp1}</h3>
                        <p className='my-2'>{product.p1}</p>
                        <h3 className='font-semibold text-yellow'>{product.hp2}</h3>
                        <p className='my-2'>{product.p2}</p>
                        <h3 className='font-semibold text-yellow'>{product.hp3}</h3>
                        <p className='my-2'>{product.p3}</p>
                        <h3 className='font-semibold text-yellow'>{product.hp4}</h3>
                        <p className='my-2'>{product.p4}</p>
                        <p className='my-2'>{product.p5}</p>
                        <p className='my-2'>{product.p6}</p>
                        <p className='my-2'>{product.p7}</p>
                        <p className='my-2'>{product.p8}</p>
                        <p className='my-2'>{product.p9}</p>
                     </div>
                     <p className='my-2'>
                        <span className='font-semibold'>{product.pack}</span>
                     </p>
                     <p>
                        <span className='mr-2'>MRP: </span>
                        <span className='line-through mr-2'>{product.oldPrice} </span>
                        <span className='mr-2'>{product.newPrice}</span>
                        <span className='text-yellow'>{product.inclusive}</span>
                     </p>
                     <div className='my-6'>
                     <button className='px-3 py-1 bg-orange uppercase font-semibold text-sm text-black hover:bg-yellow hover:transition-all mr-2'>Add to cart</button>

                <button
                className='px-3 py-1 bg-orange uppercase font-semibold text-sm text-black hover:bg-yellow hover:transition-all mr-2'>Buy Now</button>
                
                        <button
                className='px-3 py-1 bg-orange uppercase font-semibold text-sm text-black hover:bg-yellow hover:transition-all'> <Link to='/getAQuote'>Contact Us</Link> </button>
                
                     </div>
                     <p className='text-sm'>
                        <p className='my-1'>{product.para}</p>
                        <p className='my-1'>{product.para1}</p>
                     </p>
                     </div>
                     </div>
                     <div className='lg:p-0 p-8'>
                        <h1 className='text-2xl text-yellow font-semibold text-center lg:my-12'>Description</h1>
                        <h2 className='text-3xl text-yellow font-semibold my-6'>{product.productName}</h2>
                        <p className='my-3'>{product.para2}</p>
                        <p className='my-2'>{product.para3}</p>
                        <p className='my-2 text-yellow'>{product.eligibility}</p>
                        <p className='my-2'>
                        <p>{product.pb1}</p>
                        <p>{product.pb2}</p>
                        </p>
                        <div>
                            <h3 className='text-2xl text-yellow font-semibold my-3'>{product.features}</h3>
                            <p className='my-2'>
                                <h4 className='text-yellow'>{product.hb2}</h4>
                                <p>{product.bp2}</p>
                                </p>
                                <p className='my-2'>
                                <h4 className='text-yellow'>{product.hb3}</h4>
                                <p>{product.bp3}</p>
                                </p>
                                <h4 className='text-yellow'>{product.hb4}</h4>
                                <p>{product.bp4}</p>
                                <p className='my-1'>{product.b1}</p>
                                <p className='my-1'>{product.b2}</p>
                                <p className='my-1'>{product.b3}</p>
                                <p className='my-1'>{product.b4}</p>
                                <p className='my-1'>{product.b5}</p>
                                <p className='my-1'>{product.b6}</p>
                                <p className='my-1'>{product.b71}</p>
                        </div>
                        <div className='my-3'>
                        <h3 className='text-2xl text-yellow font-semibold my-3'>{product.advantage}</h3>
                                <p className='my-1'>{product.ab1}</p>
                                <p className='my-1'>{product.ab2}</p>
                                <p className='my-1'>{product.ab3}</p>
                                <p className='my-1'>{product.ab4}</p>
                         </div>
                        <div>
                            <h3 className='text-2xl text-yellow font-semibold my-3'>{product.efficiency}</h3>
                            <p>{product.ep}</p>
                            <h3 className='text-2xl text-yellow font-semibold my-3'>{product.protection}</h3>
                            <p>{product.pp}</p>
                            <h3 className='text-2xl text-yellow font-semibold my-3'>{product.atmosphere}</h3>
                            <p>{product.ap}</p>
                        </div>
                        <div className='my-3'>
                        <p className='text-yellow font-semibold my-2'>{product.g1}</p>
                        <p className='text-yellow font-semibold my-2'>{product.g2}</p>
                        <p className='text-yellow font-semibold my-2'>{product.applications}</p>
                        </div>
                        <p className='text-2xl text-yellow font-semibold my-3'>{product.warranty}</p>
                            <p className='my-1'>{product.b7}</p>
                            <p className='my-1'>{product.b8}</p>
                            <p className='text-2xl text-yellow font-semibold my-1'>{product.range}</p>
                            <p className='my-1'>{product.b9}</p>
                            <p className='my-1'>{product.wp}</p>
                     </div>
                     
                    </div>
                    )
            }
            </section>
            <Footer/>
        </div>
    );
};

export default ProductDetail;