import React from 'react';
import './LetLearningBanner.css';

const LetLearningBanner = () => {
  return (
    <section className="let-learning-section section">
      <div className="container">
        <div className="let-learning-card">
          <div className="ll-content">
            <h2>LET LEARNING COME TO <br className="ll-break" />YOU</h2>
            <p>Top Tutors. One-on-One. Right at Your Home.</p>
            <button className="btn btn-yellow">EXPLORE FREE DEMO CLASSES</button>
          </div>
          <div className="ll-image-container">
            <img src="/let%20learn.png" alt="Let Learning Come To You" className="ll-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetLearningBanner;
