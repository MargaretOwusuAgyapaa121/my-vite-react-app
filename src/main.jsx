import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function Main(){
  return(
     <BrowserRouter>
       <Routes>
         <Route path='/' Component={Home}/>
         <Route  path='/about-us' Component={About}/>
         <Route path='/contact-us' Component={Contact}/>
       </Routes>
     </BrowserRouter>  
  )
}






createRoot(document.getElementById('root')).render(
   <Main/>,
)
