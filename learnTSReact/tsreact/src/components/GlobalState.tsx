import React, { createContext, useReducer } from 'react';

export const initialValues = {
    rValue: true,
    turnOn: () => { },
    turnOff: () => { },
    reset: () => { }
}

export const GlobalContext = createContext(initialValues);

type State = {
    rValue: boolean;
};

type Action =
    | { type: "one"; payload?: string }
    | { type: "two"; payload?: number }
    | { type: "three"; payload?: boolean };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "one":
            return { rValue: true };
        case "two":
            return { rValue: false };
        case "three":
            return initialValues;
        default:
            return state;
    }
}



export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <GlobalContext.Provider value={{
            rValue: state.rValue,
            turnOn: () => dispatch({ type: "one" }),
            turnOff: () => dispatch({ type: "two" }),
            reset: () => dispatch({ type: "three" })
        }}
        >{children}
        </GlobalContext.Provider>
    )

}
