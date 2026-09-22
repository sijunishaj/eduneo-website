import React from 'react';
import { Book, Mic, Edit3, MessageSquare, Mic2, FileText, Headphones, PenTool, BookOpen, Pen, BookMarked, Smile, Star, Brain, Eye, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutEduNeo.css';

const AboutEduNeo = () => {
  const desktopIcons = [
    { icon: Book, label: 'LKG & UKG' },
    { icon: Mic, label: 'GRADES 1-4' },
    { icon: Edit3, label: 'GRADES 5-8' },
    { icon: MessageSquare, label: 'GRADES 9-12' },
    { icon: Mic2, label: 'KERALA SYLLABUS' },
    { icon: FileText, label: 'CBSE SYLLABUS' },
    { icon: Headphones, label: 'LIVE CLASSES' },
    { icon: PenTool, label: 'RECORDED SESSIONS' },
    { icon: BookOpen, label: 'ONE-TEACHER' },
    { icon: Pen, label: 'BATCH CLASSES' },
    { icon: BookMarked, label: 'EXPERT TEACHERS' },
    { icon: Smile, label: 'MENTOR SUPPORT' },
    { icon: Star, label: 'INTERACTIVE' },
    { icon: Brain, label: 'CONCEPTUAL' },
    { icon: Eye, label: 'REGULAR TESTS' },
    { icon: Users, label: 'DOUBT CLEARING' }
  ];

  const mobileIcons = [
    { icon: Book, label: 'LKG & UKG' },
    { icon: GraduationCap, label: 'Grade 1–12' },
    { icon: FileText, label: 'Kerala State, CBSE, ICSE, ISC & NIOS' },
    { icon: BookOpen, label: 'One-Teacher Programs' },
    { icon: Pen, label: 'Batch Classes' },
    { icon: BookMarked, label: 'Expert Teachers' },
    { icon: Smile, label: 'Dedicated Mentor Support' },
    { icon: Headphones, label: 'Live Interactive Classes' },
    { icon: PenTool, label: 'Recorded Sessions' },
    { icon: Users, label: 'Doubt Clearing & Regular Assessments' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 12 
      } 
    }
  };

  return (
    <section className="about-eduneo-section">
      <div className="container mx-auto px-4">
        <div className="about-grid">

          {/* Left Side: Winding Icon Path */}
          <div className="icon-path-container">
            <svg className="winding-path-svg desktop-only-path" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M 12.5 12.5 L 87.5 12.5 A 12.5 12.5 0 0 1 100 25 L 100 25 A 12.5 12.5 0 0 1 87.5 37.5 L 12.5 37.5 A 12.5 12.5 0 0 0 0 50 L 0 50 A 12.5 12.5 0 0 0 12.5 62.5 L 87.5 62.5 A 12.5 12.5 0 0 1 100 75 L 100 75 A 12.5 12.5 0 0 1 87.5 87.5 L 12.5 87.5" 
                fill="none" 
                stroke="#0A0E1A" 
                strokeWidth="0.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </svg>

            {/* Desktop Grid (16 items) */}
            <motion.div 
              className="icons-grid-4x4 desktop-only-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {desktopIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    className="path-icon-item hover-parent" 
                    key={index}
                    variants={itemVariants}
                  >
                    <div className="path-icon-circle hover-bounce">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="path-icon-label">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Grid (10 items shortened) */}
            <motion.div 
              className="icons-grid-mobile mobile-only-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {mobileIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    className="path-icon-item mobile-icon-item hover-parent" 
                    key={index}
                    variants={itemVariants}
                  >
                    <div className="path-icon-circle hover-bounce">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="path-icon-label">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="about-content">
            <h2 className="about-heading">EduNeo Academy</h2>
            <p className="about-subheading">
              A trusted online learning platform dedicated to providing quality education for every student.
            </p>

            <p className="about-text">
              We offer comprehensive online tuition classes for students from LKG, UKG, and Grades 1–12, covering both Kerala State Syllabus and CBSE Syllabus.
            </p>

            <p className="about-text">
              At Edu Neo, we carefully select highly qualified and experienced teachers to ensure the best learning experience for our students. Along with expert teaching, every student receives dedicated mentor support, helping them stay motivated, focused, and confident throughout their academic journey.
            </p>

            <p className="about-text">
              Our classes are conducted as live interactive sessions, allowing students to actively participate, ask questions, and engage with teachers in real time. We provide both One-Teacher Programs and Batch-Wise Classes, enabling students to choose the learning method that suits them best.
            </p>

            <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="book-trial-btn" style={{ display: 'inline-block', textAlign: 'center' }}>BOOK YOUR FREE TRIAL</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEduNeo;
