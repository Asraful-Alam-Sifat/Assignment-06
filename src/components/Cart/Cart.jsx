import { ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import ToolsInCart from './ToolsInCart';
import { toast } from 'react-toastify';

const Cart = ({ cartsData, setCartsData }) => {
    const [proceed, setProceed] = useState(false);
   
    const proceedHandler = () => {
        toast("Proceeding to checkout!", { type: 'info' });
            setProceed(true);
            setCartsData([]);
    }
   
    return (
        <div className='container mx-auto border border-gray-100 rounded-xl px-10 py-13 shadow-xs mt-10 '>

            {(cartsData.length === 0 || proceed === true) && (<section className=' flex flex-col justify-center items-center mt-25 mb-25'>
               <ShoppingCart 
               className='w-38 h-38 text-gray-400'/>
               <h3 className='font-bold text-lg text-gray-400 mt-8 '>Your Cart Is Empty</h3>
            </section>)}

            {(cartsData.length !== 0 && proceed === false) && <h1 className='font-bold text-xl '>Your Cart</h1>}

            {(cartsData.length !== 0 && proceed === false) && <ToolsInCart cartsData={cartsData} setCartsData={setCartsData} />}

            {(cartsData.length !== 0 && proceed === false) && (<div>
                <div className='flex justify-between items-center px-5 mt-10 mb-8'>
                    <p className='font-medium text-xl text-gray-500'>Total</p>
                     <p className='font-bold text-2xl'>${cartsData.reduce((acc, data) => acc + data.price, 0)}</p>
                </div>
                <button
                 onClick={proceedHandler}
                  className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-xl rounded-full px-4 py-2 hover:from-[#6351f8] hover:to-[#a83dfc]'>Proceed to Checkout</button>
                </div>)}
        </div>
    );
};

export default Cart;