import React from 'react';
import './style.css';

function Services() {
  return (
    <div className="services-page">
      <header className="header">
        <h1>Our Services</h1>
      </header>

      <main className="services-content">
        <section className="service">
          <h2>Custom Handloom Designs</h2>
          <p>We offer bespoke handloom products crafted by skilled artisans to suit your unique tastes.</p>
        </section>

        <section className="service">
          <h2>Global Shipping</h2>
          <p>Get your favorite handloom products delivered to your doorstep anywhere in the world.</p>
        </section>

        <section className="service">
          <h2>Artisan Support</h2>
          <p>We work closely with artisans to provide fair trade opportunities and empower local communities.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Craft Looms. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
