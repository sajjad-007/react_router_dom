import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout