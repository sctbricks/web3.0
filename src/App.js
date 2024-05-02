import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './footer';
import AboutSection from './Aboutpage';
import ServicePage from './Servicepage';
import ContactUs from './contact';
import FlyAshBricksInfo from './Flyashcon';
import InterlockingBricksInfo from './interlockcon';
import SolidBricksInfo from './Solidbrickcon';
import Aggregates from './Aggregatescon';
import HollowbrickInfo from './Hollowbrickcon';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/About" element={<AboutSection />} /> 
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service/Flyash-brick" element={<FlyAshBricksInfo />} />
          <Route path="/service/InterLocking-brick" element={<InterlockingBricksInfo />} />
          <Route path="/service/Solid-brick" element={<SolidBricksInfo/>} />
          <Route path="/service/Hollow-brick" element={<HollowbrickInfo/>} />
          <Route path="/service/Aggregates" element={<Aggregates />} />
          

         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
