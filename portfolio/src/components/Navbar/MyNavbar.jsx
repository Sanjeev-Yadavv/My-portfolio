import React from 'react'
import './Navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
      <div>Sanjeev</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Portfolio</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default navbar
