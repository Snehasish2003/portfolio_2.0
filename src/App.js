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
        <Route path="portfolio_2.0/" element={<Home/>} />
        <Route path="portfolio_2.0//Projects" element={<Project/>} />
        <Route path="portfolio_2.0//About" element={<About/>} />
        <Route path="portfolio_2.0//Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
