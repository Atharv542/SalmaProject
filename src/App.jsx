import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AreasOfSupportWithCircle from './pages/Services';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Navbar from './pages/Navabr';
import ScrollToTop from './pages/ScrollToTop';
import BookingForm from './pages/Booking';
import { Toaster } from "react-hot-toast";
import VisionMission from './pages/VisionMission';
import WhatToExpect from './pages/WhatToExpect';
import Footer from './pages/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const journeyRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'aboutme' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'services' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'yourjourney' && journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar scrollToSection={scrollToSection} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ paddingTop: '60px' }} ref={homeRef}>
                  <Home />
                </div>
                <div style={{ paddingTop: '100px' }} ref={contactRef}>
                  <AreasOfSupportWithCircle />
                </div>
                <div id="aboutme" style={{ paddingTop: '80px' }} ref={aboutRef}>
                  <AboutMe />
                </div>
                <div style={{ paddingTop: '10px' }}>
                  <VisionMission />
                </div>
                <div className="pb-20 md:ml-20" id="yourjourney" ref={journeyRef}>
                  <WhatToExpect />
                </div>
                <Footer />
              </>
            }
          />
          
          {/* ✅ Correctly placed Route */}
          <Route path="/booking" element={
            <>
              <div className='pb-20'>
                <BookingForm  />
              </div>
             
              <Footer />
            </>
          } />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;

