import React from 'react'
import reactLogo from './images/react.svg'
import './Header.css'

function Header() {
  return (
    <nav className='navbar'>
        <div className='nav-left'>
            <img src= {reactLogo} />
            <h3>ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Header