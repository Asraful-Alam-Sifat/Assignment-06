
import { Suspense } from 'react';
import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar';
import StatsBar from './components/StatsBar/StatsBar';
import ToogleBtn from './components/ToogleBtn/ToogleBtn';
import Tools from './components/Tools/Tools';
import Cart from './components/Cart/Cart';



const getTools = async() => {
  const res = await fetch('/Data.json');
  return res.json();
}



function App() {
const toolsPromise = getTools();

  return (
   <section>
    <header className="overflow-x-hidden">
        <NavBar/>
        <HeroBanner/>
        <StatsBar/>
    </header>
    
    <main className="overflow-x-hidden p-5">

       <ToogleBtn/>
           <Suspense fallback={<div 
              className='container mx-auto flex justify-center items-center h-96'>
                <span 
                className="loading loading-dots loading-xl text-center items-center "></span>
                </div>}>
               <Tools toolsPromise={toolsPromise} />
           </Suspense>
       <Cart></Cart>
        
    </main>


    </section>
  )
}

export default App
