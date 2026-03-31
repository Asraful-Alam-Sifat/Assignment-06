import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-15'>
            <div className='max-w-260 mx-auto'>
                <div>
                    <h2 className='font-bold text-4xl text-center '>Ready to Transform Your Workflow?</h2>
                    <p className='font-medium text-base text-center mt-3 max-w-150 mx-auto opacity-80'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                </div>

                <div className='mt-8 text-center'>
                  <div className='flex justify-center items-center gap-5'>
                    <button className='font-medium text-lg btn rounded-full mt-7'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                    <button className='font-medium text-lg rounded-full mt-7 border-2 px-5 py-1 hover:bg-base-100 hover:text-base-900'><span className='hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:bg-clip-text hover:text-transparent'>View Pricing</span></button>
                 </div>
                    <p className='font-medium mt-5 opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;