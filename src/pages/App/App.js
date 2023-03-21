import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Home from '../../components/Home/Home';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact'

export default function App() {
  const [activeLink, setActiveLink] = useState('')
  
  return (
    <main className="App">
      <NavBar activeLink={activeLink}/>
      <Routes>
        <Route path='/' element={<Home setActiveLink={setActiveLink}/>} />
        <Route path='/projects' element={<Projects setActiveLink={setActiveLink} />} />
        <Route path='/contact' element={<Contact setActiveLink={setActiveLink} />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}