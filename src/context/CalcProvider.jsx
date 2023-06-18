import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { calcReducer, initialState } from '../state/CalcState/calcReducer';

export const CALC_CONTEXT = createContext()

const CalcProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calcReducer, initialState)

    const [step1Data, setStep1Data] = useState([])
    const [step2Data, setStep2Data] = useState([])

    useEffect(() => {
        const fetchStep1 = async () => {
            const response = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step1')

            const json = await response.json()

            if (response.ok) {
                setStep1Data(json)
            }
        }
        fetchStep1()
    }, [])

    useEffect(() => {
        const fetchStep2 = async () => {
            const response = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step2')

            const json = await response.json()

            if (response.ok) {
                setStep2Data(json)
            }
        }
        fetchStep2()
    }, [])

    const value = {
        state,
        step1Data,
        step2Data,
        dispatch
    }
    return (
        <CALC_CONTEXT.Provider value={value}>
            {children}
        </CALC_CONTEXT.Provider>
    );
};

export const useCalc = () => {
    const context = useContext(CALC_CONTEXT)
    return context
}

export default CalcProvider;