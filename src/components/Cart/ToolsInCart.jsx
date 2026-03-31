import React from 'react';
import RemoveTools from './RemoveTools';

const ToolsInCart = ({ cartsData, setCartsData }) => {
    
    //  console.log(cartsData);
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