import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Cart = () => {
    return (
        <div className='container mx-auto border border-gray-100 rounded-xl px-10 py-13 shadow-xs mt-15 '>
            <h1 className='font-bold text-xl '>Your Cart</h1>
            
            <section className=' flex flex-col justify-center items-center mt-25 mb-25'>
               <ShoppingCart 
               className='w-38 h-38 text-gray-400'/>
               <h3 className='font-bold text-lg text-gray-500 '>Your Cart Is Empty</h3>
            </section>
            
        </div>
    );
};

export default Cart;