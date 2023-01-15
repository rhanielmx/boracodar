import './App.css'
import { useState, Suspense } from 'react';

import placeholder from './assets/placeholder.webp'
import staticSofa from './assets/sofa.png'
import animatedSofa from './assets/sofa.gif'
import icon360 from './assets/icon360.svg'
import x from './assets/x.svg'

export default function App() {
  const [isSpinEnabled, setIsSpinEnabled] = useState(false)

  function toggleSpinStatus() {
    setIsSpinEnabled(state => !state)
  }

  const iconSource = isSpinEnabled ? x : icon360
  const sofaSource = isSpinEnabled ? animatedSofa : staticSofa
  return (
    <main className='flex bg-rose h-screen gap-3 justify-center'>
      <section className='flex flex-col justify-center fit-content'>
        <button className='self-end mr-12 h-6 w-fit' onClick={toggleSpinStatus}>
          <img src={iconSource} />
        </button>

        <Suspense fallback={<img src={placeholder} className='self-center h-60 w-[450px]'/>}>
          <img src={sofaSource} className='self-center h-60 w-[450px]' />
        </Suspense>
      </section>
      <section className='flex flex-col justify-center'>
        <div className='flex flex-col gap-3'>
          <span className='font-lato text-[10px] text-purple uppercase'>Código: 42404</span>
          <h1 className='text-[2rem] font-heading font-semibold'>Sofá Margot II - Rosé</h1>
          <span className='font-lato leading-4 text-base text-purple'>R$ 4.000 </span>
        </div>
        <button className='fit-content border border-purple rounded-full px-4 py-2 mt-5 w-fit text-xs font-lato text-purple uppercase hover:bg-purple hover:text-zinc-100'>
          Adicionar à Cesta
        </button>
      </section>
    </main>
  );
}