import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';

import HookUseEffect from './components/useEffect/HookUseEffect.jsx';
import HookUseState from './components/useState/HookUseState.jsx';
import HookUseContent from './components/useContent/HookUseContent.jsx';

import './tailwind.css'

import './index.css'
import './fixed.css'

const App = () => {
  return (
    <Router>
        <Header titulo = "Proyecto de Aprendizaje en React..."></Header>
        <Navbar />
        <Routes>
            <Route path='/' element={<HookUseState />} />
            <Route path='/useEffect' element={<HookUseEffect />} />
            <Route path='/useContent' element={<HookUseContent />} />
        </Routes>
    </Router>
  )
}

export default App
