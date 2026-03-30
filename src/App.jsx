
import { Suspense } from 'react';
import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar';
import StatsBar from './components/StatsBar/StatsBar';
import ToogleBtn from './components/ToogleBtn/ToogleBtn';
import Tools from './components/Tools/Tools';



const getTools = async() => {
  const res = await fetch('/public/Data.json');
  return res.json();
}



function App() {
const toolsPromise = getTools();

  return (
   <body>
    <header className="overflow-x-hidden">
        <NavBar/>
        <HeroBanner/>
        <StatsBar/>
    </header>
    
    <main className="overflow-x-hidden p-5">
       <ToogleBtn/>
      
           <Suspense fallback={<span className="loading loading-dots loading-xl text-center items-center"></span>}>
               <Tools toolsPromise={toolsPromise} />
           </Suspense>
       
        
    </main>


    </body>
  )
}

export default App
