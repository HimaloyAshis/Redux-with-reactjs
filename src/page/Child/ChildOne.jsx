import React from 'react';

const ChildOne = () => {
    return (
        <div className='max-w-4xl m-10 border-2 border-purple-600  '>
            <div className=''>
                <p>1</p>
            </div>
            <div className='w-full m-auto'>
                <div className='flex gap-5 justify-center p-10'>
                    <button className='bg-orange-300 p-2 rounded'>decrease</button>
                    <p>0</p>
                    <button className=' bg-lime-300 p-2 rounded '>increase</button>

                </div>

            </div>
        </div>
    );
};

export default ChildOne;