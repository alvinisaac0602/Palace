import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Playtime Park</h1>
          <p>
            A premier family adventure complex with gym, restaurant, games, arcade,
            event halls and a signature kids swimming zone.
          </p>
          <div className="hero-cta">
            <a href="/activities" className="btn btn-primary">Explore Activities</a>
            <a href="/contact" className="btn btn-secondary">Book a Visit</a>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true"></div>
      </section>

      <section className="features" data-aos="fade-up" data-aos-delay="100">
        <h2>Everything under one roof</h2>
        <p>Sunny family fun and premium amenities for all ages.</p>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Gym & Fitness</h3>
            <p>State-of-the-art equipment, expert trainers, personalized plans.</p>
          </article>
          <article className="feature-card">
            <h3>Gourmet Restaurant</h3>
            <p>Healthy meals, fast snacks, and family-friendly dining experiences.</p>
          </article>
          <article className="feature-card">
            <h3>Arcade & Games</h3>
            <p>Modern arcade consoles, VR zones, and interactive challenges.</p>
          </article>
          <article className="feature-card">
            <h3>Event Halls</h3>
            <p>Flexible event spaces for birthdays, corporate meetups, and parties.</p>
          </article>
          <article className="feature-card">
            <h3>Kids Swimming Pool</h3>
            <p>A themed pool with safety staff, slides, and water-play features.</p>
          </article>
          <article className="feature-card">
            <h3>Nursery & School Swimming Lessons</h3>
            <p>Structured instructor-led lessons for nursery and school groups, focused on safety, fun, and confidence in the water.</p>
          </article>
        </div>
      </section>

      <section className="values" data-aos="fade-right" data-aos-delay="150">
        <h2>Why families love us</h2>
        <ul>
          <li>A fun wellness destination in one location</li>
          <li>Safe, clean, supervised kids area</li>
          <li>Premium food and beverage options</li>
          <li>Event packages tailored to every budget</li>
        </ul>
      </section>

      <section className="cta-bar" data-aos="zoom-in" data-aos-delay="200">
        <h2>Ready for your next adventure?</h2>
        <a href="/contact" className="btn btn-glow">Book the Day Pass</a>
      </section>

      <section className="testimonial" data-aos="fade-up" data-aos-delay="250">
        <h2>Customer Praise</h2>
        <blockquote>
          “Playtime Park transformed our family weekends with safe fun and great food. We keep coming back!”
          <footer>- Maya R.</footer>
        </blockquote>
      </section>
    </div>
  )
}

export default Home