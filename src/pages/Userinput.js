import React from 'react'

import{Navbar1} from '../components'
import {Footer, Upload} from '../containers'

import './app.css'
const UserInput = () => {
  return (
    <div>
      <Navbar1/>
      <Upload/>
      <Footer />
    </div>
    
  )
}

export default UserInput;