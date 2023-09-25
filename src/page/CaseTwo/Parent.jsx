import React, { useState } from 'react';
import CaseTwo from './CaseTwo';

const Parent = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <CaseTwo count = {count} setCount = {setCount}></CaseTwo>
        </div>
    );
};

export default Parent;