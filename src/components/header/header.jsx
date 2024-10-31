import React from 'react';
import './header.css'

function Header(props){
  return (
    <div className='header_contenedor'>
      <h1 className='header_titutlo'>{props.titulo}</h1>
    </div>
  );
};

export default Header