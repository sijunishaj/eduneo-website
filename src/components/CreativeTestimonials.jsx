import React from 'react';
import { User } from 'lucide-react';
import './CreativeTestimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Amina Rahman',
    stars: '⭐⭐⭐⭐⭐',
    quote: "EduNeo has completely changed my daughter's approach to learning. The teachers explain every topic patiently, and the mentor support keeps her motivated throughout the week.",
    colorClass: 'bg-red'
  },
  {
    id: 2,
    name: 'Arjun Nair',
    stars: '⭐⭐⭐⭐⭐',
    quote: "The live interactive classes are engaging, and the recorded sessions help me revise whenever I need. My confidence in Mathematics has improved a lot.",
    colorClass: 'bg-blue'
  },
  {
    id: 3,
    name: 'Fathima Shirin',
    stars: '⭐⭐⭐⭐⭐',
    quote: "The weekly tests and detailed performance reports helped my son identify his weak areas. We are very satisfied with the quality of teaching.",
    colorClass: 'bg-yellow'
  },
  {
    id: 4,
    name: 'Muhammed Riyas',
    stars: '⭐⭐⭐⭐⭐',
    quote: "EduNeo provides a perfect balance of discipline and encouragement. The teachers are friendly, knowledgeable, and always ready to clear doubts.",
    colorClass: 'bg-red'
  },
  {
    id: 5,
    name: 'Diya Thomas',
    stars: '⭐⭐⭐⭐⭐',
    quote: "I joined EduNeo for Science and English classes. The explanations are simple, the study materials are excellent, and learning has become enjoyable.",
    colorClass: 'bg-blue'
  },
  {
    id: 6,
    name: 'Nikhil Menon',
    stars: '⭐⭐⭐⭐⭐',
    quote: "The mentor support is one of the best features of EduNeo. Regular follow-ups and personal guidance have helped me stay consistent with my studies.",
    colorClass: 'bg-yellow'
  },
  {
    id: 7,
    name: 'Safa Mariyam',
    stars: '⭐⭐⭐⭐⭐',
    quote: "As a parent, I appreciate the regular communication and progress updates. EduNeo truly cares about every student's success.",
    colorClass: 'bg-red'
  },
  {
    id: 8,
    name: 'Aditya Krishnan',
    stars: '⭐⭐⭐⭐⭐',
    quote: "The classes are well organized, teachers are highly experienced, and the learning environment is positive. I would definitely recommend EduNeo to other students.",
    colorClass: 'bg-blue'
  }
];

const CreativeTestimonials = () => {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="ts-header">
          <div className="ts-title-col">
            <h2>Our Superstars</h2>
          </div>
          <div className="ts-desc-col">
            <p>See what parents and students are saying about their experience with EduNeo's personalized learning programs.</p>
          </div>
        </div>

        <div className="ts-marquee-container">
          <div className="ts-marquee-track">
            {/* First set */}
            <div className="ts-marquee-content">
              {testimonialsData.map((t) => (
                <div key={t.id} className="ts-card">
                  <div className={`ts-avatar-wrapper ${t.colorClass}`}>
                    <User size={64} color="white" strokeWidth={1.5} />
                  </div>
                  <div className="ts-info">
                    <div className="ts-info-top" style={{ gap: '0.25rem' }}>
                      <h4 className="ts-name" style={{ textTransform: 'capitalize' }}>{t.name}</h4>
                      <span className="ts-demographics" style={{ color: '#f1b308', fontSize: '0.8rem', letterSpacing: '2px' }}>{t.stars}</span>
                    </div>
                    <div className="ts-info-bottom">
                      <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                        "{t.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Second set for infinite looping */}
            <div className="ts-marquee-content" aria-hidden="true">
              {testimonialsData.map((t) => (
                <div key={t.id + '-dup'} className="ts-card">
                  <div className={`ts-avatar-wrapper ${t.colorClass}`}>
                    <User size={64} color="white" strokeWidth={1.5} />
                  </div>
                  <div className="ts-info">
                    <div className="ts-info-top" style={{ gap: '0.25rem' }}>
                      <h4 className="ts-name" style={{ textTransform: 'capitalize' }}>{t.name}</h4>
                      <span className="ts-demographics" style={{ color: '#f1b308', fontSize: '0.8rem', letterSpacing: '2px' }}>{t.stars}</span>
                    </div>
                    <div className="ts-info-bottom">
                      <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                        "{t.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeTestimonials;
