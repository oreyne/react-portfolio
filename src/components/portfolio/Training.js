import NavBar from './../portfolio/NavBar'
import Footer from './../portfolio/Footer'
import HeroImage from './../portfolio/HeroImage'
import TrainingSection from './TrainingSection'
import './../../css/portfolio/Training.css'

const Training = () => {
  return(
    <>
      <NavBar />
      <HeroImage heading='Training' text='Schools and University' />
      <TrainingSection />
      <Footer />
    </>
  )
}

export default Training
