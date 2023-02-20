import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style/Header.css'

function Header(props) {
  return (
    <header className='header-block' style={{color: props.colorTxt}}>
      <div className="header-btn" >
        &#9776;
      </div>
      <div className="header-logo-box">
        <p className="logo-text">ShopOnline</p>
      </div>
      <div className="header-location-block">
        <NavLink to={'/location'} style={{color: props.colorTxt}}>Location</NavLink>
      </div>
      <div className="header-contacts-block">
        <NavLink to={'/location'} style={{color: props.colorTxt}}>Contacts</NavLink>
      </div>
    </header>
  )
}

export default Header
