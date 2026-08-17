import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// الصفحات
function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="section">
      <h2>مرحباً بكم في قرية الصراف</h2>
      <p>هنا الصفحة الرئيسية</p>
      
    </div>
  )
}

function About() {
  return (
    <div className="section">
      <h2>من نحن</h2>
      <p>نبذة عن قرية الصراف وتاريخها</p>
    </div>
  )
}

function Services() {
  return (
    <div className="section">
      <h2>خدماتنا</h2>
      <p>نقدم أفضل الخدمات لأهل القرية</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="section">
      <h2>اتصل بنا</h2>
     
    </div>
  )
}

// المكون الرئيسي
function App() {
  return (
    <Router>
      {/* Navbar ثابت في كل الصفحات */}
      <nav className="navbar">
        <h1 className="logo">قرية الصراف</h1>
        <ul className="nav-links">
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/about">من نحن</Link></li>
          <li><Link to="/services">خدماتنا</Link></li>
          <li><Link to="/contact">اتصل بنا</Link></li>
        </ul>
      </nav>

      {/* هنا بتتغير الصفحات */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
