import React from 'react'

import{Navbar, Field, Box} from '../components'
import {Intro, Guide, Benefits, Contact, Footer} from '../containers'
//import {Login} from './containers'

import './app.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro />  
      <Benefits /> 
      <Guide /> 
      <Contact />  
      <Footer />
    </div>
    
  )
}

export default App;