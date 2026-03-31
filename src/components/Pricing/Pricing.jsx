import React from 'react';
import CheckIcon from '../../assets/Check.png';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className='max-w-260 mx-auto my-20'>
            <div>
                <h2 className='font-bold text-5xl text-center'>Simple, Transparent Pricing</h2>
                <p className='font-medium text-base text-gray-500 text-center mt-3 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='mt-8 flex flex-col md:flex-row md:justify-around gap-5  md:gap-5 md:items-center '>
                <div className='border-2 border-gray-200 px-4 py-10 rounded-xl w-full md:max-w-80 bg-base-200'>
                   <h4 className='font-bold text-xl mb-3'>Starter</h4>
                   <p className='font-medium text-base text-gray-500'>Perfect for getting started</p>
                   <p className='font-medium text-xl text-gray-500 capitalize my-5'><span className='font-bold text-black text-3xl'>$0</span> / monthly</p>
                   <ul>
                       <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Access to 10 free tools</li>
                       <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Basic templates</li>
                       <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Community support</li>
                       <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />1 project per month</li>
                   </ul>
                   <button className='font-bold text-lg btn w-full rounded-full mt-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started Free</button>
                </div>

                <div className='border-2 border-gray-200 px-4 py-10 rounded-xl w-full md:max-w-80 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white relative'>
                    <p className='bg-yellow-100 text-yellow-600 p-0.5 w-max px-2 rounded-full text-sm absolute -top-3 left-2/5 md:left-1/3'>Most Popular</p>
                     <h4 className='font-bold text-xl mb-3'>Pro</h4>
                     <p className='font-medium text-base text-white'>Best for professionals</p>
                     <p className='font-medium text-xl text-white capitalize my-5'><span className='font-bold text-white text-3xl'>$29</span> / monthly</p>
                     <ul>
                         <li className='flex gap-2 font-medium text-base text-white'><Check /> Access to all premium tools</li>
                         <li className='flex gap-2 font-medium text-base text-white'><Check /> Unlimited templates</li>
                         <li className='flex gap-2 font-medium text-base text-white'><Check /> Priority support</li>
                         <li className='flex gap-2 font-medium text-base text-white'><Check /> Unlimited projects</li>
                         <li className='flex gap-2 font-medium text-base text-white'><Check /> Cloud sync</li>
                         <li className='flex gap-2 font-medium text-base text-white'><Check /> Advanced analytics</li>
                     </ul>
                     <button className='font-bold text-lg btn w-full rounded-full mt-7 '><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>

                </div>

                <div className='border-2 border-gray-200 px-4 py-10 rounded-xl w-full md:max-w-80 bg-base-200'>
                        <h4 className='font-bold text-xl mb-3'>Enterprise</h4>
                        <p className='font-medium text-base text-gray-500'>For teams and businesses</p>
                        <p className='font-medium text-xl text-gray-500 capitalize my-5'><span className='font-bold text-black text-3xl'>$99</span>/monthly</p>
                        <ul>
                            <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Everything in Pro</li>
                            <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Team collaboration</li>
                            <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Custom integrations</li>
                            <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Dedicated support</li>
                            <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />SLA guarantee</li>
                            <li className='flex gap-2 font-medium text-base text-gray-500'><img src={CheckIcon} alt="Check" />Custom branding</li>
                        </ul>
                        <button className='font-bold text-lg btn w-full rounded-full mt-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Contact Sales</button>

                </div>
            </div>
        </div>
    );
};

export default Pricing;