import React, { use} from 'react';
import ToolsCard from './ToolsCard';


const Tools = ({toolsPromise, cartsData, setCartsData}) => {
    const toolsData = use(toolsPromise);
    
    return (
        <div 
        className='max-w-260 mx-auto mt-15 grid grid-cols-1 justify-center md:grid-cols-3 gap-8 md:gap-x-7 '>

            {toolsData.map(tool => 
               
               <ToolsCard
                key={tool.id}
                 tool={tool}
                  cartsData={cartsData}
                   setCartsData={setCartsData} />
                
            )}
        </div>
    );
};

export default Tools;