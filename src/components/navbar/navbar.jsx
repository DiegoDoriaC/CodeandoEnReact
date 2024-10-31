import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar_contenedor'>
      <ul className='navbar_list_group'>
        <li><Link className='enlace' to={"/"}>Use State</Link></li>
        <li><Link className='enlace' to={"/useEffect"}>Use Effect</Link></li>
        <li><Link className='enlace' to={"/useContent"}>Use Content</Link></li>
      </ul>
    </div>
  )
}
