import React, { useState } from 'react';
import ChildOne from '../Child/ChildOne';
import ChildTwo from '../Child/ChildTwo';

const Parent = () => {

    const [count , setCount] = useState(0)

    return (
        <div className='border-2 border-orange-700 max-w-5xl mx-auto m-10 rounded-md'>
            <h1 className='m-5 text-xl'>Parent</h1>
            <ChildOne count = {count} setCount= {setCount} ></ChildOne>
            <ChildTwo count = {count} setCount= {setCount}></ChildTwo>
        </div>
    );
};

export default Parent;