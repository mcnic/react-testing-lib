import React from "react"
import { Routes, Route } from "react-router-dom"
import AboutPage from "../pages/AboutPage"
import MainPage from "../pages/MainPage"
import ErrorPage from "../pages/ErrorPage"
import Users from "../components/Users/Users"
import UsersForTest from "../components/UsersForTest/UsersForTest"
import UserDetailsPage from "../pages/UserDetailsPage"
import HelloWorld from "../pages/HelloWorld"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users-test" element={<UsersForTest />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}
