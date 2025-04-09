import React from 'react'
import FNavbar from './Component/FNavbar'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <FNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout