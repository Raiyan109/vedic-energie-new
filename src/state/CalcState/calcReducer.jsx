import { actionTypes } from "./actionTypes"

export const initialState = {
    goToCalc: false,
}

export const calcReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GO_TO_CALC:
            return {
                ...state,
                goToCalc: true,
            };
        default:
            return state
    }
}