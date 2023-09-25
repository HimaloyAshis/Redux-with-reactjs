import React, { createContext, useState } from 'react';

export const CounterApi = createContext()

const CounterContext = ({children}) => {

    const [count, setCount] = useState(0)

    const info ={
        count,
        setCount
    }


    return (
        <CounterApi.Provider value={info}>
            {children}
        </CounterApi.Provider >
    );
};

export default CounterContext;