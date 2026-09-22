import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section modern-section">
      <div className="container">
        <div className="cta-card glass-card-dark animate-pulse-glow">
          <div className="cta-content">
            <h2>Ready To Start Learning?</h2>
            <p>Join thousands of students from LKG to Class 12 already excelling with Eduneo.</p>
          </div>
          <div className="cta-actions">
            <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="btn-modern btn-primary" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>Book Free Trial</a>
            <Link to="/contact" className="btn-modern btn-outline" style={{borderColor: 'white', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
