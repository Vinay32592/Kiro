/*
  Hours.tsx
  ---------
  Opening hours table + a "currently open / closed" live indicator.
  Also shows a reservation CTA banner.
*/

import './Hours.css';

interface DayEntry {
  day: string;
  hours: string;
  isToday?: boolean; // highlighted row
}

// Days of week: 0=Sunday … 6=Saturday
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Our schedule
const SCHEDULE: Omit<DayEntry, 'isToday'>[] = [
  { day: 'Monday',    hours: '12:00 PM – 3:00 PM  |  6:00 PM – 11:00 PM' },
  { day: 'Tuesday',   hours: '12:00 PM – 3:00 PM  |  6:00 PM – 11:00 PM' },
  { day: 'Wednesday', hours: '12:00 PM – 3:00 PM  |  6:00 PM – 11:00 PM' },
  { day: 'Thursday',  hours: '12:00 PM – 3:00 PM  |  6:00 PM – 11:00 PM' },
  { day: 'Friday',    hours: '12:00 PM – 3:00 PM  |  6:00 PM – 11:30 PM' },
  { day: 'Saturday',  hours: '11:00 AM – 11:30 PM  (All Day)' },
  { day: 'Sunday',    hours: '11:00 AM – 10:30 PM  (All Day)' },
];

// Simple helper: are we currently open?
function getStatus(): { open: boolean; label: string } {
  const now = new Date();
  const hour = now.getHours();
  const day  = now.getDay(); // 0 = Sunday

  // Weekend: open 11 AM – 11:30 PM
  if (day === 0 || day === 6) {
    return hour >= 11 && hour < 23
      ? { open: true,  label: 'We are open now!' }
      : { open: false, label: 'We are currently closed' };
  }
  // Weekday: lunch 12–3, dinner 6–11
  const inLunch  = hour >= 12 && hour < 15;
  const inDinner = hour >= 18 && hour < 23;
  return inLunch || inDinner
    ? { open: true,  label: 'We are open now!' }
    : { open: false, label: 'We are currently closed' };
}

export default function Hours() {
  const todayName = DAY_NAMES[new Date().getDay()];
  const status    = getStatus();

  const schedule: DayEntry[] = SCHEDULE.map((entry) => ({
    ...entry,
    isToday: entry.day === todayName,
  }));

  return (
    <section id="hours" className="hours section">
      <div className="container hours__inner">

        {/* ── Left: Schedule table ── */}
        <div className="hours__schedule">
          <span className="section-label">When to Visit</span>
          <h2 className="section-title">
            Opening <em>Hours</em>
          </h2>
          <div className="divider" />

          {/* Live status indicator */}
          <div className={`hours__status ${status.open ? 'hours__status--open' : 'hours__status--closed'}`}>
            <span className="hours__status-dot" />
            {status.label}
          </div>

          {/* Day-by-day table */}
          <div className="hours__table">
            {schedule.map((entry) => (
              <div
                key={entry.day}
                className={`hours__row ${entry.isToday ? 'hours__row--today' : ''}`}
              >
                <span className="hours__day">
                  {entry.day}
                  {entry.isToday && <span className="hours__today-badge">Today</span>}
                </span>
                <span className="hours__time">{entry.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Reservation CTA card ── */}
        <div className="hours__cta-card">
          <div className="hours__cta-icon">🍽️</div>
          <h3 className="hours__cta-title">
            Reserve Your Table
          </h3>
          <p className="hours__cta-text">
            For groups of 6 or more we recommend booking in advance.
            Private dining rooms are available for special occasions.
          </p>

          <div className="hours__cta-info">
            <div className="hours__cta-item">
              <span className="hours__cta-item-icon">📞</span>
              <div>
                <span className="hours__cta-item-label">Call us</span>
                <span className="hours__cta-item-value">+91 98765 43210</span>
              </div>
            </div>
            <div className="hours__cta-item">
              <span className="hours__cta-item-icon">✉️</span>
              <div>
                <span className="hours__cta-item-label">Email</span>
                <span className="hours__cta-item-value">hello@spicegarden.in</span>
              </div>
            </div>
            <div className="hours__cta-item">
              <span className="hours__cta-item-icon">📍</span>
              <div>
                <span className="hours__cta-item-label">Location</span>
                <span className="hours__cta-item-value">14, MG Road, Bengaluru</span>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary hours__cta-btn">
            Make a Reservation
          </a>
        </div>

      </div>
    </section>
  );
}
