import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/eduneo-logo.png" alt="Eduneo Logo" className="logo-image" />
        </Link>

        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'mobile-overlay-open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Explore Courses</NavLink>
          <NavLink to="/classes">Base Classes</NavLink>
          <NavLink to="/contact">Contact</NavLink>


        </nav>

        <div className="navbar-cta">
          <Link to="/courses" className="btn btn-navbar-cta">Enrol Now</Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
