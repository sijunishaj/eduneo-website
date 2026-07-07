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
          <div className="decor-circle decor-1"></div>
          <div className="decor-circle decor-2"></div>
          <div className="decor-star decor-3">✦</div>
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
          <img src="/eduneo-heroimage.png" alt="Student" className="hero-student-img" />

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
          <div className="container relative z-10">
            <div className="section-header text-center">
              <h2 className="journey-title">The Eduneo <span>Learning Journey</span></h2>
              <p className="journey-subtitle">A structured path from enrollment to academic success.</p>
            </div>

            <div className="journey-timeline mt-4">
              <div className="journey-step">
                <div className="step-number">1</div>
                <h4>Register</h4>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <div className="step-number">2</div>
                <h4>Choose Class</h4>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <div className="step-number">3</div>
                <h4>Live Classes</h4>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <div className="step-number">4</div>
                <h4>Practice</h4>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <div className="step-number">5</div>
                <h4>Assessments</h4>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <div className="step-number">6</div>
                <h4>Success</h4>
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
