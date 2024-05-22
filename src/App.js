import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Footer from './components/Footer/Footer'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Project/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
