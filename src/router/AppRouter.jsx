import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage'
import MainPage from '../pages/MainPage'
import ErrorPage from '../pages/ErrorPage'
import Users from '../Users/Users'
import UserDetailsPage from '../pages/UserDetailsPage'

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}
