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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <picture>
            <source srcSet="/eduneo-logo.webp" type="image/webp" />
            <img src="/eduneo-logo.png" alt="Eduneo Logo" className="logo-image" loading="eager" fetchPriority="high" decoding="async" />
          </picture>
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
          <div className="mobile-cta-wrapper">
            <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="btn btn-navbar-cta mobile-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>Enrol Now</a>
          </div>
        </nav>

        <div className="navbar-cta">
          <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="btn btn-navbar-cta">Enrol Now</a>
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
