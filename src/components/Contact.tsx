/*
  Contact.tsx
  -----------
  Contact section with:
  - A controlled reservation form (name, email, date, time, guests, message)
  - A success confirmation message after submit
  - Info cards (address, phone, email, social)
*/

import { useState } from 'react';
import './Contact.css';

// Shape of the form data
interface FormData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '', email: '', date: '', time: '', guests: '2', message: '',
};

// Contact info cards
const CONTACT_INFO = [
  { icon: '📍', label: 'Address',   value: '14, MG Road, Indiranagar\nBengaluru – 560 038' },
  { icon: '📞', label: 'Phone',     value: '+91 98765 43210\n+91 80 4567 8901' },
  { icon: '✉️', label: 'Email',     value: 'hello@spicegarden.in\nreservations@spicegarden.in' },
  { icon: '🕐', label: 'Hours',     value: 'Mon–Fri: 12–3 PM, 6–11 PM\nWeekends: 11 AM–11:30 PM' },
];

export default function Contact() {
  const [form, setForm]         = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  // Generic change handler — works for all input/textarea/select fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate an async API call with setTimeout
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">

        {/* Section header */}
        <div className="text-center">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Reserve Your <em>Table</em>
          </h2>
          <div className="divider divider--center" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Book your experience with us — we'd love to host you.
          </p>
        </div>

        <div className="contact__inner">

          {/* ── Left: Info cards ── */}
          <div className="contact__info">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="contact__info-card">
                <span className="contact__info-icon">{item.icon}</span>
                <div>
                  <span className="contact__info-label">{item.label}</span>
                  {/* Replace \n with line breaks */}
                  {item.value.split('\n').map((line, i) => (
                    <span key={i} className="contact__info-value">{line}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="contact__social">
              <a href="#" className="contact__social-link" aria-label="Instagram">📷 Instagram</a>
              <a href="#" className="contact__social-link" aria-label="Facebook">👍 Facebook</a>
              <a href="#" className="contact__social-link" aria-label="Google Maps">📌 Google Maps</a>
            </div>
          </div>

          {/* ── Right: Reservation Form ── */}
          <div className="contact__form-wrap">
            {submitted ? (
              /* Success message */
              <div className="contact__success">
                <div className="contact__success-icon">🎉</div>
                <h3>Reservation Request Received!</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>! We'll confirm your
                  table for <strong>{form.guests} guests</strong> on{' '}
                  <strong>{form.date}</strong> at <strong>{form.time}</strong>{' '}
                  shortly via email.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setForm(INITIAL_FORM); setSubmitted(false); }}
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Book a Table</h3>

                {/* Name + Email */}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Date + Time */}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="date">Date *</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a slot</option>
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>1:00 PM</option>
                      <option>1:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div className="contact__field">
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                    <option value="10+">10+ guests (event)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="contact__field">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Allergies, celebrations, seating preferences…"
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary contact__submit ${loading ? 'contact__submit--loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Confirm Reservation →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
