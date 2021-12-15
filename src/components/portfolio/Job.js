import React from 'react'
import {Link} from 'react-router-dom'
import './../../css/portfolio/Job.css'

const Job = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- ETI -</h3>
                    <span className="bar"></span>
                    <p className="btc">1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='port-btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Lombao Estudios -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='port-btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Level 6 -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='port-btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Job
