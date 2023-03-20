import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../../components/Home/Home';
import Projects from '../../components/Projects/Projects';
import Info from '../../components/Info/Info'

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/info' element={<Info />} />
        <Route path='/*' element={<Navigate to="/home" />} />
      </Routes>
    </main>
  )
}