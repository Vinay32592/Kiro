/*
  Hero.tsx
  --------
  Full-screen landing section with:
  - Background image with dark overlay
  - Animated headline + subtext
  - Two CTA buttons
  - Floating stat badges (years, dishes, rating)
  - Scroll-down arrow
*/

import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Dark gradient overlay over the background image */}
      <div className="hero__overlay" />

      {/* Decorative blurred circle ornaments */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container hero__content">
        {/* Label */}
        <span className="section-label animate-fade-up">
          ✦ Authentic Indian Cuisine ✦
        </span>

        {/* Main Heading */}
        <h1 className="hero__title animate-fade-up delay-1">
          A Journey of<br />
          <em>Flavours &amp; Spices</em>
        </h1>

        {/* Subtext */}
        <p className="hero__subtitle animate-fade-up delay-2">
          Experience the rich heritage of India through every bite.
          Hand-crafted recipes passed down for generations,
          served in a warm and elegant setting.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions animate-fade-up delay-3">
          <a href="#menu" className="btn btn-primary">
            Explore Our Menu
          </a>
          <a href="#contact" className="btn btn-outline">
            Reserve a Table
          </a>
        </div>

        {/* Floating stat badges */}
        <div className="hero__stats animate-fade-up delay-4">
          <div className="hero__stat">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">120+</span>
            <span className="hero__stat-label">Signature Dishes</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">4.9★</span>
            <span className="hero__stat-label">Guest Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a href="#about" className="hero__scroll-arrow" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
