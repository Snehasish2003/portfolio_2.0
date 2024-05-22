import React from 'react'
import Hero from '../components/hero2/Hero2'
import hero_img from "../Assets/pexels-pramod-tiwari-13620268.jpg"
import Projects from '../components/Projects/Projects'
const Project = () => {
    
  return (
    <div className='project'>
      <Hero image={hero_img} h1="PROJECTS." para="Some of my most recent works" />
     <Projects />
    </div>
  )
}

export default Project
