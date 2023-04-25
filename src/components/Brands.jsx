import React from 'react';
import brand from '../assets/emblem.png'
const Brands = () => {
    return (
        <div>
            <section class="bg-orange py-36">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="flex flex-wrap items-center justify-center">
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