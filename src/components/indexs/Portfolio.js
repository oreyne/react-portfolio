import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './../portfolio/Contact'

import Home from './../portfolio/Home'
import Experience from './../portfolio/Experience'
import Training from './../portfolio/Training'

import './../../css/portfolio/portfolio.css'

const Portfolio = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Portfolio
