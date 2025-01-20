import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import ContactMe from './components/pages/ContactMe';
import Resume from './components/pages/Resume';
import './App.css';

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