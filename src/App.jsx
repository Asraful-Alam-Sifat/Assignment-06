
import { Suspense, useState } from 'react';
import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar';
import StatsBar from './components/StatsBar/StatsBar';
import ToogleBtn from './components/ToogleBtn/ToogleBtn';
import Tools from './components/Tools/Tools';
import Cart from './components/Cart/Cart';
import Steps from './components/Steps/Steps';
import Pricing from './components/Pricing/Pricing';
import Workflow from './components/Workflow/Workflow';
import Footer from './components/Footer/Footer';



const getTools = async() => {
  const res = await fetch('/Data.json');
  return res.json();
}



function App() {
const toolsPromise = getTools();
const [toogleBtn, setToogleBtn] = useState('Products');
const [cartsData, setCartsData] = useState([]);


  return (
   <section className=''>
    <header className="overflow-x-hidden bg-base-100">
        <NavBar  cartsData={cartsData} />
        <HeroBanner/>
        <StatsBar/>
    </header>
    
    <main className="overflow-x-hidden  ">
       <ToogleBtn
       toogleBtn={toogleBtn}
        setToogleBtn={setToogleBtn}
         cartsData={cartsData} />

           <Suspense fallback={<div 
              className='container mx-auto flex justify-center items-center h-96'>
                <span 
                className="loading loading-dots loading-xl text-center items-center "></span>
                </div>}>

               {toogleBtn === 'Products' && <Tools 
                   toolsPromise={toolsPromise}
                    cartsData={cartsData}
                     setCartsData={setCartsData} />}

               {toogleBtn === 'Cart' && <Cart cartsData={cartsData} setCartsData={setCartsData} />}
           </Suspense>

           <section className='bg-base-200 w-full'>
            <Steps/>
           </section>
           
           <Pricing/>
           <Workflow/>
        
    </main>

      <footer className='overflow-x-hidden'>
         <Footer/>
     </footer>
   </section>
  );
};

export default App
