import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../../Redux/features/Counter/CounterSlice';

const Counters = () => {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    console.log(count)

    return (
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <br />
            <button onClick={() => dispatch(incrementByValue(5))}>increment by 5</button>
            <div>{count}</div>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counters;