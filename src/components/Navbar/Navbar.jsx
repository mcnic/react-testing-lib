import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <Link to='/' data-testid='main-link'>main</Link>
        &nbsp;
        <Link to='/about' data-testid='about-link'>about</Link>
        &nbsp;
        <Link to='/users' data-testid='users-link'>users</Link>
    </>
  )
}
