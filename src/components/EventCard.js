import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-content">
        <h3>{event.title}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-description">{event.description}</p>
        <Link to={`/events#${event.id}`} className="event-link">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default EventCard;