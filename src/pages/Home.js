import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

function Home() {
  // Sample data for recent events
  const recentEvents = [
    {
      id: 'event1',
      title: 'Workshop on AI and Machine Learning',
      date: 'March 15, 2025',
      description: 'Join us for an interactive workshop on AI fundamentals and practical applications of machine learning.',
      image: `${process.env.PUBLIC_URL}/assets/images/event1.jpg`,
    },
    {
      id: 'event2',
      title: 'Robotics Competition',
      date: 'February 28, 2025',
      description: 'Participate in our annual robotics competition and showcase your engineering skills.',
      image: `${process.env.PUBLIC_URL}/assets/images/event2.jpg`,
    },
    {
      id: 'event3',
      title: 'Tech Talk: Future of IoT',
      date: 'February 10, 2025',
      description: 'Learn about the latest trends and future prospects in Internet of Things technologies.',
      image: `${process.env.PUBLIC_URL}/assets/images/event3.jpg`,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>IEEE Alfaisal Student Branch</h1>
          <p>Empowering students through technology, innovation, and professional development</p>
          <div className="hero-buttons">
            <Link to="/events" className="primary-button">Upcoming Events</Link>
            <Link to="/join" className="secondary-button">Join Us</Link>
          </div>
        </div>
      </section>
      
      {/* Recent Events Section */}
      <section className="recent-events-section">
        <div className="section-header">
          <h2>Recent Events</h2>
          <Link to="/events" className="view-all">View All Events</Link>
        </div>
        <div className="events-grid">
          {recentEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About IEEE Alfaisal Student Branch</h2>
            <p>
              The IEEE Student Branch at Alfaisal University is dedicated to fostering technological 
              innovation and professional growth among engineering students. We organize workshops, 
              competitions, networking events, and technical talks to bridge the gap between academic 
              learning and industry practices.
            </p>
            <p>
              Our mission is to inspire and enable students to become the next generation of 
              technological leaders and innovators.
            </p>
            <Link to="/team" className="about-button">Meet Our Team</Link>
          </div>
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/assets/images/team.jpg`} alt="IEEE Alfaisal Team" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;