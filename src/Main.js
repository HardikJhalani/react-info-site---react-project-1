import React from 'react'
import './Main.css'
import reactLogo from './images/react.svg'

function Main() {
  return (
    <div className='main'>
    <img src={reactLogo} className='bglogo'/>
        <h1>Fun facts about React</h1>
        <ul className='items'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
  )
}

export default Main