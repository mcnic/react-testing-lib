import './App.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>main</Link>
      &nbsp;
      <Link to='/about' data-testid='about-link'>about</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}


export default App;
