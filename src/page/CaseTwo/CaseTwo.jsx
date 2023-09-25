import React, { useState } from 'react';
import ChildOne from '../CaseTwo/ChildOne';
import ChildTwo from '../CaseTwo/ChildTwo';

const CaseTwo = () => {


    return (
        <div className='border-2 border-orange-600 m-auto max-w-5xl '>
            <ChildOne ></ChildOne>
            <ChildTwo ></ChildTwo>
        </div>
    );
};

export default CaseTwo;