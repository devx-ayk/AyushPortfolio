import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react';

import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  )
}

export default App