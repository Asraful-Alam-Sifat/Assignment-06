import React from 'react';

const ToolsInCart = ({ cartsData }) => {
    //  console.log(cartsData);
    return (
        <div>
            {cartsData.map(cart => 
                 <div className='flex justify-between items-center border border-gray-100 rounded-2xl p-3 mb-5 bg-base-200'>
                 <div className='flex gap-2 justify-center items-center'>
                      <img className='border border-gray-200 rounded-full w-12 h-12 p-1.5 bg-base-100' src={cart.icon} alt={cart.name} />
                    <div>
                        <h3 className='font-bold text-lg '>{cart.name}</h3>
                         <p className='font-medium text-base text-gray-500'>${cart.price}</p>
                    </div>
                 </div>
            
            <button className='font-semibold text-base text-[#FF3980]'>Remove</button>
        </div>
            )}
        </div>
    );
};

export default ToolsInCart;