import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1 className='logo'>🍽️ Food Recipes</h1>
        <ul className='nav-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
