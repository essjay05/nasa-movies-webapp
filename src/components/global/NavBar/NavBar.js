import React from 'react'

import RocketIcon from '../SVGs/RocketIcon'

import './NavBar.styles.scss'

const NavBar = ({ pageName }) => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a href="/" className="navbar-brand d-flex align-items-center" aria-label='NASA Movies Home'>
          <RocketIcon/> <span className='ml-2'>NASA Movies</span>
        </a>
      </nav>
    </header>
  )
}

export default NavBar