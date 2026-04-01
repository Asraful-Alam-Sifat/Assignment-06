import React from 'react';
import RemoveTools from './RemoveTools';

const ToolsInCart = ({ cartsData, setCartsData }) => {
    
    return (
        <div>
            {cartsData.map(cart => 
                <RemoveTools
                 key={cart.id}
                  cart={cart}
                   cartsData={cartsData}
                    setCartsData={setCartsData} />
            )}
        </div>
    );
};

export default ToolsInCart;