import React from 'react'
import Aboutme from '../components/Aboutme/Aboutme'
import Hero2 from '../components/hero2/Hero2'
import hero_img from "../Assets/pexels-pramod-tiwari-13620268.jpg"
const About = () => {
  return (
    <div className='about'>
   <Hero2 image={hero_img} h1="ABOUT." para="I'M a friendly Front-End Devloper" />
      <Aboutme />
    </div>
  )
}

export default About
