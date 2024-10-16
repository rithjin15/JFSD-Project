import React from 'react';
import { Link } from 'react-router-dom';  
import './style.css'; 

function HomePage() {
  return (
    <div className="homepage">
    <header className="header">
  <h1>Craft Looms</h1>
  <p>The Old Method But With New Vision</p>
  
</header>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>  
          <li><Link to="/signin">Sign In</Link></li>  
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section id="home">
          <h2>Home</h2>
          <p>Discover exciting Design, Quality products </p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>We are passionate about delivering the best Products to our Customers.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 My Website. All rights reserved.</p>
        <p><a href="tel:+15555555555">Contact Us</a></p>
      </footer>
    </div>
  );
}

export default HomePage;