import './Navbar.css';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleOpen = () => {
    setIsOpen(true);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  }

  const handleClose = () => {
    setIsOpen(false);
    const body = document.querySelector('body');
    body.style.overflow = 'scroll';
  }

  if (width > 760) {
    return (
      <nav className='navbar-container'>
        <h2>By Adam</h2>
        <ul className='navbar-menu'>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/galleries'>
              Galleries
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className='navbar-container'>
        <h2>By Adam</h2>
        {!isOpen && <button onClick={handleOpen}>Open menu</button>}
        {isOpen && <button onClick={handleClose}>Close menu</button>}
        {isOpen &&
          <div className='mobile-menu-container'>
            <ul>
              <li><Link onClick={handleClose} to='/'>Home</Link></li>
              <li><Link onClick={handleClose} to='/galleries'>Galleries</Link></li>
              <li><Link onClick={handleClose} to='/about'>About</Link></li>
            </ul>
          </div>}
      </nav>
    )
  }
}
