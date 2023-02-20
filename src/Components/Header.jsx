import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style/Header.css'

function Header() {
  return (
    <header className='header-block'>
      <div className="header-btn">
        &#9776;
      </div>
      <div className="header-logo-box">
        <p className="logo-text">ShopOnline</p>
      </div>
      <div className="header-location-block">
        <NavLink to={'/location'}>Location</NavLink>
      </div>
      <div className="header-contacts-block">
        <NavLink to={'/location'}>Contacts</NavLink>
      </div>
    </header>
  )
}

export default Header
