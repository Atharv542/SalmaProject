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
import PodcastInvite from './pages/Podcast';
import CertificateSection from './pages/Certificate';
import FAQ from './pages/FAQ';
import PricingCard from './pages/Pricing';

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

  // In AppWrapper
const [isPodcastOpen, setIsPodcastOpen] = useState(false);

return (
  <>
    <ScrollToTop />
   <Navbar
  scrollToSection={scrollToSection}
  openPodcastPopup={() => setIsPodcastOpen(true)} // ✅ name matches Navbar
/>
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
            <CertificateSection/>
              <div>
                <VisionMission />
              </div>
              <div className="pb-20 md:ml-20" id="yourjourney" ref={journeyRef}>
                <WhatToExpect />
              </div>
              <div className="pb-20 md:ml-20">
                <TestimonialCarousel />
              </div>
              {/*<PricingCard/>*/}
              <FAQ/>
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
         <Route
          path="/podcast-booking"
          element={
            <>
              <div className='pt-24 pb-5'>
              <PodcastInvite youtubeUrl="https://www.youtube.com/@salmanisha2025" />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    )}

    {/* Podcast Modal */}
    {isPodcastOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={() => setIsPodcastOpen(false)}
          >
            ✕
          </button>
          <PodcastInvite youtubeUrl="https://www.youtube.com/@salmanisha2025" />
        </div>
      </div>
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
