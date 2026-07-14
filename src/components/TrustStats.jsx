import React, { useState, useEffect, useRef } from 'react';
import './TrustStats.css';

const AnimatedStat = ({ endValue, suffix = '', decimals = 0, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = progress * endValue;
            setCount(currentVal);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const TrustStats = () => {
  return (
    <section className="trust-stats-section">
      <div className="container">
        <div className="trust-stats-grid">
          <div className="trust-stat-item">
            <h3><AnimatedStat endValue={4.9} decimals={1} suffix="/5" /></h3>
            <p>Average Rating</p>
          </div>
          <div className="trust-stat-item">
            <h3><AnimatedStat endValue={500} suffix="+" /></h3>
            <p>Expert Tutors</p>
          </div>
          <div className="trust-stat-item">
            <h3><AnimatedStat endValue={10} suffix="k+" /></h3>
            <p>Active Students</p>
          </div>
          <div className="trust-stat-item">
            <h3><AnimatedStat endValue={100} suffix="%" /></h3>
            <p>Syllabus Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
