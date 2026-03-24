import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thanks! Your message has been sent. Our team will respond shortly.')
  }

  return (
    <div className="contact-page">
      <section className="contact-hero" data-aos="fade-up">
        <div className="contact-hero-content">
          <h1>Contact Playtime Park</h1>
          <p>
            Reach out for bookings, lesson enrolment, event inquiries, or group visits. Our team is ready to help.
          </p>
        </div>
      </section>

      <section className="contact-wrap" data-aos="fade-up" data-aos-delay="120">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>We are open daily from 8:00 AM to 9:00 PM. Call or email us any time; we respond quickly.</p>

            <ul>
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Email:</strong> info@playtimepark.com</li>
              <li><strong>Address:</strong> 900 Fun Ave, Playtown City</li>
            </ul>

            <div className="contact-quick">
              <span>Follow us:</span>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your email" required />

              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="Phone number" />

              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Subject" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required />

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact