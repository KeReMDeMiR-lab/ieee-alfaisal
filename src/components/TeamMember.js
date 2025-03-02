import React from 'react';

function TeamMember({ member }) {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>
        <div className="member-social">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`}>
              <i className="fa fa-envelope"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;