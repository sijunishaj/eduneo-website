import React from 'react';
import { Target, Lightbulb, Heart, Shield, Award, Calendar, Users, CheckCircle, Mail, Globe, Sparkles, BookOpen, GraduationCap, Pencil, Calculator } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const About = () => {
  const teachers = [
    { name: 'Dr. Ramesh Kumar', subject: 'Mathematics Specialist', exp: '12+ Years Exp', grad: 'M.Sc., Ph.D.' },
    { name: 'Prof. Sarah Mathews', subject: 'Physics & Chemistry Expert', exp: '10+ Years Exp', grad: 'M.Tech, B.Ed.' },
    { name: 'Anjali S. Pillai', subject: 'English & Literature Coach', exp: '8+ Years Exp', grad: 'M.A., B.Ed.' },
    { name: 'Aswin Jose', subject: 'Computer Science Instructor', exp: '7+ Years Exp', grad: 'MCA' }
  ];

  return (
    <div className="about-page">
      {/* Top Geometric Banner */}
      <div style={{ width: '100%', height: '140px', overflow: 'hidden', pointerEvents: 'none' }}>
        <svg viewBox="0 0 1600 260" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
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

      {/* Split Hero Banner (Exact SVG Design) */}
      <section className="custom-about-hero">
        
        {/* Floating Education Design Elements */}
        <div className="hero-floating-element element-edu-1">
          <GraduationCap size={42} strokeWidth={1.5} color="#55a8e0" />
        </div>
        <div className="hero-floating-element element-edu-2">
          <BookOpen size={36} strokeWidth={1.5} color="#f7cd55" />
        </div>
        <div className="hero-floating-element element-edu-3">
          <Pencil size={32} strokeWidth={1.5} color="#e7612f" />
        </div>
        <div className="hero-floating-element element-edu-4">
          <Calculator size={38} strokeWidth={1.5} color="#67a775" />
        </div>

        <div className="custom-hero-left">
          <div className="custom-hero-left-content">
            <div className="custom-about-label">
              About Eduneo
            </div>
            <h1 className="custom-hero-heading">
              Empowering Minds,<br/>
              Shaping Tomorrows
            </h1>
            <p className="custom-hero-paragraph">
              EduNeo is a premier online learning destination committed to unlocking student potential. We bridge syllabus requirements with immersive, personalized digital classrooms.
            </p>
          </div>
        </div>
        <div className="custom-hero-right">
          <div className="creative-blob-container">
             <div className="creative-blob-bg"></div>
             <img 
               src="/about-image-1.png" 
               alt="Student studying" 
               className="creative-blob-img" 
             />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Minimal Grid */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="mvg-minimal-section">
          <div className="container">
            <div className="mvg-minimal-grid">
              <div className="mvg-minimal-card">
                <h3>Mission</h3>
                <p>To make premium education accessible, interactive, and personalized for every student, regardless of their grade or syllabus.</p>
              </div>
              <div className="mvg-minimal-card">
                <h3>Vision</h3>
                <p>To lead the future of digital education, nurturing creative, analytical, and confident thinkers who are globally competitive.</p>
              </div>
              <div className="mvg-minimal-card">
                <h3>Values</h3>
                <p>Excellence, Integrity, Innovation, Empathy, and a relentless devotion to continuous student improvement.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>



      {/* Why Parents Trust Us (Light Premium Redesign) */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="trust-section-light">
          <div className="container">
            
            {/* Top Horizontal Stats Banner */}
            <div className="trust-stats-horizontal-light">
               <div className="stat-item-light">
                  <div className="stat-number-light text-yellow">98%</div>
                  <div className="stat-label-light">Satisfaction Rate</div>
               </div>
               <div className="stat-item-light">
                  <div className="stat-number-light text-orange">10k+</div>
                  <div className="stat-label-light">Active Students</div>
               </div>
               <div className="stat-item-light">
                  <div className="stat-number-light text-blue-light">1-on-1</div>
                  <div className="stat-label-light">Mentorship Option</div>
               </div>
               <div className="stat-item-light">
                  <div className="stat-number-light text-green">100%</div>
                  <div className="stat-label-light">Syllabus Covered</div>
               </div>
            </div>

            <div className="trust-header-light text-center">
              <h2>Why Parents Trust <span className="text-highlight">EduNeo</span></h2>
              <p>Choosing the right platform shapes a student's entire foundation. Here is why thousands confidently choose us:</p>
            </div>
            
            {/* Bottom 3-Column Feature Grid */}
            <div className="trust-features-grid-light">
              <div className="trust-feature-card-light">
                <div className="trust-icon-wrapper-light bg-blue-glow">
                  <CheckCircle size={28} color="#55a8e0" />
                </div>
                <h4>Verified Faculty</h4>
                <p>Strict academic and background screening ensures your child learns only from top-tier educators.</p>
              </div>
              
              <div className="trust-feature-card-light">
                <div className="trust-icon-wrapper-light bg-orange-glow">
                  <CheckCircle size={28} color="#e7612f" />
                </div>
                <h4>Progress Dashboards</h4>
                <p>Get instant, transparent insight into grades, attendance, and overall performance in real-time.</p>
              </div>
              
              <div className="trust-feature-card-light">
                <div className="trust-icon-wrapper-light bg-yellow-glow">
                  <CheckCircle size={28} color="#f7cd55" />
                </div>
                <h4>Active PTM Frameworks</h4>
                <p>Regular parent-teacher meetings ensure complete alignment to resolve any academic gaps quickly.</p>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
