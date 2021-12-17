import React from 'react'
import './../../css/portfolio/TrainingSection.css'

import {Link} from 'react-router-dom'

import Said from '../../assets/descarga.jpeg'
import Dragon from '../../assets/dragon.png'

const TrainingSection = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC </p>
                <Link to='/contact'><button className='port-btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Said} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Dragon} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className="list-tutorial">
              <h2>My own projects</h2>
              <ul>
                <li><Link to="/project/map" >Map</Link></li>
                <li><Link to="/project/currency" >Cryptocurrency Tracker</Link></li>
              </ul>
            </div>
        </div>
    )
}

export default TrainingSection
