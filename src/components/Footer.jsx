import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Globe, Share2, MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand & About */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-logo">
                <img src="/eduneo-logo.png" alt="Eduneo Logo" />
              </Link>
              <p className="footer-desc">
                Empowering students from playful foundational learning to rigorous exam preparation with personalized, AI-enhanced education.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Website"><Globe size={18} /></a>
                <a href="https://www.instagram.com/eduneo_academy?igsh=MXh6MHB0cWx0dzdzdg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>


            {/* Contact Info */}
            <div className="footer-col contact-col">
              <h3 className="footer-title">Get In Touch</h3>
              <ul className="footer-contact-info">
                <li>
                  <a href="tel:+917034600917" className="footer-contact-link">
                    <Phone size={20} className="contact-icon" />
                    <span>7034600917</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                    <MessageCircle size={20} className="contact-icon" />
                    <span>7034600908</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:condact.eduneoofficial@gmail.com" className="footer-contact-link">
                    <Mail size={20} className="contact-icon" />
                    <span>condact.eduneoofficial@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Eduneo. All rights reserved.</p>
          <div className="footer-legal-links">
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
