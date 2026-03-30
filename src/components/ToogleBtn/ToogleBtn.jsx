import React from 'react';

const ToogleBtn = () => {
    return (
        <div className='mt-15'>
            <h2 className='text-5xl font-bold text-center mb-2'>Premium Digital Tools</h2>
            <p className='text-base font-normal text-gray-500 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
           <div className='p-0.5 rounded-full border border-gray-200 w-max flex gap-3 mx-auto mt-6'>
              <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-xl rounded-full px-4 py-2 hover:from-[#6351f8] hover:to-[#a83dfc]'>Products</button>
              <button className='btn rounded-full px-4 py-5.5 font-medium text-xl '>Cart (0)</button>
           </div>
            
        </div>
    );
};

export default ToogleBtn;