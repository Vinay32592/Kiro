/*
  Gallery.tsx
  -----------
  Masonry-style photo grid with a lightbox overlay.
  Click any image to open it full-screen; press Escape or
  click the backdrop to close.
*/

import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

interface GalleryImage {
  id: number;
  src: string;
  thumb: string;
  alt: string;
  span?: 'wide' | 'tall'; // grid-span helpers for visual variety
}

const IMAGES: GalleryImage[] = [
  {
    id: 1,
    src:   'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=75',
    alt:   'Vibrant Indian thali spread',
    span:  'wide',
  },
  {
    id: 2,
    src:   'https://images.unsplash.com/photo-1567337710282-00832b415979?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&auto=format&fit=crop&q=75',
    alt:   'Chef plating a dish',
  },
  {
    id: 3,
    src:   'https://images.unsplash.com/photo-1630851840633-f96999247032?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1630851840633-f96999247032?w=400&auto=format&fit=crop&q=75',
    alt:   'Colourful spices in bowls',
    span:  'tall',
  },
  {
    id: 4,
    src:   'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=75',
    alt:   'Tandoori platter',
  },
  {
    id: 5,
    src:   'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=75',
    alt:   'Biryani served in a handi',
  },
  {
    id: 6,
    src:   'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=75',
    alt:   'Elegant restaurant interior',
    span:  'wide',
  },
  {
    id: 7,
    src:   'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=75',
    alt:   'Dal makhani in a copper bowl',
  },
  {
    id: 8,
    src:   'https://images.unsplash.com/photo-1605380945028-adad6de47d4e?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1605380945028-adad6de47d4e?w=400&auto=format&fit=crop&q=75',
    alt:   'Dessert plating — gulab jamun',
  },
];

export default function Gallery() {
  // null = lightbox closed; a number = the id of the open image
  const [openId, setOpenId] = useState<number | null>(null);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpenId(null);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = openId !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openId]);

  const openImage = IMAGES.find((img) => img.id === openId);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">

        {/* Section header */}
        <div className="text-center">
          <span className="section-label">Visual Stories</span>
          <h2 className="section-title">
            Our <em>Gallery</em>
          </h2>
          <div className="divider divider--center" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into our kitchen, our food, and the moments we create.
          </p>
        </div>

        {/* Photo grid */}
        <div className="gallery__grid">
          {IMAGES.map((img) => (
            <button
              key={img.id}
              className={`gallery__item ${img.span ? `gallery__item--${img.span}` : ''}`}
              onClick={() => setOpenId(img.id)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                className="gallery__img"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="gallery__hover">
                <span className="gallery__hover-icon">🔍</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {openImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setOpenId(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setOpenId(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          {/* Stop click from reaching the backdrop when clicking the image */}
          <img
            src={openImage.src}
            alt={openImage.alt}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox__caption">{openImage.alt}</p>
        </div>
      )}
    </section>
  );
}
