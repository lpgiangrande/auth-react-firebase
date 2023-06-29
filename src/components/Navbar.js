import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className='navbar-brand'>
            AuthJs
        </Link>
    </nav>
  )
}
