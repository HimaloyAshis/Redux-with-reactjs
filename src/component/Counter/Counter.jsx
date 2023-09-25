import React, { useState } from 'react';

const Counter = () => {


    const [count, setCount] = useState(0)

    return (
        <div className='flex gap-5  shrink-0 mx-w-md justify-center p-10'>
            <button onClick={() => setCount((prev) => prev - 1)} className='bg-orange-300 px-5 py-2 rounded'>decrease</button>
            <p>{count} </p>
            <button onClick={() => setCount((prev) => prev + 1)} className=' bg-lime-300 px-5 py-2 rounded '>increase</button>

        </div>
    );
};

export default Counter;