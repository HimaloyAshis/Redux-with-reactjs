import React, { useState } from 'react';

const ChildTwo = () => {

    const [count , setCount] = useState(0)

    return (
        <div className='max-w-4xl m-10 border-2 border-purple-600 rounded-lg'>
            <div className='text-3xl bg-purple-300 w-10 h-10 place-content-center grid m-5 rounded-full'>
                <p>1</p>
            </div>
            <div className='w-full grid m-auto place-content-center'>
                <div className='flex gap-5  shrink-0 mx-w-md justify-center p-10'>
                    <button onClick={() => setCount((prev) => prev - 1)} className='bg-orange-300 px-5 py-2 rounded'>decrease</button>
                    <p>{count} </p>
                    <button onClick={() => setCount((prev) => prev + 1)} className=' bg-lime-300 px-5 py-2 rounded '>increase</button>

                </div>

            </div>
        </div>

    );
};

export default ChildTwo;