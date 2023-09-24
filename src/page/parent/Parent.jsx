import React from 'react';
import ChildOne from '../Child/ChildOne';

const Parent = () => {
    return (
        <div className='border-2 border-orange-700 max-w-7xl mx-auto m-10 rounded-md'>
            <h1 className='m-5 text-xl'>Parent</h1>
            <ChildOne></ChildOne>
        </div>
    );
};

export default Parent;