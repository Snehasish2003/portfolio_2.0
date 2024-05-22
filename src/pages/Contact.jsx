import React from 'react'
import Hero2 from '../components/hero2/Hero2'
import hero_img from "../Assets/pexels-pramod-tiwari-13620268.jpg"
import Form from '../components/form/Form'
const Contact = () => {
  return (
    <div className='contact'>
      <Hero2 image={hero_img} h1="CONTACT." para="Lets have a chat" />
      <Form />
    </div>
  )
}

export default Contact
