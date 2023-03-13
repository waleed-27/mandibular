import React from 'react'

import{Navbar, Field, Box,Loginbutton} from '../components'
import {Intro, Guide, Benefits, Contact, Footer} from '../containers'
//import {Login} from './containers'

import './app.css'
const Loginpage = () => {
  return (
    <div>
      <Navbar/>
      <Loginbutton/>
    </div>
    
  )
}


export default Loginpage;