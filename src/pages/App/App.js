import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar'
import Home from '../../components/Home/Home';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact'

export default function App() {
  

  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}