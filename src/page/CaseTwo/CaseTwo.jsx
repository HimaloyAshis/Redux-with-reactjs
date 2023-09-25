import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const CaseTwo = () => {
    return (
        <div className='border-2 border-orange-600 m-auto max-w-5xl '>
            <ChildOne></ChildOne>
            <ChildTwo></ChildTwo>
        </div>
    );
};

export default CaseTwo;