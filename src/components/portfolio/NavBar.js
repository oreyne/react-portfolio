import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './../../css/portfolio/NavBar.css'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  return(
    <div className="port-header">
      <Link to="/portfolio">
        <h1>Hi! I'm Oreyne</h1>
      </Link>
      <ul className={click ? "port-nav-menu active" : "port-nav-menu"}>
        <li>
          <Link to="/portfolio">Home</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
    </div>
  )
}

export default NavBar
