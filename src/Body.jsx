import React from 'react'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

const Body = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Body
