import React from 'react'
import MyNavbar from './components/Navbar/MyNavbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Bottom from './components/Bottom/Bottom';
import './App.css'
// import {ChakraProvider} from '@chakra-ui/react'


const App = () => {
  return (
    <div>
    
    <MyNavbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <hr className='hr' />
  <Bottom/>
    </div>
  )
}

export default App

