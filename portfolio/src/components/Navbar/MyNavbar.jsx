import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-name'>Sanjeev</div>
      <ul className="nav-menu">
        <li><AnchorLink  className='anchor-link'  href='#hero'>Home</AnchorLink></li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#about'>About me</AnchorLink></li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#project'>Projects</AnchorLink></li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#skill'>Skills</AnchorLink></li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink offset={50} class='anchor' href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default navbar
