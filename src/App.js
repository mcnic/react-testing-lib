import './App.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>main</Link>
      &nbsp;
      <Link to='/about' data-testid='about-link'>about</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}


export default App;
