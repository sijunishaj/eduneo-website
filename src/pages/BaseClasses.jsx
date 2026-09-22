import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Languages, Globe, Calculator, BookMarked, Sparkles, Layers, CheckCircle2, ArrowRight, Target, Brain, TrendingUp, UserCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './BaseClasses.css';

const subjectClasses = [
  {
    id: 'english-base',
    subject: 'English',
    tag: 'LKG to Grade 12',
    icon: BookOpen,
    colorClass: 'theme-blue',
    desc: 'Master English phonics, vocabulary, reading fluency, and grammar fundamentals from basic to advanced level.',
    features: [
      'Phonics & alphabet mastery',
      'Vocabulary & sentence formation',
      'Reading comprehension & speaking',
      'Grammar & writing confidence'
    ]
  },
  {
    id: 'malayalam-base',
    subject: 'Malayalam',
    tag: 'LKG to Grade 12',
    icon: Languages,
    colorClass: 'theme-emerald',
    desc: 'Comprehensive Malayalam language training focusing on script reading, correct pronunciation, and writing accuracy.',
    features: [
      'Alphabets & aksharamala basics',
      'Reading fluency & pronunciation',
      'Sentence building & grammar',
      'Academic syllabus support'
    ]
  },
  {
    id: 'hindi-base',
    subject: 'Hindi',
    tag: 'LKG to Grade 12',
    icon: BookMarked,
    colorClass: 'theme-amber',
    desc: 'Step-by-step Hindi learning covering Varnamala, matras, vocabulary, and confident conversation & exam preparation.',
    features: [
      'Varnamala & matra mastery',
      'Vocabulary building & reading',
      'Basic to advanced grammar',
      'Exam-focused writing'
    ]
  },
  {
    id: 'arabic-base',
    subject: 'Arabic',
    tag: 'LKG to Grade 12',
    icon: Globe,
    colorClass: 'theme-purple',
    desc: 'Structured Arabic language foundation covering letter recognition, tajweed basics, reading, and vocabulary.',
    features: [
      'Arabic alphabet & phonetics',
      'Reading & correct pronunciation',
      'Essential vocabulary & phrases',
      'Grammar & sentence structure'
    ]
  },
  {
    id: 'mathematics-base',
    subject: 'Mathematics',
    tag: 'LKG to Grade 12',
    icon: Calculator,
    colorClass: 'theme-rose',
    desc: 'Build rock-solid mathematical thinking starting from basic arithmetic to advanced problem-solving and algebra.',
    features: [
      'Fundamental arithmetic & tables',
      'Visual & concept-based learning',
      'Speed math & problem solving',
      'Algebra & geometry foundations'
    ]
  }
];

const basePrograms = [
  {
    id: 'language-basics',
    title: 'Language Basics Training',
    tag: 'Beginners & Reading Support',
    icon: BookOpen,
    colorClass: 'theme-blue',
    desc: 'Designed for students struggling with language comprehension. We start from the absolute alphabet and phonics, slowly building up vocabulary and sentence structure to ensure full confidence in reading and writing.',
    features: [
      'Alphabet and phonics mastery',
      'Basic vocabulary building',
      'Simple sentence construction',
      'Patient, 1-on-1 reading support'
    ]
  },
  {
    id: 'primary-foundations',
    title: 'Primary Foundations (Class 1–5)',
    tag: 'Grades 1 to 5',
    icon: Sparkles,
    colorClass: 'theme-amber',
    desc: 'For young learners who need extra time to grasp core concepts in Math and EVS. We use interactive, visual methods to break down complex ideas into simple, digestible steps.',
    features: [
      'Visual and hands-on learning',
      'Focus on fundamental arithmetic',
      'Overcoming study anxiety',
      'Regular progress tracking'
    ]
  },
  {
    id: 'bridge-courses',
    title: 'Bridge Courses (Class 6–8)',
    tag: 'Grades 6 to 8',
    icon: Layers,
    colorClass: 'theme-rose',
    desc: 'Bridge the gap between lower and higher classes. If a student is falling behind in Middle School, this course revisits earlier concepts to ensure they are fully prepared for high school curriculums.',
    features: [
      'Revisiting core concepts',
      'Improving analytical thinking',
      'Language comprehension support',
      'Study skill development'
    ]
  }
];

const highlights = [
  { icon: Target, title: '1-on-1 Attention', desc: 'Learning paced specifically around your child’s needs.' },
  { icon: Brain, title: 'Conceptual Clarity', desc: 'Focus on root understanding instead of rote memory.' },
  { icon: TrendingUp, title: 'Progress Tracking', desc: 'Regular evaluations and transparent parent updates.' },
  { icon: UserCheck, title: 'Expert Guidance', desc: 'Dedicated mentors to support every step of the journey.' }
];

const BaseClasses = () => {
  return (
    <div className="base-classes-page">
      {/* Hero Section */}
      <section className="bc-hero-section">
        <div className="container">
          <div className="bc-hero-content">
            <span className="bc-hero-badge">LKG to Grade 12 · Base Classes</span>
            <h1 className="bc-hero-title">
              Strong Fundamentals. <br className="hidden-mobile" />
              Accelerated Academic Growth.
            </h1>
            <p className="bc-hero-desc">
              Our Base Classes are available for <strong>LKG to Grade 12</strong> students in <strong>English, Malayalam, Hindi, Arabic, and Mathematics</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Banner with Official Content */}
      <section className="bc-overview-banner">
        <div className="container">
          <div className="bc-overview-card">
            <div className="bc-overview-text">
              <h2>Structured Base Learning Path</h2>
              <p>
                These classes are carefully designed to build a strong foundation from the <strong>basic level to the advanced level</strong> within a <strong>short, structured period</strong>. Students can strengthen their fundamentals, improve their understanding, and progress confidently toward advanced concepts through focused and systematic learning.
              </p>
            </div>
            <div className="bc-subject-pills">
              <span className="subject-pill">English</span>
              <span className="subject-pill">Malayalam</span>
              <span className="subject-pill">Hindi</span>
              <span className="subject-pill">Arabic</span>
              <span className="subject-pill">Mathematics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Subject Base Classes Section */}
      <section className="bc-subjects-section">
        <div className="container">
          <div className="bc-section-header">
            <h2>Select Your Preferred Subject</h2>
            <p>Individual subject base classes designed to strengthen fundamentals and help students progress confidently to advanced levels.</p>
          </div>

          <div className="bc-subjects-grid">
            {subjectClasses.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
                  <div className={`bc-subject-card ${item.colorClass}`}>
                    <div className="bc-card-header">
                      <div className="bc-icon-box">
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <span className="bc-card-tag">{item.tag}</span>
                    </div>

                    <h3 className="bc-card-title">{item.subject} Base Class</h3>
                    <p className="bc-card-desc">{item.desc}</p>

                    <div className="bc-card-features-wrapper">
                      <h4 className="bc-features-heading">Key Focus Areas</h4>
                      <ul className="bc-features-list">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <CheckCircle2 size={17} className="check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bc-card-footer">
                      <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="bc-enroll-btn">
                        <span>Enroll Now</span>
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

      {/* Program Cards Grid */}
      <section className="bc-programs-section">
        <div className="container">
          <div className="bc-programs-header">
            <h2>Core Learning Tracks</h2>
            <p>Targeted program levels designed to meet young learners at their exact academic stage.</p>
          </div>

          <div className="bc-programs-grid">
            {basePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <ScrollReveal key={program.id} direction="up" delay={index * 0.15}>
                  <div className={`bc-card ${program.colorClass}`}>
                    <div className="bc-card-header">
                      <div className="bc-icon-box">
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <span className="bc-card-tag">{program.tag}</span>
                    </div>

                    <h3 className="bc-card-title">{program.title}</h3>
                    <p className="bc-card-desc">{program.desc}</p>

                    <div className="bc-card-features-wrapper">
                      <h4 className="bc-features-heading">Key Focus Areas</h4>
                      <ul className="bc-features-list">
                        {program.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <CheckCircle2 size={18} className="check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bc-card-footer">
                      <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="bc-card-btn">
                        <span>Enrol In Program</span>
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

      {/* Trust Highlights Section */}
      <section className="bc-highlights-section">
        <div className="container">
          <div className="bc-highlights-header">
            <h2>Why EduNeo Base Classes Work</h2>
            <p>A proven approach that nurtures confidence and long-term academic growth.</p>
          </div>

          <div className="bc-highlights-grid">
            {highlights.map((item, idx) => {
              const HIcon = item.icon;
              return (
                <div key={idx} className="bc-highlight-card">
                  <div className="bc-highlight-icon">
                    <HIcon size={26} strokeWidth={1.75} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bc-cta-section">
        <div className="container">
          <div className="bc-cta-card">
            <h2>Ready to Build a Strong Academic Foundation?</h2>
            <p>Book a free consultation or 3-day demo class to experience our personalized teaching approach.</p>
            <div className="bc-cta-actions">
              <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="btn btn-cta-primary">
                Book Free Trial Class
              </a>
              <a 
                href="https://wa.me/917034600908?text=I%20would%20like%20to%20know%20more%20about%20EduNeo%20Base%20Classes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-cta-secondary"
              >
                Chat With Counsellor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BaseClasses;
