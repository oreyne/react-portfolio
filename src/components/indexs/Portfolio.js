import { Routes, Route } from 'react-router-dom'
import NavBar from './../portfolio/NavBar'
import Video from './../portfolio/Video'
import Footer from './../portfolio/Footer'
import Experience from './../portfolio/Experience'
import Training from './../portfolio/Training'

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
      </Routes>

    </>
  )
}

export default Portfolio
