import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/image-2.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1>FIND MY PES</h1>
        <p>Decode the Coordinates, Master the College</p>
        <Link to='/login'>
        <button>PLAY NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
