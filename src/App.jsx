import React from "react";

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css' 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App