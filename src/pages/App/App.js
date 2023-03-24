import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Home from '../../components/Home/Home';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact'

export default function App() {
  const [showNav, setShowNav] = useState('')
  const [activeLink, setActiveLink] = useState('')
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  
  return (
    <main className="App">
      <NavBar activeLink={activeLink} showNav={showNav}/>
      <Routes>
        <Route path='/' element={<Home setActiveLink={setActiveLink} setShowNav={setShowNav}/>} />
        <Route path='/projects' element={<Projects setActiveLink={setActiveLink} />} />
        <Route path='/contact' element={<Contact setActiveLink={setActiveLink} />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}