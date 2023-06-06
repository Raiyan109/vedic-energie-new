import React, { createContext, useContext, useReducer, useState } from 'react';
import { calcReducer, initialState } from '../state/CalcState/calcReducer';

const CALC_CONTEXT = createContext()

const CalcProvider = ({ children }) => {


    const [state, dispatch] = useReducer(calcReducer, initialState)

    // const [goToCalc, setGoToCalc] = useState(false)

    const value = {
        state,
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