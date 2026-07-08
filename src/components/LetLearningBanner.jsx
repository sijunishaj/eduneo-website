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
            <a href="https://wa.me/917034600908?text=I%20would%20like%20to%20explore%20free%20demo%20classes" target="_blank" rel="noopener noreferrer" className="btn btn-yellow">EXPLORE FREE DEMO CLASSES</a>
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
