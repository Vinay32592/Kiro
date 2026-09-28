/*
  Dishes.tsx
  ----------
  "Popular Dishes" section — a horizontal card grid.
  Each card shows an image, name, description, price,
  spice level, and a badge (e.g. "Chef's Pick", "Bestseller").
*/

import './Dishes.css';

// TypeScript type for a single dish
interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  spice: number;      // 1–3 (number of filled dots)
  badge?: string;     // optional label like "Chef's Pick"
  image: string;
}

const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken in a velvety tomato-cream sauce with warming spices.',
    price: '₹520',
    spice: 2,
    badge: "Chef's Pick",
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Lamb Rogan Josh',
    description: 'Slow-braised Kashmiri lamb with aromatic whole spices and yoghurt.',
    price: '₹680',
    spice: 3,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Paneer Tikka Masala',
    description: 'Chargrilled cottage cheese cubes in a rich, smoky tomato gravy.',
    price: '₹450',
    spice: 2,
    badge: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Prawn Malai Curry',
    description: 'Juicy tiger prawns simmered in a delicate coconut-milk curry.',
    price: '₹740',
    spice: 1,
    image: 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight with butter and cream.',
    price: '₹320',
    spice: 1,
    badge: 'Must Try',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Hyderabadi Biryani',
    description: 'Fragrant basmati rice layered with saffron and slow-dum cooked mutton.',
    price: '₹620',
    spice: 3,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
  },
];

export default function Dishes() {
  return (
    <section id="dishes" className="dishes section">
      <div className="container">

        {/* Section header */}
        <div className="text-center">
          <span className="section-label">Our Specialities</span>
          <h2 className="section-title">
            Popular <em>Dishes</em>
          </h2>
          <div className="divider divider--center" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Carefully crafted by our head chef — each dish a masterpiece of
            colour, aroma, and flavour.
          </p>
        </div>

        {/* Cards grid */}
        <div className="dishes__grid">
          {DISHES.map((dish) => (
            <article key={dish.id} className="dish-card">

              {/* Image */}
              <div className="dish-card__image-wrap">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-card__image"
                  loading="lazy"
                />
                {/* Optional badge */}
                {dish.badge && (
                  <span className="dish-card__badge">{dish.badge}</span>
                )}
              </div>

              {/* Content */}
              <div className="dish-card__body">
                <div className="dish-card__header">
                  <h3 className="dish-card__name">{dish.name}</h3>
                  <span className="price">{dish.price}</span>
                </div>

                <p className="dish-card__desc">{dish.description}</p>

                <div className="dish-card__footer">
                  {/* Spice level indicator */}
                  <div className="dish-card__spice">
                    <span className="dish-card__spice-label">Spice:</span>
                    <div className="spice-dots">
                      {[1, 2, 3].map((level) => (
                        <span
                          key={level}
                          className={`spice-dot ${level <= dish.spice ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button className="dish-card__order-btn">
                    Order Now →
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Link to full menu */}
        <div className="text-center dishes__cta">
          <a href="#menu" className="btn btn-outline">
            View Full Menu ↓
          </a>
        </div>

      </div>
    </section>
  );
}
