import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './../../css/portfolio/NavBar.css'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100)
      setColor(true)
    else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return(
    <div className={color ? "port-header header-bg" : "port-header"}>
      <Link to="/portfolio">
        <h1>Hi! I'm Oreyne</h1>
      </Link>
      <ul className={click ? "port-nav-menu active" : "port-nav-menu"}>
        <li>
          <Link to="/portfolio">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/experience">Experience</Link>
        </li>
        <li>
          <Link to="/portfolio/training">Training</Link>
        </li>
        <li>
          <Link to="/portfolio/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
    </div>
  )
}

export default NavBar
