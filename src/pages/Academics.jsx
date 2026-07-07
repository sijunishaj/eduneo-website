import React from 'react';
import CourseOverview from '../components/CourseOverview';
import SubjectsGrid from '../components/SubjectsGrid';
import VirtualClassFeatures from '../components/VirtualClassFeatures';
import CallToAction from '../components/CallToAction';
import ScrollReveal from '../components/ScrollReveal';
import './Academics.css';

const Academics = () => {
  return (
    <div className="academics-page">
      {/* Base Classes Hero Section */}
      <ScrollReveal direction="fade">
        <section className="academics-hero">
          <div className="academics-hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="container academics-hero-content">
            <span className="academics-subtitle">Academic Excellence</span>
            <h1 className="academics-title">Base Classes</h1>
            <p className="academics-desc">
              Build a rock-solid foundation for your future with our comprehensive school-level programs, featuring expert teachers and personalized attention.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <CourseOverview />
      </ScrollReveal>
      
      <ScrollReveal direction="up">
        <SubjectsGrid />
      </ScrollReveal>
      
      <ScrollReveal direction="up">
        <VirtualClassFeatures />
      </ScrollReveal>
      
      <ScrollReveal direction="fade" delay={0.2}>
        <CallToAction />
      </ScrollReveal>
    </div>
  );
};

export default Academics;
