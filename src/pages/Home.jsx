import React from 'react';
import { ArrowRight, BookOpen, MonitorPlay, Star, CheckCircle, Lightbulb, TrendingUp, Award, Book, Microscope, Users, Clock, Target, Play, ChevronRight, Calculator, FlaskConical, Code, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutEduNeo from '../components/AboutEduNeo';
import FoundersMessage from '../components/FoundersMessage';
import WhyEduNeo from '../components/WhyEduNeo';
import ClassesProvided from '../components/ClassesProvided';
import LearningSupport from '../components/LearningSupport';
import LetLearningBanner from '../components/LetLearningBanner';
import CurriculumsWeCover from '../components/CurriculumsWeCover';
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
            {/* SVG Flask Icon */}
            <div className="flask-icon animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#44a6d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H15M10 3V8L4 19C3.5 20 4.2 21 5.3 21H18.7C19.8 21 20.5 20 20 19L14 8V3M4.5 18H19.5" />
                <path d="M8 14H16" />
              </svg>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="decor-circle decor-1 animate-sway"></div>
          <div className="decor-circle decor-2 animate-sway-delayed-1"></div>
          <div className="decor-star decor-3 animate-sway-delayed-2">✦</div>

          {/* Floating Educational Icons */}
          <div className="hero-floating-icon home-floating-1 animate-sway">
            <GraduationCap size={36} strokeWidth={1.5} color="rgba(38, 71, 144, 0.2)" />
          </div>
          <div className="hero-floating-icon home-floating-2 animate-sway-delayed-1">
            <BookOpen size={30} strokeWidth={1.5} color="rgba(68, 166, 217, 0.3)" />
          </div>
          <div className="hero-floating-icon home-floating-3 animate-sway-delayed-2">
            <FlaskConical size={28} strokeWidth={1.5} color="rgba(38, 71, 144, 0.2)" />
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
          <picture>
            <source srcSet="/boy-student.webp" type="image/webp" />
            <img
              src="/boy-student.png"
              alt="Student"
              className="hero-student-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <ScholarshipCarousel />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <AboutEduNeo />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <FoundersMessage />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <WhyEduNeo />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <LearningSupport />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <CurriculumsWeCover />
      </ScrollReveal>

      <ScrollReveal direction="fade" delay={0.2}>
        <LetLearningBanner />
      </ScrollReveal>


      <ScrollReveal direction="up">
        {/* Learning Journey */}
        <section className="journey-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="journey-title">The Eduneo <span>Learning Journey</span></h2>
              <p className="journey-subtitle">A structured path from enrollment to academic success.</p>
            </div>

            <div className="journey-single-row">
              {/* Step 1 */}
              <div className="journey-step-card">
                <div className="step-number-badge">01</div>
                <div className="step-icon-circle bg-blue-light">
                  <Users size={30} color="#264790" strokeWidth={1.5} />
                </div>
                <div className="step-text-group">
                  <h4 className="step-card-title">Register</h4>
                  <p className="step-card-desc">Create your account in seconds</p>
                </div>
              </div>

              {/* Arrow 1→2 (Desktop) */}
              <svg className="journey-arrow-desktop" viewBox="0 0 50 20" fill="none">
                <path d="M 5 10 L 40 10" stroke="#264790" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 35 5 L 43 10 L 35 15" fill="none" stroke="#264790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Arrow 1→2 (Mobile) */}
              <svg className="journey-arrow-mobile" viewBox="0 0 20 35" fill="none">
                <path d="M 10 5 L 10 27" stroke="#264790" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 5 22 L 10 30 L 15 22" fill="none" stroke="#264790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 2 */}
              <div className="journey-step-card">
                <div className="step-number-badge">02</div>
                <div className="step-icon-circle bg-green-light">
                  <BookOpen size={30} color="#44a6d9" strokeWidth={1.5} />
                </div>
                <div className="step-text-group">
                  <h4 className="step-card-title">Choose Class</h4>
                  <p className="step-card-desc">Select your preferred class & subjects</p>
                </div>
              </div>

              {/* Arrow 2→3 (Desktop) */}
              <svg className="journey-arrow-desktop" viewBox="0 0 50 20" fill="none">
                <path d="M 5 10 L 40 10" stroke="#44a6d9" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 35 5 L 43 10 L 35 15" fill="none" stroke="#44a6d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Arrow 2→3 (Mobile) */}
              <svg className="journey-arrow-mobile" viewBox="0 0 20 35" fill="none">
                <path d="M 10 5 L 10 27" stroke="#44a6d9" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 5 22 L 10 30 L 15 22" fill="none" stroke="#44a6d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 3 */}
              <div className="journey-step-card">
                <div className="step-number-badge">03</div>
                <div className="step-icon-circle bg-yellow-light">
                  <MonitorPlay size={30} color="#264790" strokeWidth={1.5} />
                </div>
                <div className="step-text-group">
                  <h4 className="step-card-title">Live Classes</h4>
                  <p className="step-card-desc">Join live interactive sessions</p>
                </div>
              </div>

              {/* Arrow 3→4 (Desktop) */}
              <svg className="journey-arrow-desktop" viewBox="0 0 50 20" fill="none">
                <path d="M 5 10 L 40 10" stroke="#264790" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 35 5 L 43 10 L 35 15" fill="none" stroke="#264790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Arrow 3→4 (Mobile) */}
              <svg className="journey-arrow-mobile" viewBox="0 0 20 35" fill="none">
                <path d="M 10 5 L 10 27" stroke="#264790" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 5 22 L 10 30 L 15 22" fill="none" stroke="#264790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 4 */}
              <div className="journey-step-card">
                <div className="step-number-badge">04</div>
                <div className="step-icon-circle bg-purple-light">
                  <Target size={30} color="#44a6d9" strokeWidth={1.5} />
                </div>
                <div className="step-text-group">
                  <h4 className="step-card-title">Practice</h4>
                  <p className="step-card-desc">Reinforce learning with practice</p>
                </div>
              </div>

              {/* Arrow 4→5 (Desktop) */}
              <svg className="journey-arrow-desktop" viewBox="0 0 50 20" fill="none">
                <path d="M 5 10 L 40 10" stroke="#44a6d9" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 35 5 L 43 10 L 35 15" fill="none" stroke="#44a6d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Arrow 4→5 (Mobile) */}
              <svg className="journey-arrow-mobile" viewBox="0 0 20 35" fill="none">
                <path d="M 10 5 L 10 27" stroke="#44a6d9" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 5 22 L 10 30 L 15 22" fill="none" stroke="#44a6d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 5 */}
              <div className="journey-step-card">
                <div className="step-number-badge">05</div>
                <div className="step-icon-circle bg-teal-light">
                  <CheckCircle size={30} color="#264790" strokeWidth={1.5} />
                </div>
                <div className="step-text-group">
                  <h4 className="step-card-title">Assessments</h4>
                  <p className="step-card-desc">Test your knowledge regularly</p>
                </div>
              </div>

              {/* Arrow 5→6 (Desktop) */}
              <svg className="journey-arrow-desktop" viewBox="0 0 50 20" fill="none">
                <path d="M 5 10 L 40 10" stroke="#264790" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 35 5 L 43 10 L 35 15" fill="none" stroke="#264790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Arrow 5→6 (Mobile) */}
              <svg className="journey-arrow-mobile" viewBox="0 0 20 35" fill="none">
                <path d="M 10 5 L 10 27" stroke="#264790" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M 5 22 L 10 30 L 15 22" fill="none" stroke="#264790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 6 */}
              <div className="journey-step-card journey-step-success">
                <div className="step-number-badge badge-success">06</div>
                <div className="step-icon-circle bg-orange-light">
                  <Award size={30} color="#44a6d9" strokeWidth={1.5} />
                </div>
                <div className="step-text-group">
                  <h4 className="step-card-title">Success</h4>
                  <p className="step-card-desc">Achieve academic excellence</p>
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
