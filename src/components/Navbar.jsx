import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css' 
import AllBooks from '../pages/AllBooks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">📚 Online Library</h2>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/all-books" className="nav-link">
          Browse Books
        </NavLink>
        <NavLink to="/add-book" className="nav-link">
          Add Book
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
