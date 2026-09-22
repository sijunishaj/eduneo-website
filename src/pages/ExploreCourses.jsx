import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Users, Target, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './ExploreCourses.css';

const coursesList = [
  {
    number: '01',
    title: 'KG to Plus Two Tuition',
    icon: GraduationCap,
    colorClass: 'theme-blue',
    desc: 'Comprehensive tuition classes covering all subjects from Kindergarten through Higher Secondary levels. We focus on building a robust academic foundation.',
    features: [
      'Syllabus-aligned curriculum',
      'In-depth conceptual clarity',
      'Regular performance tracking'
    ]
  },
  {
    number: '02',
    title: 'One Teacher Program',
    icon: UserCheck,
    colorClass: 'theme-amber',
    desc: 'Experience unparalleled personalized attention with a dedicated mentor. This program assigns a single expert teacher to guide the student.',
    features: [
      '1-on-1 personalized mentorship',
      'Customized learning pace',
      'Immediate doubt resolution'
    ]
  },
  {
    number: '03',
    title: 'Batch Wise Classes',
    icon: Users,
    colorClass: 'theme-purple',
    desc: 'Engage in structured batch learning to encourage peer interaction, healthy competition, and teamwork while maintaining a highly focused learning environment.',
    features: [
      'Peer-to-peer learning',
      'Small batch sizes',
      'Structured group discussions'
    ]
  },
  {
    number: '04',
    title: 'Exam Oriented Prep',
    icon: Target,
    colorClass: 'theme-emerald',
    desc: 'Targeted coaching strategies specifically designed to help students excel in board exams and competitive tests. We prioritize score optimization.',
    features: [
      'Extensive mock tests',
      'Advanced time management',
      'Detailed performance analytics'
    ]
  },
  {
    number: '05',
    title: '7 Days Revision Classes',
    icon: Zap,
    colorClass: 'theme-rose',
    desc: 'Intensive, short-term revision sessions designed to quickly consolidate key concepts right before the exams. Maximize confidence in just one week.',
    features: [
      'Rapid syllabus coverage',
      'Focus on high-weightage topics',
      'Last-minute doubt clearance'
    ]
  }
];

const marqueeItems = [
  '100% Syllabus Coverage',
  'Expert Verified Faculty',
  'Regular PTM Frameworks',
  'Comprehensive Mock Tests',
  'Interactive Digital Classrooms',
  'Personalized Learning Paths',
  '24/7 Doubt Resolution',
  'Conceptual Clarity'
];

const ExploreCourses = () => {
  return (
    <div className="explore-courses-page">
      {/* Hero Section */}
      <section className="courses-hero-section">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="courses-hero-video"
        >
          <source src="/couses hero.mp4" type="video/mp4" />
        </video>
        <div className="courses-hero-overlay"></div>

        <div className="container courses-hero-container">
          <div className="courses-hero-content">
            <span className="courses-hero-badge">Our Programs</span>
            <h1 className="courses-hero-title">Explore Courses At Eduneo</h1>
          </div>
        </div>
      </section>

      {/* Animated Marquee Line */}
      <div className="courses-marquee-container">
        <div className="courses-marquee-track">
          <div className="marquee-content">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="marquee-item">✦ {item}</span>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`dup-${idx}`} className="marquee-item">✦ {item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Core Programs Grid Section */}
      <section className="core-programs-section">
        <div className="container">
          <div className="core-programs-header">
            <h2>Our Core Programs</h2>
            <p>Comprehensive learning paths designed for academic excellence.</p>
          </div>

          <div className="core-programs-grid">
            {coursesList.map((course, index) => {
              const Icon = course.icon;
              return (
                <ScrollReveal key={course.number} direction="up" delay={index * 0.1}>
                  <div className={`core-course-card ${course.colorClass}`}>
                    <div className="course-card-top">
                      <div className="course-icon-badge">
                        <Icon size={24} strokeWidth={1.75} />
                      </div>
                      <span className="course-number">{course.number}</span>
                    </div>

                    <h3 className="course-card-title">{course.title}</h3>
                    <p className="course-card-desc">{course.desc}</p>

                    <div className="course-card-features-wrapper">
                      <h4 className="course-features-label">Program Highlights</h4>
                      <ul className="course-features-list">
                        {course.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <CheckCircle2 size={16} className="check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="course-card-footer">
                      <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="course-enroll-btn">
                        <span>Enrol Now</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCourses;
