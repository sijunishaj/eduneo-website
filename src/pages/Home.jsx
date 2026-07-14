import React from 'react';
import { ArrowRight, BookOpen, MonitorPlay, Star, CheckCircle, Lightbulb, TrendingUp, Award, Book, Microscope, Users, Clock, Target, Play, ChevronRight, Calculator, FlaskConical, Code, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutEduNeo from '../components/AboutEduNeo';
import ClassesProvided from '../components/ClassesProvided';
import LetLearningBanner from '../components/LetLearningBanner';
import PopularClasses from '../components/PopularClasses';
import CreativeTestimonials from '../components/CreativeTestimonials';
import ScholarshipCarousel from '../components/ScholarshipCarousel';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section Redesign */}
      <section className="hero-redesign">
        <div className="hero-left">
          <div className="hero-left-content">
            <h1 className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Empowering<br />
              Students to<br />
              Achieve Excellence.
            </h1>
            <p className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              From playful foundational learning for primary kids to rigorous exam preparation for high schoolers. Eduneo provides personalized, AI-enhanced education for every stage.
            </p>
            {/* SVG Flask Icon Placeholder */}
            <div className="flask-icon animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e7612f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H15M10 3V8L4 19C3.5 20 4.2 21 5.3 21H18.7C19.8 21 20.5 20 20 19L14 8V3M4.5 18H19.5" />
                <path d="M8 14H16" />
                <path d="M12 14V21" />
              </svg>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="decor-circle decor-1 animate-sway"></div>
          <div className="decor-circle decor-2 animate-sway-delayed-1"></div>
          <div className="decor-star decor-3 animate-sway-delayed-2">✦</div>

          {/* Floating Educational Icons */}
          <div className="hero-floating-icon home-floating-1 animate-sway">
            <GraduationCap size={36} strokeWidth={1.5} color="rgba(255, 255, 255, 0.3)" />
          </div>
          <div className="hero-floating-icon home-floating-2 animate-sway-delayed-1">
            <BookOpen size={30} strokeWidth={1.5} color="rgba(255, 255, 255, 0.25)" />
          </div>
          <div className="hero-floating-icon home-floating-3 animate-sway-delayed-2">
            <FlaskConical size={28} strokeWidth={1.5} color="rgba(255, 255, 255, 0.3)" />
          </div>
        </div>
        <div className="hero-right">
          <div className="geometric-bg">
            <div className="shape yellow-triangle-top"></div>
            <div className="shape blue-rect-top"></div>
            <div className="shape orange-rect-mid"></div>
            <div className="shape yellow-rect-bottom"></div>
            <div className="shape orange-chevron"></div>
            <div className="shape darkblue-chevron"></div>
          </div>
          <img src="/boy-student.png" alt="Student" className="hero-student-img" />

        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <ScholarshipCarousel />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <AboutEduNeo />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ClassesProvided />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <PopularClasses />
      </ScrollReveal>

      <ScrollReveal direction="fade" delay={0.2}>
        <LetLearningBanner />
      </ScrollReveal>


      <ScrollReveal direction="up">
        {/* Learning Journey */}
        <section className="journey-section section">
          <div className="journey-container">
            <div className="section-header text-center">
              <h2 className="journey-title">The Eduneo <span>Learning Journey</span></h2>
              <p className="journey-subtitle">A structured path from enrollment to academic success.</p>
            </div>

            {/* S-shaped Flow Layout */}
            <div className="journey-flow-wrapper">

              {/* Top Row: Steps 1-3 (left to right) */}
              <div className="journey-row journey-row-top">
                {/* Step 1 */}
                <div className="journey-step-card">
                  <div className="step-number-badge">01</div>
                  <div className="step-icon-circle bg-blue-light">
                    <Users size={32} color="#1b4a83" strokeWidth={1.5} />
                  </div>
                  <div className="step-text-group">
                    <h4 className="step-card-title">Register</h4>
                    <p className="step-card-desc">Create your account in seconds</p>
                  </div>
                </div>

                {/* Mobile vertical arrow */}
                <svg className="journey-curved-arrow arrow-mobile-down" viewBox="0 0 40 50" fill="none">
                  <path d="M 20 5 Q 32 25 20 45" stroke="#1b4a83" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" fill="none" markerEnd="url(#arrowhead-m1)" />
                  <defs><marker id="arrowhead-m1" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1b4a83" /></marker></defs>
                </svg>

                {/* Arrow 1→2 */}
                <svg className="journey-curved-arrow arrow-horizontal" viewBox="0 0 120 60" fill="none">
                  <defs>
                    <marker id="arrowhead-1" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
                      <path d="M0,0 L0,8 L10,4 z" fill="#1b4a83" />
                    </marker>
                  </defs>
                  <path d="M 10 30 Q 60 0 110 30" stroke="#1b4a83" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowhead-1)" />
                </svg>

                {/* Step 2 */}
                <div className="journey-step-card">
                  <div className="step-number-badge">02</div>
                  <div className="step-icon-circle bg-green-light">
                    <BookOpen size={32} color="#2d7a4a" strokeWidth={1.5} />
                  </div>
                  <div className="step-text-group">
                    <h4 className="step-card-title">Choose Class</h4>
                    <p className="step-card-desc">Select your preferred class & subjects</p>
                  </div>
                </div>

                {/* Mobile vertical arrow */}
                <svg className="journey-curved-arrow arrow-mobile-down" viewBox="0 0 40 50" fill="none">
                  <path d="M 20 5 Q 32 25 20 45" stroke="#e5602b" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" fill="none" markerEnd="url(#arrowhead-m2)" />
                  <defs><marker id="arrowhead-m2" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#e5602b" /></marker></defs>
                </svg>

                {/* Arrow 2→3 */}
                <svg className="journey-curved-arrow arrow-horizontal" viewBox="0 0 120 60" fill="none">
                  <defs>
                    <marker id="arrowhead-2" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
                      <path d="M0,0 L0,8 L10,4 z" fill="#e5602b" />
                    </marker>
                  </defs>
                  <path d="M 10 30 Q 60 0 110 30" stroke="#e5602b" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowhead-2)" />
                </svg>

                {/* Step 3 */}
                <div className="journey-step-card">
                  <div className="step-number-badge">03</div>
                  <div className="step-icon-circle bg-yellow-light">
                    <MonitorPlay size={32} color="#b45309" strokeWidth={1.5} />
                  </div>
                  <div className="step-text-group">
                    <h4 className="step-card-title">Live Classes</h4>
                    <p className="step-card-desc">Join live interactive sessions</p>
                  </div>
                </div>

                {/* Mobile vertical arrow */}
                <svg className="journey-curved-arrow arrow-mobile-down" viewBox="0 0 40 50" fill="none">
                  <path d="M 20 5 Q 32 25 20 45" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" fill="none" markerEnd="url(#arrowhead-m3)" />
                  <defs><marker id="arrowhead-m3" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#b45309" /></marker></defs>
                </svg>
              </div>

              {/* Vertical connector arrow (right side, connecting row 1 to row 2) */}
              <div className="journey-vertical-connector">
                <svg className="journey-curved-arrow arrow-vertical" viewBox="0 0 60 80" fill="none">
                  <defs>
                    <marker id="arrowhead-v" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
                      <path d="M0,0 L0,8 L10,4 z" fill="#1b4a83" />
                    </marker>
                  </defs>
                  <path d="M 30 5 Q 55 40 30 75" stroke="#1b4a83" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowhead-v)" />
                </svg>
              </div>

              {/* Bottom Row: Steps 4-6 (right to left) */}
              <div className="journey-row journey-row-bottom">
                {/* Step 4 */}
                <div className="journey-step-card">
                  <div className="step-number-badge">04</div>
                  <div className="step-icon-circle bg-purple-light">
                    <Target size={32} color="#6b21a8" strokeWidth={1.5} />
                  </div>
                  <div className="step-text-group">
                    <h4 className="step-card-title">Practice</h4>
                    <p className="step-card-desc">Reinforce learning with practice</p>
                  </div>
                </div>

                {/* Mobile vertical arrow */}
                <svg className="journey-curved-arrow arrow-mobile-down" viewBox="0 0 40 50" fill="none">
                  <path d="M 20 5 Q 32 25 20 45" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" fill="none" markerEnd="url(#arrowhead-m4)" />
                  <defs><marker id="arrowhead-m4" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6b21a8" /></marker></defs>
                </svg>

                {/* Arrow 4→5 */}
                <svg className="journey-curved-arrow arrow-horizontal arrow-flip" viewBox="0 0 120 60" fill="none">
                  <defs>
                    <marker id="arrowhead-4" markerWidth="10" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse">
                      <path d="M10,0 L10,8 L0,4 z" fill="#6b21a8" />
                    </marker>
                  </defs>
                  <path d="M 110 30 Q 60 60 10 30" stroke="#6b21a8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowhead-4)" />
                </svg>

                {/* Step 5 */}
                <div className="journey-step-card">
                  <div className="step-number-badge">05</div>
                  <div className="step-icon-circle bg-teal-light">
                    <CheckCircle size={32} color="#0d7377" strokeWidth={1.5} />
                  </div>
                  <div className="step-text-group">
                    <h4 className="step-card-title">Assessments</h4>
                    <p className="step-card-desc">Test your knowledge regularly</p>
                  </div>
                </div>

                {/* Mobile vertical arrow */}
                <svg className="journey-curved-arrow arrow-mobile-down" viewBox="0 0 40 50" fill="none">
                  <path d="M 20 5 Q 32 25 20 45" stroke="#0d7377" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" fill="none" markerEnd="url(#arrowhead-m5)" />
                  <defs><marker id="arrowhead-m5" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0d7377" /></marker></defs>
                </svg>

                {/* Arrow 5→6 */}
                <svg className="journey-curved-arrow arrow-horizontal arrow-flip" viewBox="0 0 120 60" fill="none">
                  <defs>
                    <marker id="arrowhead-5" markerWidth="10" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse">
                      <path d="M10,0 L10,8 L0,4 z" fill="#0d7377" />
                    </marker>
                  </defs>
                  <path d="M 110 30 Q 60 60 10 30" stroke="#0d7377" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowhead-5)" />
                </svg>

                {/* Step 6 */}
                <div className="journey-step-card journey-step-success">
                  <div className="step-number-badge badge-success">06</div>
                  <div className="step-icon-circle bg-orange-light">
                    <Award size={32} color="#e5602b" strokeWidth={1.5} />
                  </div>
                  <div className="step-text-group">
                    <h4 className="step-card-title">Success</h4>
                    <p className="step-card-desc">Achieve academic excellence</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <CreativeTestimonials />
      </ScrollReveal>

    </div>
  );
};

export default Home;
