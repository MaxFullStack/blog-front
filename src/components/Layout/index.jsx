import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar'

const Layout = ({ children }) => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className='p-8'>
        <main>{children}</main>
      </div>
    </Router>
  )
}

export default Layout
