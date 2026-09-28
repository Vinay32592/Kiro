/*
  About.tsx
  ---------
  Two-column section:
  - Left: stacked food images with a floating award badge
  - Right: story text + four feature cards (Fresh, Spices, Chefs, Ambience)
*/

import './About.css';

// Each feature card has an icon, title and description
interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    icon: '🌿',
    title: 'Farm Fresh',
    desc: 'Seasonal ingredients sourced daily from local organic farms.',
  },
  {
    icon: '🌶️',
    title: 'Authentic Spices',
    desc: 'Hand-ground spice blends imported directly from Kerala & Rajasthan.',
  },
  {
    icon: '👨‍🍳',
    title: 'Master Chefs',
    desc: 'Our culinary team holds 40+ combined years of fine-dining experience.',
  },
  {
    icon: '🕯️',
    title: 'Warm Ambience',
    desc: 'An inviting space designed for romantic dinners and family celebrations.',
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">

        {/* ── Left: Image collage ── */}
        <div className="about__images">
          <img
            src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop&q=80"
            alt="Chef plating a dish"
            className="about__img about__img--main"
          />
          <img
            src="https://images.unsplash.com/photo-1630851840633-f96999247032?w=400&auto=format&fit=crop&q=80"
            alt="Colourful Indian spices"
            className="about__img about__img--small"
          />
          {/* Floating award badge */}
          <div className="about__badge">
            <span className="about__badge-icon">🏆</span>
            <span className="about__badge-text">Best Restaurant<br />2023 &amp; 2024</span>
          </div>
        </div>

        {/* ── Right: Text content ── */}
        <div className="about__content">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            Cooking with <em>Passion</em>,<br />Serving with Love
          </h2>
          <div className="divider" />

          <p className="about__text">
            Founded in 1999, Spice Garden was born from a dream to bring the
            soulful tastes of India to the heart of the city. What started as
            a small family kitchen has grown into a celebrated dining
            destination, beloved by locals and food critics alike.
          </p>
          <p className="about__text">
            Every dish tells a story — rooted in tradition, elevated by craft.
            Our chefs travel across India each year to rediscover forgotten
            regional recipes and bring them to your table.
          </p>

          {/* Feature cards grid */}
          <div className="about__features">
            {FEATURES.map((f) => (
              <div key={f.title} className="about__feature-card">
                <span className="about__feature-icon">{f.icon}</span>
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
