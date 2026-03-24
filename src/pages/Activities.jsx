import React from 'react'
import '../styles/Activities.css'

const Activities = () => {
  const activities = [
    {
      title: 'Gym & Fitness Studio',
      desc: 'Full cardio and strength zones, functional space and personal coaching.',
      color: 'sunny',
    },
    {
      title: 'Gourmet Dining',
      desc: 'Nutritious menu with family favorites, snacks and performance meals.',
      color: 'blue',
    },
    {
      title: 'Arcade Universe',
      desc: 'Modern games, VR experiences, and high-score competitions.',
      color: 'purple',
    },
    {
      title: 'Event & Party Halls',
      desc: 'Customizable halls with AV, catering and party planning support.',
      color: 'teal',
    },
    {
      title: 'Kids Swimming Lessons',
      desc: 'Nursery and school groups learn water safety, skills, and confidence.',
      color: 'yellow',
    },
  ]

  return (
    <div className="activities-page">
      <header className="activities-hero" data-aos="fade-up">
        <div className="hero-block">
          <h1>Explore Playtime Park Activities</h1>
          <p>
            From energetic workouts to playful kid adventures, our facility has every program designed
            for fun, fitness, and family memories.
          </p>
          <a href="/contact" className="btn btn-hero">Reserve Your Activity</a>
        </div>
      </header>

      <section className="activity-list" data-aos="fade-up" data-aos-delay="120">
        <h2>Our Activity Zones</h2>
        <p>Choose your experience; we have something for everyone.</p>
        <div className="cards">
          {activities.map((item) => (
            <article key={item.title} className={`activity-card ${item.color}`}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="/contact" className="card-btn">Join Now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="advantages" data-aos="fade-right" data-aos-delay="180">
        <h2>Why this is perfect for every group</h2>
        <div className="adv-grid">
          <div className="adv-item">
            <h3>Supervised Kids Zone</h3>
            <p>Certified staff, clean pool, and themed learning for nursery and school swimmers.</p>
          </div>
          <div className="adv-item">
            <h3>Family Friendly</h3>
            <p>One pass unlocks all areas for all ages with access to discounts and events.</p>
          </div>
          <div className="adv-item">
            <h3>Flexible Timings</h3>
            <p>Day passes, evening sessions and weekend bundles to fit your schedule.</p>
          </div>
        </div>
      </section>

      <section className="safety" data-aos="zoom-in" data-aos-delay="230">
        <h2>Safety & quality you can trust</h2>
        <p>
          Every activity is designed and maintained at the highest standards, with certified
          instructors and a transparent health policy.
        </p>
      </section>
    </div>
  )
}

export default Activities