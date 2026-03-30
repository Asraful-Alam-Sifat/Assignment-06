import React from 'react';
import BannerImg from '../../assets/banner.png';
import BadgeImg from '../../assets/badge.png';
import WatchDemoImg from '../../assets/Play.png'

const HeroBanner = () => {
    return (
        <div className='container flex justify-between mt-20 mx-auto items-center'>
            <div className='max-w-160 ml-40'>
                <div className='flex gap-3 items-center bg-[#e1e7ffFF] rounded-full w-max px-3 py-1'>
                    <img className='w-5 h-5' src={BadgeImg} alt="Badge Image" />
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-base font-medium'>New: AI-Powered Tools Available</p>
                </div>
                     <h1 className='font-bold text-7xl mt-5'>Supercharge Your Digital Workflow</h1>
                          <p className='text-gray-500 max-w-117.5 font-normal text-base mt-3 mb-5 '>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                  <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 rounded-full font-bold text-xl text-white mr-7 hover:from-[#6351f8] hover:to-[#a83dfc] '>Explore Products</button>
                    <button className='text-[#4F39F6] font-bold text-xl border-3 hover:border-3 hover:py-3.5 px-6 py-3 rounded-full bg-linear-to-r hover:from-[#6351f7] hover:to-[#a83dfb] hover:text-white  inline-flex items-center gap-2'>
                        <img src={WatchDemoImg} alt="Watch Demo" />
                        Watch Demo</button>
            </div>
            <div className='mr-20'>
                <img src={BannerImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default HeroBanner;