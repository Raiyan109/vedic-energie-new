import React, { createContext, useContext, useState } from 'react';

const CALC_CONTEXT = createContext()

const CalcProvider = ({ children }) => {
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