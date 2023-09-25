import React, { createContext, useState } from 'react';

export const CounterContext = createContext()

const CounterContext = ({children}) => {

    const [count, setCount] = useState(0)

    const info ={
        count,
        setCount
    }


    return (
        <CounterContext.Provider value={info}>
            {children}
        </CounterContext.Provider >
    );
};

export default CounterContext;