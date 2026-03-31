import React from 'react';




const ToogleBtn = ({  setToogleBtn, toogleBtn }) => {
    return (
        <div className='mt-15 '>
            <h2 className='text-5xl font-bold text-center mb-2'>Premium Digital Tools</h2>
            <p className='text-base font-normal text-gray-500 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
           <div className='p-0.5 rounded-full border border-gray-200 w-max flex gap-3 mx-auto mt-6'>

              <button 
              onClick={() => setToogleBtn('Products')}
                id='ProductsBtn'
              className={`btn  font-medium text-xl rounded-full px-4 py-5.5 transition-all duration-300
                ${toogleBtn === 'Products'
                   ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#6351f8] hover:to-[#a83dfc]'
                    : 'text-gray-500 hover:text-gray-700' 
                }`}
            >Products</button>

              <button 
              onClick={() => setToogleBtn('Cart')}
                id='cartBtn'
              className={`btn rounded-full px-4 py-5.5 font-medium text-xl transition-all duration-300
                 ${toogleBtn === 'Cart'
                   ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#6351f8] hover:to-[#a83dfc]'
                    : 'text-gray-500 hover:text-gray-700' 
                }`}
            >Cart (0)</button>
           </div>
          
            
            
        </div>
    );
};

export default ToogleBtn;