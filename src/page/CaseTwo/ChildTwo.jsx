import React, { useState } from 'react';
import Counter from '../../component/Counter/Counter';

const ChildTwo = ({count, setCount}) => {



    return (
        <div className='max-w-4xl m-10 border-2 border-purple-600 rounded-lg'>
            <div className='text-3xl bg-purple-300 w-10 h-10 place-content-center grid m-5 rounded-full'>
                <p>2</p>
            </div>
            <div className='w-full grid m-auto place-content-center'>
                <Counter count = {count} setCount = {setCount} ></Counter>
            </div>
        </div>

    );
};

export default ChildTwo;