import React, { useState } from 'react';
import ChildOne from '../CaseTwo/ChildOne';
import ChildTwo from '../CaseTwo/ChildTwo';

const CaseTwo = ({count, setCount}) => {

    // const [count, setCount] = useState(0)

    return (
        <div className='border-2 border-orange-600 m-auto max-w-5xl '>
            <ChildOne count = {count} setCount = {setCount}></ChildOne>
            <ChildTwo count = {count} setCount = {setCount}></ChildTwo>
        </div>
    );
};

export default CaseTwo;