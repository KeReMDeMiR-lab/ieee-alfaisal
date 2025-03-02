import React from 'react';
import EventCard from '../components/EventCard';

function Events() {
  // Sample data for events
  const upcomingEvents = [
    {
      id: 'upcoming1',
      title: 'Workshop on AI and Machine Learning',
      date: 'March 15, 2025',
      description: 'Join us for an interactive workshop on AI fundamentals and practical applications of machine learning.',
      image: `${process.env.PUBLIC_URL}/assets/images/event1.jpg`,
    },
    {
      id: 'upcoming2',
      title: 'Engineering Career Fair',
      date: 'April 5, 2025',
      description: 'Connect with industry professionals and explore career opportunities in engineering and technology.',
      image: `${process.env.PUBLIC_URL}/assets/images/career-fair.jpg`,
    },
    {
      id: 'upcoming3',
      title: 'Hackathon 2025',
      date: 'April 20-21, 2025',
      description: '48-hour coding challenge to develop innovative solutions for real-world problems.',
      image: `${process.env.PUBLIC_URL}/assets/images/hackathon.jpg`,
    },
  ];
  
  const pastEvents = [
    {
      id: 'past1',
      title: 'Robotics Competition',
      date: 'February 28, 2025',
      description: 'Participate in our annual robotics competition and showcase your engineering skills.',
      image: `${process.env.PUBLIC_URL}/assets/images/event2.jpg`,
    },
    {
      id: 'past2',
      title: 'Tech Talk: Future of IoT',
      date: 'February 10, 2025',
      description: 'Learn about the latest trends and future prospects in Internet of Things technologies.',
      image: `${process.env.PUBLIC_URL}/assets/images/event3.jpg`,
    },
    {
      id: 'past3',
      title: 'Circuit Design Workshop',
      date: 'January 25, 2025',
      description: 'Hands-on workshop on circuit design fundamentals and PCB prototyping.',
      image: `${process.env.PUBLIC_URL}/assets/images/circuit.jpg`,
    },
  ];

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>IEEE Alfaisal Events</h1>
        <p>Join us for workshops, competitions, tech talks, and more!</p>
      </div>
      
      <section className="upcoming-events">
        <div className="section-header">
          <h2>Upcoming Events</h2>
        </div>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      <section className="past-events">
        <div className="section-header">
          <h2>Past Events</h2>
        </div>
        <div className="events-grid">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;