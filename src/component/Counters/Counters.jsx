import React from 'react';
import { useSelector } from 'react-redux';

const Counters = () => {

    const { count } = useSelector((state) => state.counter)

    console.log(count)

    return (
        <div>
            <button>increment</button>
            <div>{count}</div>
            <button>decrement</button>
        </div>
    );
};

export default Counters;