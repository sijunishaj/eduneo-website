import React from 'react';
import { Quote } from 'lucide-react';
import './ClassesProvided.css';

const ClassesProvided = () => {
  const classesList = [
    'LKG', 'UKG', 'CLASS 1', 'CLASS 2', 'CLASS 3',
    'CLASS 4', 'CLASS 5', 'CLASS 6', 'CLASS 7', 'CLASS 8',
    'CLASS 9', 'CLASS 10', 'PLUS 1', 'PLUS 2'
  ];

  return (
    <section className="classes-provided-section">
      {/* Decorative Background Elements */}
      <div className="cp-decor cp-yellow-pill"></div>
      <div className="cp-decor cp-orange-hourglass"></div>
      <div className="cp-decor cp-blue-quarter"></div>
      <div className="cp-decor cp-orange-drop"></div>
      <div className="cp-decor cp-yellow-hourglass-large"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="cp-header text-center">
          <h2>Learning Pathways</h2>
          <p className="cp-subtitle">Comprehensive classes tailored for every stage of your academic journey.</p>
        </div>
        
        <div className="cp-content-layout">
          <div className="classes-grid">
            {classesList.map((cls, index) => (
              <div key={index} className={`class-pill ${cls.includes('PLUS') ? 'plus-pill' : ''}`}>
                {cls}
              </div>
            ))}
          </div>

          <div className="cp-quote-free">
            <div className="quote-accent-shape"></div>
            <div className="quote-text-wrap">
              <p className="cp-quote" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great."<br/><br/>
                <span style={{ display: 'block', textAlign: 'right', fontSize: '0.9rem', opacity: 0.8 }}>— A. P. J. Abdul Kalam</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesProvided;
