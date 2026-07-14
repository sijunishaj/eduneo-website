import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ExploreCourses from './pages/ExploreCourses';
import BaseClasses from './pages/BaseClasses';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`global-loader ${!isLoading ? 'fade-out' : ''}`}>
        <img src="/eduneo-logo.png" alt="Eduneo Loading..." className="loader-logo" />
      </div>
      
      <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/courses" element={<PageTransition><ExploreCourses /></PageTransition>} />
            <Route path="/classes" element={<PageTransition><BaseClasses /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      {/* Global Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917034600908" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.146.564 4.195 1.637 6.012L.18 23.351l5.474-1.436a11.968 11.968 0 006.377 1.815c6.634 0 12.027-5.394 12.027-12.031C24.058 5.394 18.665 0 12.031 0zm0 21.73a9.972 9.972 0 01-5.086-1.385l-.364-.216-3.784.992.997-3.69-.237-.377A9.957 9.957 0 012.057 12.03c0-5.503 4.478-9.98 9.974-9.98 5.5 0 9.977 4.477 9.977 9.98 0 5.503-4.477 9.98-9.977 9.98zm5.47-7.464c-.299-.15-1.774-.877-2.049-.977-.275-.1-.476-.15-.676.15-.2.299-.774.977-.949 1.176-.175.2-.35.226-.649.076-1.5-.75-2.793-1.666-3.856-3.528-.175-.3.018-.462.168-.611.135-.135.299-.35.449-.525.15-.175.2-.299.299-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.626-.925-2.226-.24-.585-.486-.505-.676-.514-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.049 1.026-1.049 2.502 0 1.477 1.074 2.903 1.224 3.103.15.2 2.115 3.229 5.123 4.529 2.055.886 2.87.973 3.931.815 1.157-.171 3.526-1.44 4.026-2.829.5-1.389.5-2.578.35-2.829-.15-.25-.55-.4-.85-.55z"/>
        </svg>
      </a>
    </div>
    </>
  );
}

export default App;
