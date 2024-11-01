import React, { useEffect, useState } from 'react'
import './HookUseEffect.css'
import axios from 'axios'

export default function HookUseEffect() {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    llamarPersonajes();
  },[]);


  async function llamarPersonajes(){
    const getPersonajes = await axios.get('https://dragonball-api.com/api/characters')
    setPersonajes(getPersonajes.data.items)
  }
  
  
  

  return (
    <div className='effectcontainer'>
      {/* HookUseEfect */}

      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Ki</td>
            <td>Raza</td>
            <td>Generp</td>
          </tr>
        </thead>
        <tbody>
          {
            personajes.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.ki}</td>
                <td>{item.race}</td>
                <td>{item.gender}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
