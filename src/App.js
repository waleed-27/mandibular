// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import{Navbar, Field, Box} from './components'
// import {Intro, Guide, Benefits, Contact, Footer} from './containers'
// import './app.css'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Intro />  
//       <Benefits /> 
//       <Guide /> 
//       <Contact />  
//       <Footer />
//     </div>
//   )
// }

// export default App
import React from 'react';
import AppRouter from './AppRouter';
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <AppRouter />
    </div>
  );
}

export default App;