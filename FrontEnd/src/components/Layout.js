import React from 'react'
import MyRoutes from '../routers/MyRoutes'
import Header from './Header'

import Hero from './Hero'
import Footer from './Footer'

import { BrowserRouter } from 'react-router-dom'


function Layout() {
  return (
  <>
    <Header/>
    <Hero/>
    {/* <div className='container' style={{ border:"1px solid red"}}>
        <div className="main">
          <MyRoutes/>
        </div>
    </div> */}
    {/* <Footer/> */}
    </>
  )
}

export default Layout
