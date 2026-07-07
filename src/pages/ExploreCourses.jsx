import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './ExploreCourses.css';

const ExploreCourses = () => {
  return (
    <div className="explore-courses-page">
      {/* Top Geometric Banner */}
      <div className="courses-top-banner">
        <svg viewBox="0 0 1600 260" preserveAspectRatio="xMidYMid slice">
           <polygon points="0,160 0,260 100,260" fill="#67a775" />
           <polygon points="100,0 300,0 450,130 100,130" fill="#e7612f" />
           <polygon points="100,130 450,130 300,260 100,260" fill="#f7cd55" />
           <rect x="450" y="0" width="400" height="260" fill="#55a8e0" />
           <path d="M 850,0 A 130 130 0 0 1 850,260 Z" fill="#f7cd55" />
           <path d="M 1110,0 A 130 130 0 0 0 1110,260 Z" fill="#f7cd55" />
           <polygon points="1110,260 1310,260 1410,100" fill="#1b4a83" />
           <polygon points="1410,0 1600,0 1600,260" fill="#e7612f" />
        </svg>
      </div>

      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section 
          className="courses-hero-typographic"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          >
            <source src="/couses hero.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for Text Readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="courses-hero-content">
              <span className="courses-subtitle">Our Programs</span>
              <h1 className="courses-title">Explore Courses At Eduneo</h1>
              <p className="courses-description">
                AI + Human powered soft skills and academic programs designed to unlock student potential across all levels.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Animated Marquee Line */}
      <div className="courses-marquee-container">
        <div className="courses-marquee-track">
          <div className="marquee-content">
            <span className="marquee-item">✦ 100% Syllabus Coverage</span>
            <span className="marquee-item">✦ Expert Verified Faculty</span>
            <span className="marquee-item">✦ Regular PTM Frameworks</span>
            <span className="marquee-item">✦ Comprehensive Mock Tests</span>
            <span className="marquee-item">✦ Interactive Digital Classrooms</span>
            <span className="marquee-item">✦ Personalized Learning Paths</span>
            <span className="marquee-item">✦ 24/7 Doubt Resolution</span>
            <span className="marquee-item">✦ Conceptual Clarity</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="marquee-item">✦ 100% Syllabus Coverage</span>
            <span className="marquee-item">✦ Expert Verified Faculty</span>
            <span className="marquee-item">✦ Regular PTM Frameworks</span>
            <span className="marquee-item">✦ Comprehensive Mock Tests</span>
            <span className="marquee-item">✦ Interactive Digital Classrooms</span>
            <span className="marquee-item">✦ Personalized Learning Paths</span>
            <span className="marquee-item">✦ 24/7 Doubt Resolution</span>
            <span className="marquee-item">✦ Conceptual Clarity</span>
          </div>
        </div>
      </div>

      {/* Core Programs Grid Section */}
      <div className="core-programs-wrapper">
        <div className="container">
          <div className="core-programs-header">
            <h2>Our Core Programs</h2>
            <p>Comprehensive learning paths designed for academic excellence.</p>
          </div>

          <div className="core-creative-grid">
            {/* Course 1 */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="core-creative-card">
                <div className="core-card-number">01</div>
                <div className="core-card-content">
                  <h3 className="core-creative-title text-dark">KG to Plus Two Tuition</h3>
                  <div className="core-course-divider bg-blue"></div>
                  <p className="core-creative-desc text-muted">
                    Comprehensive tuition classes covering all subjects from Kindergarten through Higher Secondary levels. We focus on building a robust academic foundation.
                  </p>
                  <ul className="core-creative-features text-muted">
                    <li>Syllabus-aligned curriculum</li>
                    <li>In-depth conceptual clarity</li>
                    <li>Regular performance tracking</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Course 2 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="core-creative-card">
                <div className="core-card-number">02</div>
                <div className="core-card-content">
                  <h3 className="core-creative-title text-dark">One Teacher Program</h3>
                  <div className="core-course-divider bg-orange"></div>
                  <p className="core-creative-desc text-muted">
                    Experience unparalleled personalized attention with a dedicated mentor. This program assigns a single expert teacher to guide the student.
                  </p>
                  <ul className="core-creative-features text-muted">
                    <li>1-on-1 personalized mentorship</li>
                    <li>Customized learning pace</li>
                    <li>Immediate doubt resolution</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Course 3 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="core-creative-card">
                <div className="core-card-number">03</div>
                <div className="core-card-content">
                  <h3 className="core-creative-title text-dark">Batch Wise Classes</h3>
                  <div className="core-course-divider bg-yellow"></div>
                  <p className="core-creative-desc text-muted">
                    Engage in structured batch learning to encourage peer interaction, healthy competition, and teamwork while maintaining a highly focused learning environment.
                  </p>
                  <ul className="core-creative-features text-muted">
                    <li>Peer-to-peer learning</li>
                    <li>Small batch sizes</li>
                    <li>Structured group discussions</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Course 4 */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="core-creative-card">
                <div className="core-card-number">04</div>
                <div className="core-card-content">
                  <h3 className="core-creative-title text-dark">Exam Oriented Prep</h3>
                  <div className="core-course-divider bg-green"></div>
                  <p className="core-creative-desc text-muted">
                    Targeted coaching strategies specifically designed to help students excel in board exams and competitive tests. We prioritize score optimization.
                  </p>
                  <ul className="core-creative-features text-muted">
                    <li>Extensive mock tests</li>
                    <li>Advanced time management</li>
                    <li>Detailed performance analytics</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Course 5 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="core-creative-card">
                <div className="core-card-number">05</div>
                <div className="core-card-content">
                  <h3 className="core-creative-title text-dark">7 Days Revision Classes</h3>
                  <div className="core-course-divider bg-dark"></div>
                  <p className="core-creative-desc text-muted">
                    Intensive, short-term revision sessions designed to quickly consolidate key concepts right before the exams. Maximize confidence in just one week.
                  </p>
                  <ul className="core-creative-features text-muted">
                    <li>Rapid syllabus coverage</li>
                    <li>Focus on high-weightage topics</li>
                    <li>Last-minute doubt clearance</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
