import React from 'react';
import { Sparkles, Star, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero modern-section">
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source src="/Video-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content animate-slide-up">
          <div className="hero-badge">
            <Sparkles size={16} /> <span>#1 Online Tuition Platform</span>
          </div>
          <h1>Quality Online Education For <span className="gradient-text">Every Student</span></h1>
          <p className="hero-subtitle">
            Live interactive classes for LKG to Grade 12. Expert teachers, dedicated mentor support, and flexible batch options tailored to your child's success.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn-modern btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Book Your Free Trial <ChevronRight size={18} />
            </Link>
            <Link to="/courses" className="btn-modern btn-white" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Explore Courses
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <div className="avatar">JD</div>
              <div className="avatar">AS</div>
              <div className="avatar">MR</div>
            </div>
            <p>Trusted by <strong>10,000+</strong> parents worldwide</p>
          </div>
        </div>

        <div className="hero-graphics animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card hero-glass-card">
            <div className="circle-image main-circle">
              <div className="placeholder-kid" style={{ backgroundImage: "url('/hero-img-1.png')" }}></div>
            </div>

            {/* Floating icons */}
            <div className="floating-badge badge-1 glass-card">
              <Star className="text-yellow" size={24} />
              <div>
                <strong>4.9/5</strong>
                <span>Parent Rating</span>
              </div>
            </div>

            <div className="floating-badge badge-2 glass-card">
              <BookOpen className="text-blue" size={24} />
              <div>
                <strong>CBSE & State</strong>
                <span>Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
