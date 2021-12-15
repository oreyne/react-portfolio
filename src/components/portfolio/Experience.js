import React from 'react'
import NavBar from './../portfolio/NavBar'
import Footer from './../portfolio/Footer'
import Job from './../portfolio/Job'
import HeroImage from './../portfolio/HeroImage'

const Experience = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='Experience' text='Chooce a work' />
            <Job />
            <Footer />
        </div>
    )
}

export default Experience
