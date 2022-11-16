import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/navBar'
import Admin from './components/Admin/Admin'
import Login from './components/Login/login'

const RoutesList = () => {
  return (
    <BrowserRouter>
   
   <Navbar />
        <Routes>
       
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />

        </Routes>
  
    </BrowserRouter>
  )
}

export default RoutesList