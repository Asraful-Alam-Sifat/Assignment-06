import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const Steps = () => {
    return (
        <div className='max-w-260 mx-auto mt-15 py-10 px-2 md:p-30 '>
            <div>
                <h2 className='font-bold text-5xl text-center capitalize'>Get Started in 3 Steps</h2>
                <p className='font-medium text-lg text-gray-500 text-center mt-2'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='mt-15 flex flex-col space-y-3 justify-center md:flex-row md:gap-4 md:space-y-0 md:justify-evenly '>

                <div className='flex flex-col justify-center items-center bg-base-100 p-5 w-full md:w-70 rounded-xl border-2 border-gray-200 relative hover:border-[#4F39F6] transition-colors duration-300 ease-in-out hover:shadow-xl'>
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium rounded-full w-6 h-6 flex justify-center items-center absolute top-2 right-2 text-sm'>01</p>
                     <img className='w-12 bg-purple-100 rounded-full p-1.5 mt-10 ' src={userImg} alt="user Image" />
                      <h4 className='font-bold text-lg my-3'>Create Account</h4>
                       <p className='font-medium text-sm text-center mb-5 text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-base-100 p-5 w-full md:w-70 rounded-xl border-2 border-gray-200 relative hover:border-[#4F39F6] transition-colors duration-300 ease-in-out hover:shadow-xl'>
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium rounded-full w-6 h-6 flex justify-center items-center absolute top-2 right-2 text-sm'>02</p>
                     <img className='w-12 bg-purple-100 rounded-full p-1.5 mt-10 ' src={packageImg} alt="Package Image" />
                      <h4 className='font-bold text-lg my-3'>Choose Products</h4>
                       <p className='font-medium text-sm text-center mb-5 text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                
                <div className='flex flex-col justify-center items-center bg-base-100 p-5 w-full md:w-70 rounded-xl border-2 border-gray-200 relative hover:border-[#4F39F6] transition-colors duration-300 ease-in-out hover:shadow-xl md:hover:border-[#4F39F6] md:transition-colors md:duration-300 md:ease-in-out md:hover:shadow-xl'>
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-sm rounded-full w-6 h-6 flex justify-center items-center absolute top-2 right-2 '>03</p>
                     <img className='w-12 bg-purple-100 rounded-full p-1.5 mt-10 ' src={rocketImg} alt="Rocket Image" />
                      <h4 className='font-bold text-lg my-3'>Start Creating</h4>
                       <p className='font-medium text-sm text-center mb-4 text-gray-500'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;