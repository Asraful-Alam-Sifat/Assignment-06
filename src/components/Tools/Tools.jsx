import React, { use } from 'react';
import CheckIcon from '../../assets/Check.png';

const Tools = ({toolsPromise}) => {
    const toolsData = use(toolsPromise);
    
    return (
        <div 
        className='max-w-260 mx-auto mt-15 grid grid-cols-1 justify-center md:grid-cols-3 gap-8 md:gap-x-7 '>

            {toolsData.map(tool => 
                <div 
                key={tool.id} 
                className='border-2 border-gray-300 rounded-xl p-5 w-full md:max-w-80 mx-auto relative hover:border-[#4F39F6] transition-colors duration-300 ease-in-out hover:shadow-xl'>
                    <div className='flex justify-between '>
                        <img 
                        className='w-12 p-2 border border-gray-200 rounded-full' 
                        src={tool.icon} 
                        alt={tool.name} />

                        <div className='absolute top-2 right-2 '>
                            {tool.tagType.toLowerCase() === 'best-seller'
                            ? <span className='bg-yellow-100 text-yellow-600 px-3 py-0.5 rounded-xl font-medium text-xm'>{tool.tag}</span>
                            : tool.tagType.toLowerCase() === 'popular'
                                ? <span className='bg-green-100 text-green-600 px-3 py-0.5 rounded-xl font-medium text-xm'>{tool.tag}</span>
                                : tool.tagType.toLowerCase() === 'new'
                                    ? <span className='bg-blue-100 text-blue-600 px-3 py-0.5 rounded-xl font-medium text-xm'>{tool.tag}</span>
                                    :'' }
                        </div>
                    </div>

                    <h4 className='font-bold text-2xl mt-6 mb-2'>{tool.name}</h4>
                    <p className='font-medium text-base text-gray-500 mb-3 '>{tool.description}</p>

                    <h4 className='font-medium textarea-lg capitalize mb-4'><span className='font-bold text-2xl'>${tool.price}</span>/{tool.period}</h4>
                    <ul className='font-medium text-base text-gray-500 capitalize mb-4'>
                        {tool.features.map((feature, index) => {
                            return <li 
                            key={index} 
                            className='flex gap-1.5'>
                              <img 
                              src={CheckIcon} 
                              alt="Check" />
                            {feature}</li>
                        })}
                    </ul>

                    <button 
                    className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 rounded-full font-bold text-xl text-white mr-7 hover:from-[#6351f8] hover:to-[#a83dfc] w-full'>Buy Now</button>

                </div>
            )}
        </div>
    );
};

export default Tools;