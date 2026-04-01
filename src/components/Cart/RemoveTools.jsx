import { toast } from "react-toastify";


const RemoveTools = ({ cart, cartsData, setCartsData }) => {

    const removeHandler = (id) => {
        const index = cartsData.findIndex(item => item.id === id);

        if(index !== -1){
            toast(`${cart.name} successfully removed from cart!`, { type: 'warning' });
            cartsData.splice(index, 1);
            setCartsData([...cartsData]);
        }
    }
    return (
         <div key={cart.id} className='flex justify-between items-center border border-gray-100 rounded-2xl p-3 mb-5 mt-5 bg-base-200'>
                 <div className='flex gap-2 justify-center items-center'>
                      <img className='border border-gray-200 rounded-full w-12 h-12 p-1.5 bg-base-100' src={cart.icon} alt={cart.name} />
                    <div>
                        <h3 className='font-bold text-lg '>{cart.name}</h3>
                         <p className='font-medium text-base text-gray-500'>${cart.price}</p>
                    </div>
                 </div>
            
            <button onClick={()=> removeHandler(cart.id)} className='font-semibold text-base text-[#FF3980]'>Remove</button>
        </div>
    );
};

export default RemoveTools;