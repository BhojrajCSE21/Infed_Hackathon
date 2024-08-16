import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import MentorStudentForm from './components/MentorStudentForm'
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/" element={<MentorStudentForm />} />
        
      </Routes>
    </Router>
  )
}

export default App
