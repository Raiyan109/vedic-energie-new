import React, { useEffect, useRef, useState } from 'react';
import { customMachines } from '../constants';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const CustomMachines = () => {
    let [isOpenCustomMachine, setIsOpenCustomMachine] = useState(false)
    const [selectedCustomMachine, setSelectedCustomMachine] = useState('')

    // let closeOutsideRef = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', () => {
            setIsOpenCustomMachine(false)
        })
        // let handler = (e) => {
        //     if (!closeOutsideRef.current.contains(e.target)) {
        //         setIsOpenCustomMachine(false)
        //         console.log(closeOutsideRef.current);
        //     }
        // }
        // document.addEventListener("mousedown", handler)

        // return () => {
        //     document.removeEventListener("mousedown", handler)
        // }
    })
    return (
        <div>
            {/* <div className='w-full h-8 font-medium mb-3'> */}
            {/* <div onClick={() => setIsOpenCustomMachine(!isOpenCustomMachine)}
                    className='w-full mt-8 flex items-center justify-between text-blue'>
                    {selectedCustomMachine
                        ? selectedCustomMachine
                        : 'Select Machine'}
                    {
                        !isOpenCustomMachine ?
                            (
                                <div className='bg-blue h-3 w-3 rounded-full flex justify-center items-center'>
                                    <AiOutlineDown className='text-white h-2' />
                                </div>
                            )
                            :
                            (
                                <div className='bg-blue h-3 w-3 rounded-full flex justify-center items-center'>
                                    <AiOutlineUp className='text-white h-2' />
                                </div>
                            )
                    }
                </div> */}
            {/* {
                    isOpenCustomMachine &&
                    <ul className={`bg-lightGray mt-2 overflow-y-auto text-blue ${isOpenCustomMachine ? 'max-h-60' : 'max-h-0'}`}>
                        {customMachines.map((item, index) => (
                            <li
                                key={index}
                                className='p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black'

                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                } */}

            {/* <ul className={`bg-lightGray mt-2 overflow-y-auto text-blue ${isOpenCustomMachine ? 'max-h-60' : 'max-h-0'}`}>
                    {customMachines.map((item, index) => (
                        <li
                            key={index}
                            className='p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black'
                        // onClick={() => {
                        //     if (item.name.toLowerCase() !== selectedCustomMachine.toLowerCase()) {
                        //         setSelectedCustomMachine(item.name)
                        //         setIsOpenCustomMachine(false)
                        //     }
                        // }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul> */}
            {/* </div> */}
            {/*  */}

            <div>
                <div class="">
                    <select class="text-lg font-bold rounded  text-gray-600 h-14 w-60 pl-5 pr-10 bg-gray  focus:outline-none focus:border-none appearance-none border-none ">
                        <option>Heater</option>
                        <option>Cooler</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CustomMachines;