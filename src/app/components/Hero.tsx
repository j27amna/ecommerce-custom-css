import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-arrival-text">New Arrival</p>
        <h1 className="hero-title">
          Discover Our <br />
          <span className="hero-subtitle">New Collection</span>
        </h1>
        <p className="hero-description">
          Elevate your living space with our new furniture collection. Crafted with <br /> quality and
          style. From sleek and modern designs to timeless classics, our <br /> collection offers something for every
          style and taste.
        </p>
        <button className="hero-button">BUY NOW</button>
      </div>
    </div>
  );
};

export default Hero;
