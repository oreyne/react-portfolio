import { Link } from 'react-router-dom'
import './../../css/portfolio/Video.css'
import terminal from './../../assets/Airport.mp4'

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={terminal} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Web developer</h1>
        <p>This is a React Js website, but find more about me</p>
        <div>
          <Link to="/experience" className="port-btn">Experience</Link>
          <Link to="/contact" className="port-btn port-btn-light">Launch</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
