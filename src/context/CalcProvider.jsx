import React, { createContext, useContext, useReducer, useState } from 'react';
import { CalcReducer, initialState } from '../state/CalcState/calcReducer';

const CALC_CONTEXT = createContext()

const CalcProvider = ({ children }) => {


    const [state, dispatch] = useReducer(CalcReducer, initialState)

    const [goToCalc, setGoToCalc] = useState(false)

    const value = {
        goToCalc,
        setGoToCalc
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