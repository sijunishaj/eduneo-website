import React from 'react';
import { BookOpen, MonitorPlay, GraduationCap, UserCheck, Users, User, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Features.css';

const curriculumPath = [
  { icon: <MonitorPlay />, title: "Live Interactive Sessions" },
  { icon: <GraduationCap />, title: "Expert Teachers" },
  { icon: <UserCheck />, title: "Dedicated Mentor Support" },
  { icon: <BookOpen />, title: "Kerala State & CBSE" },
  { icon: <User />, title: "One-Teacher Programs" },
  { icon: <Users />, title: "Batch-Wise Classes" },
  { icon: <Target />, title: "LKG to Grade 12" },
  { icon: <Award />, title: "English & Malayalam Medium" }
];

const Features = () => {
  return (
    <section id="features" className="features modern-section-alt">
      <div className="container">
        <h2 className="section-title">The Best Learning Experience</h2>
        <p className="section-subtitle">Why Choose EduNeo Academy for your child's future?</p>

        <div className="features-container">
          <div className="features-path">
            <div className="path-grid">
              {curriculumPath.map((item, idx) => (
                <div key={idx} className="path-item glass-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="path-icon">{item.icon}</div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="features-content animate-slide-up">
            <div className="glass-card">
              <h3>Unlocking Potential, Every Day</h3>
              <p>
                We carefully select highly qualified and experienced teachers. Along with expert teaching, every student receives dedicated mentor support, helping them stay motivated, focused, and confident throughout their academic journey from LKG to Class 12.
              </p>
              <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="btn-modern btn-primary mt-4" style={{display: 'inline-block'}}>Book Your Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
