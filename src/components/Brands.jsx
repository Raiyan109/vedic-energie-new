import React from 'react';
import brand from '../assets/3d-fluency-recycling.png'
const Brands = () => {
    return (
        <div>
            <section class="bg-orange py-20 lg:py-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="flex flex-wrap items-center justify-center">
                                <a
                                    href="#"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={brand} width="130" height="130" alt="" />
                                </a>
                                <a
                                    href="#"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={brand} width="130" height="130" alt="" />
                                </a>
                                <a
                                    href="#"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={brand} width="130" height="130" alt="" />
                                </a>
                                <a
                                    href="#"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={brand} width="130" height="130" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;