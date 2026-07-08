import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './BaseClasses.css';

const BaseClasses = () => {
  return (
    <div className="base-classes-page">
      {/* Top Geometric Banner */}
      <div className="base-classes-top-banner">
        <svg viewBox="0 0 1600 260" preserveAspectRatio="xMidYMid slice">
           <polygon points="0,0 100,0 100,160 0,160" fill="#f1f5f9" />
           <polygon points="0,160 0,260 100,260" fill="#55a8e0" />
           <polygon points="100,0 300,0 450,130 100,130" fill="#f7cd55" />
           <polygon points="100,130 450,130 300,260 100,260" fill="#e7612f" />
           <rect x="450" y="0" width="400" height="260" fill="#67a775" />
           <path d="M 850,0 A 130 130 0 0 1 850,260 Z" fill="#e7612f" />
           <path d="M 1110,0 A 130 130 0 0 0 1110,260 Z" fill="#e7612f" />
           <polygon points="1110,260 1310,260 1410,100" fill="#1b4a83" />
           <polygon points="1410,0 1600,0 1600,260" fill="#55a8e0" />
        </svg>
      </div>



      {/* Full-Width Classes Section */}
      <div className="fw-classes-wrapper">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="fw-classes-header">
              <h2>Our Foundation Programs</h2>
              <p>Step-by-step training to ensure no student is left behind.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Class 1 */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="fw-class-section bg-white border-top-blue">
            <div className="container fw-class-container">
              <div className="fw-class-left">
                <h3 className="fw-class-title">Language Basics Training</h3>
                <div className="fw-class-divider bg-blue"></div>
              </div>
              <div className="fw-class-right">
                <p className="fw-class-desc">
                  Designed for students struggling with language comprehension. We start from the absolute alphabet and phonics, slowly building up vocabulary and sentence structure to ensure full confidence in reading and writing.
                </p>
                <ul className="fw-class-features">
                  <li>Alphabet and phonics mastery</li>
                  <li>Basic vocabulary building</li>
                  <li>Simple sentence construction</li>
                  <li>Patient, 1-on-1 reading support</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Class 2 */}
        <ScrollReveal direction="up" delay={0.2}>
          <section className="fw-class-section bg-light-gray border-top-orange">
            <div className="container fw-class-container">
              <div className="fw-class-left">
                <h3 className="fw-class-title">Primary Foundations (Class 1-5)</h3>
                <div className="fw-class-divider bg-orange"></div>
              </div>
              <div className="fw-class-right">
                <p className="fw-class-desc">
                  For young learners who need extra time to grasp core concepts in Math and EVS. We use interactive, visual methods to break down complex ideas into simple, digestible steps.
                </p>
                <ul className="fw-class-features">
                  <li>Visual and hands-on learning</li>
                  <li>Focus on fundamental arithmetic</li>
                  <li>Overcoming study anxiety</li>
                  <li>Regular progress tracking</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Class 3 */}
        <ScrollReveal direction="up" delay={0.3}>
          <section className="fw-class-section bg-white border-top-yellow">
            <div className="container fw-class-container">
              <div className="fw-class-left">
                <h3 className="fw-class-title">Bridge Courses (Class 6-8)</h3>
                <div className="fw-class-divider bg-yellow"></div>
              </div>
              <div className="fw-class-right">
                <p className="fw-class-desc">
                  Bridge the gap between lower and higher classes. If a student is falling behind in Middle School, this course revisits earlier concepts to ensure they are fully prepared for high school curriculums.
                </p>
                <ul className="fw-class-features">
                  <li>Revisiting core concepts</li>
                  <li>Improving analytical thinking</li>
                  <li>Language comprehension support</li>
                  <li>Study skill development</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BaseClasses;
