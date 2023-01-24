import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbr from './Navbr'

function Rootlayout() {
  return (
    <div>
        <Navbr/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout