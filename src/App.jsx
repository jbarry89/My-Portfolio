import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/pages/AboutMe.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import ContactMe from './components/pages/ContactMe.jsx';
import Resume from './components/pages/Resume.jsx';
import './styles/index.css';
import './styles/contactForm.css';

export default function App() {

  return (
   <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactMe />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </main>
      <Footer />
   </Router>
  );
}