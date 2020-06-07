import './Navbar.css';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'
import { useEffect } from 'react';

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
        <NavLink to='/' exact >
          <h2>By Adam</h2>
        </NavLink>
        <ul className='navbar-menu'>
          <li className='nav-item'>
            <NavLink activeClassName='nav-item-active' exact to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink activeClassName='nav-item-active' to='/galleries'>
              Galleries
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink activeClassName='nav-item-active' to='/about'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className='navbar-container'>
        <NavLink to='/' exact >
          <h2>By Adam</h2>
        </NavLink>
        {!isOpen && <button className='icon-button' onClick={handleOpen}><i className="fas fa-bars"></i></button>}
        {isOpen &&
          <div className='mobile-menu-container'>
            <button className='icon-button close-menu-button' onClick={handleClose}><i className="fas fa-times"></i></button>
            <ul className='mobile-menu-list'>
              <li><NavLink activeClassName='nav-item-active' exact onClick={handleClose} to='/'>Home</NavLink></li>
              <li><NavLink activeClassName='nav-item-active' onClick={handleClose} to='/galleries'>Galleries</NavLink></li>
              <li><NavLink activeClassName='nav-item-active' onClick={handleClose} to='/about'>About</NavLink></li>
            </ul>
          </div>}
      </nav>
    )
  }
}
