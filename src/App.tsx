/*
  App.tsx — Root component
  ------------------------
  This is the entry point of the React app.
  It imports and renders every section in order.

  ORDER OF SECTIONS:
  1. Navbar  (fixed, always visible)
  2. Hero    (#hero)
  3. About   (#about)
  4. Dishes  (#dishes)
  5. Menu    (#menu)
  6. Gallery (#gallery)
  7. Hours   (#hours)
  8. Contact (#contact)
  9. Footer
*/

import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import About   from './components/About';
import Dishes  from './components/Dishes';
import Menu    from './components/Menu';
import Gallery from './components/Gallery';
import Hours   from './components/Hours';
import Contact from './components/Contact';
import Footer  from './components/Footer';

export default function App() {
  return (
    <>
      {/* Sticky navigation — sits above everything */}
      <Navbar />

      {/* Main content — each section has an id for scroll-to navigation */}
      <main>
        <Hero />
        <About />
        <Dishes />
        <Menu />
        <Gallery />
        <Hours />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
