import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AreasOfSupportWithCircle from './pages/Services';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Navbar from './pages/Navabr';
import ScrollToTop from './pages/ScrollToTop';


function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const storiesRef= useRef(null);
  const pricingRef= useRef(null);

  // Scroll to section function
  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'aboutme' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'services' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
   
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar scrollToSection={scrollToSection} />
      <div> {/* Ensures content doesn't go under navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div  style={{ paddingTop: '60px' }} ref={homeRef}>
               
                  <Home/>
                </div>
                <div  style={{ paddingTop: '100px' }} ref={contactRef}>
                
                <AreasOfSupportWithCircle />
                </div>
                <div  style={{ paddingTop: '80px'}} ref={aboutRef}>
               
                  <AboutMe/>
                </div>
              </>
            }
          />
          
         
        
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
