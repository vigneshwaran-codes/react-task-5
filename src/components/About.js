import React from 'react'
import developerLogo from '../assets/developer.svg'
import { Button } from 'react-bootstrap'

function About () {
  return (
    <div className='about'>
      <img src={developerLogo} alt='blog-about' className='dev-img' />
      <div className='bio'>
        <h1>Vigneshwaran K</h1>
        <h3>Full Stack Developer</h3>
        <h3>B.E - Electronics and Communication Engineering</h3>
        <h2 className='about-app'>Happy to Connect !</h2>
        <div>
        <Button className='about-action-btn' variant='dark'>LinkedIn</Button>
        <Button className='about-action-btn' variant='dark'>Twitter</Button>
        <Button className='about-action-btn' variant='dark'>Github</Button>
        </div>
      </div>
    </div>
  )
}

export default About
