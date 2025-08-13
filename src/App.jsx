import { useRef, useEffect, useState } from 'react';
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
  const navigate = useNavigate();
  const location = useLocation();

  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if this is the first page load
    const navigationType = window.performance.getEntriesByType("navigation")[0]?.type;
    if (navigationType === "reload" || navigationType === "navigate") {
      setShowPreloader(true);
      setTimeout(() => setShowPreloader(false), 4500); // match your animation time
    }
  }, []);

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

  // Scroll to section after route navigation (from /booking)
  useEffect(() => {
    const section = location.state?.sectionToScroll;
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        navigate("/", { replace: true, state: null });
      }, 2000);
    }
  }, [location, navigate]);

  return (
    <>
      <ScrollToTop />
      <Navbar scrollToSection={scrollToSection} />
      {showPreloader ? (
        <Preloader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ paddingTop: '60px' }} ref={homeRef}>
                  <Home />
                </div>
                <div id='services' ref={contactRef}>
                  <AreasOfSupportWithCircle />
                </div>
                <div id="aboutme" ref={aboutRef}>
                  <AboutMe />
                </div>
                <div>
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
      )}
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
