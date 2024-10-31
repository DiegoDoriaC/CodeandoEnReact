import React, { useState } from 'react'
 
import './HookUseState.css'

export default function HookUseState() {


  const [contador, setContador] = useState(0)

  function subir(){
    setContador(contador + 1)
  }

  function bajar(){
    setContador(contador - 1)
  }

  function reset(){
    setContador(0)
  }


  return (
    <div className='statecontainer'>
      <div className='w-70'>
        <h1>Contador :  {contador}</h1>
        <div className='flex items-center flex-wrap justify-center'>
          <button onClick={subir} className='btn'>+</button>
          <button onClick={bajar} className='btn'>-</button>
          <button onClick={reset} className='btn btn2'>Reset</button>
        </div>
      </div>
    </div>
  )
}
