import { Routes, Route } from 'react-router-dom'
import NavBar from './../portfolio/NavBar'
import Video from './../portfolio/Video'
import Footer from './../portfolio/Footer'
import Experience from './../portfolio/Experience'

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
      </Routes>

    </>
  )
}

export default Portfolio
