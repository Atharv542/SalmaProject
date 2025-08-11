import { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import TestimonialCarousel from './pages/Testimonial';
import Preloader from './pages/IntroAnimation';

function AppWrapper() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const journeyRef = useRef(null);
  const navigate= useNavigate()
  const location = useLocation();

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

  // 👇 Handle scroll after route navigation (e.g., from /booking)
  useEffect(() => {
  const section = location.state?.sectionToScroll;
  if (section) {
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      navigate("/", { replace: true, state: null }); // clear state
    }, 100);
  }
}, [location, navigate]);

  return (
    <>
      <ScrollToTop />
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
                  <>
      <Preloader />
     
    </>
              <div style={{ paddingTop: '60px' }} ref={homeRef}>
                <Home />
              </div>
              <div style={{  }} ref={contactRef}>
                <AreasOfSupportWithCircle />
              </div>
              <div id="aboutme" style={{ }} ref={aboutRef}>
                <AboutMe />
              </div>
              <div style={{ paddingTop: '10px' }}>
                <VisionMission />
              </div>
              <div className="pb-20 md:ml-20" id="yourjourney" ref={journeyRef}>
                <WhatToExpect />
              </div>
              <div className="pb-20 md:ml-20">
                <TestimonialCarousel />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <>
              <div className='pb-20'>
                <BookingForm />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

// Use wrapper so `useLocation` can work inside
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
