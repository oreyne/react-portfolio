import React from 'react'
import Footer from './../portfolio/Footer'
import HeroImage from './../portfolio/HeroImage'
import NavBar from './../portfolio/NavBar'
import Form from './../portfolio/Form'

const Contact = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='Contact.' text="Write me and I'll answer you" />
            <Form />
            <Footer/>
        </div>
  )
}

export default Contact
