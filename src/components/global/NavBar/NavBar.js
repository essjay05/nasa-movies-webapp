import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.styles.scss'

const NavBar = ({ pageName }) => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a href="/" className="navbar-brand">
          NASA Movies
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavBarNav" aria-label="Mobile Toggle Menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavBarNav">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${pageName === 'Home' ? 'active' : ''}`}>
              <NavLink to='/'>Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar