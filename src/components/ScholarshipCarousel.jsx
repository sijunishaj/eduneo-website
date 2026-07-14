import React, { useState, useEffect } from 'react';
import './ScholarshipCarousel.css';

const banners = [
  {
    desktop: '/scholarship-banner-2.png',
    mobile: '/mobile-scholarship-banner-1.png'
  },
  {
    desktop: '/scholarship-banner-3.png',
    mobile: '/mobile-scholarship-banner-2.png'
  }
];

const extendedBanners = [...banners, banners[0]];

const ScholarshipCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedBanners.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setCurrentIndex(index);
  };

  const activeIndex = currentIndex === extendedBanners.length - 1 ? 0 : currentIndex;

  return (
    <div className="scholarship-carousel-container">
      <div
        className="scholarship-carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionEnabled ? 'transform 0.6s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedBanners.map((banner, index) => (
          <div className="scholarship-slide" key={index}>
            <picture>
              <source media="(max-width: 768px)" srcSet={banner.mobile} />
              <img src={banner.desktop} alt={`Scholarship Banner ${index + 1}`} className="scholarship-img" />
            </picture>
          </div>
        ))}
      </div>
      
      {/* Dots navigation */}
      <div className="scholarship-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`scholarship-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScholarshipCarousel;
