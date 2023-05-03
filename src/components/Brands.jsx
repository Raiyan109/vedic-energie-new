import React from 'react';
import brand from '../assets/emblem.png'
const Brands = () => {
    return (
        <div>
            <section className="bg-orange py-36">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="flex flex-wrap items-center justify-center">
                                <img src={brand} width="220" style={{ marginRight: "60px" }} height="170" alt="brand" />
                                <img src={brand} width="220" style={{ marginRight: "60px" }} height="170" alt="brand" />
                                <img src={brand} width="220" style={{ marginRight: "60px" }} height="170" alt="brand" />
                                <img src={brand} width="220" style={{ marginRight: "60px" }} height="170" alt="brand" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;