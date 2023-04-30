import React, { useEffect, useRef, useState } from 'react';
import { customMachines } from '../constants';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const CustomMachines = () => {
    const [isOpenCustomMachine, setIsOpenCustomMachine] = useState(false)
    const [selectedCustomMachine, setSelectedCustomMachine] = useState('')

    const clickOutsideRef = useRef()

    useEffect(() => {
        const clickOutsideHandler = (e) => {
            if (!clickOutsideRef.current.contains(e.target)) {
                setIsOpenCustomMachine(false)
            }
            document.addEventListener('mousedown', clickOutsideHandler)

            return () => {
                document.removeEventListener('mousedown', clickOutsideHandler)
            }
        }
    }, [])
    return (
        <div>
            <div
                className='w-full h-8 font-medium z-20 mb-3'>
                <div
                    ref={clickOutsideRef}
                    onClick={() => setIsOpenCustomMachine(!isOpenCustomMachine)}
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
                </div>
                <ul className={`bg-lightGray mt-2 overflow-y-auto text-blue ${isOpenCustomMachine ? 'max-h-60' : 'max-h-0'}`}>
                    {customMachines.map((item, index) => (
                        <li
                            key={index}
                            className={`p-2 text-sm cursor-pointer hover:bg-yellow hover:text-black 
                                                ${item.name.toLowerCase() === selectedCustomMachine.toLowerCase() && 'bg-yellow text-black'}
                                                `}
                            onClick={() => {
                                if (item.name.toLowerCase() !== selectedCustomMachine.toLowerCase()) {
                                    setSelectedCustomMachine(item.name)
                                    setIsOpenCustomMachine(false)
                                }
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomMachines;