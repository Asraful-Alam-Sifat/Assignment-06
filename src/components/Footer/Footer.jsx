import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white px-3 pt-9 md:px-15 md:pt-25 pb-5'>
            <div className='max-w-350 mx-auto'>
                <div className='flex justify-around flex-col md:flex-row gap-10 md:gap-0'>
                    <div>
                        <h2 className='font-bold text-4xl'>DigiTools</h2>
                        <p className='font-medium text-base text-gray-300 mt-5'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>
                    <div className='flex justify-between items-center gap-15'>
                        <div>
                            <h4 className='font-medium text-xl mb-2'>Product</h4>
                            <p className='font-normal text-base text-gray-300 mt-1'>Features</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Pricing</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Templaltes</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Integrations</p>
                        </div>
                        <div>
                            <h4 className='font-medium text-xl mb-2'>Company</h4>
                            <p className='font-normal text-base text-gray-300 mt-1'>About</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Blog</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Careers</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Press</p>
                        </div>
                        <div>
                            <h4 className='font-medium text-xl mb-2'>Resources</h4>
                            <p className='font-normal text-base text-gray-300 mt-1'>Documentation</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Help Center</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Community</p>
                            <p className='font-normal text-base text-gray-300 mt-1'>Contact</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Social Links</p>
                        <div className='flex justify-around mt-2 w-max gap-3'>
                            <div className='bg-base-100 text-black p-1 rounded-full'><RiInstagramFill/></div>
                            <div className='bg-base-100 text-black p-1 rounded-full'><FaFacebookSquare/> </div>
                            <div className='bg-base-100 text-black p-1 rounded-full'><FaXTwitter/></div>
                        </div>
                    </div>
                </div>
<hr  className='mt-15 mb-3 text-gray-600'/>
                <div className='flex justify-between'>
                    <p className='text-gray-400 text-sm'>&copy; 2023 Digitools. All rights reserved.</p>
                    <div className='flex gap-1 md:gap-5 text-gray-400 text-sm'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;