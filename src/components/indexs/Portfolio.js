import { Routes, Route } from 'react-router-dom'
import NavBar from './../portfolio/NavBar'
import Video from './../portfolio/Video'
import Footer from './../portfolio/Footer'
import Experience from './../portfolio/Experience'
import Training from './../portfolio/Training'
import Contact from './../portfolio/Contact'

const Portfolio = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={
          <>
            <NavBar />
            <Video />
            <Footer />
          </>
        } />
        <Route path='/experience' element={<Experience />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default Portfolio
