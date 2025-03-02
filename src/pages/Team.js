import React from 'react';
import TeamMember from '../components/TeamMember';

function Team() {
  // Sample data for team members
  const executiveBoard = [
    {
      id: 1,
      name: 'Ahmed Al-Saud',
      role: 'Chairperson',
      bio: 'Ahmed is a senior Electrical Engineering student with interests in renewable energy and control systems.',
      image: `${process.env.PUBLIC_URL}/assets/images/member1.jpg`,
      linkedin: 'https://linkedin.com',
      email: 'ahmed@alfaisal.edu',
    },
    {
      id: 2,
      name: 'Sara Al-Qahtani',
      role: 'Vice Chairperson',
      bio: 'Sara is studying Computer Science with a focus on AI and machine learning algorithms.',
      image: `${process.env.PUBLIC_URL}/assets/images/member2.jpg`,
      linkedin: 'https://linkedin.com',
      email: 'sara@alfaisal.edu',
    },
    {
      id: 3,
      name: 'Mohammed Al-Omar',
      role: 'Secretary',
      bio: 'Mohammed is a junior in Mechanical Engineering with interests in sustainable design and robotics.',
      image: `${process.env.PUBLIC_URL}/assets/images/member3.jpg`,
      linkedin: 'https://linkedin.com',
      email: 'mohammed@alfaisal.edu',
    },
  ];
  
  const committeeMembers = [
    {
      id: 4,
      name: 'Fatima Al-Dossari',
      role: 'Events Coordinator',
      bio: 'Fatima organizes and manages all IEEE branch events and activities.',
      image: `${process.env.PUBLIC_URL}/assets/images/member4.jpg`,
      linkedin: 'https://linkedin.com',
      email: 'fatima@alfaisal.edu',
    },
    {
      id: 5,
      name: 'Khalid Al-Hasan',
      role: 'Technical Lead',
      bio: 'Khalid manages the technical content for workshops and competitions.',
      image: `${process.env.PUBLIC_URL}/assets/images/member5.jpg`,
      linkedin: 'https://linkedin.com',
      email: 'khalid@alfaisal.edu',
    },
    {
      id: 6,
      name: 'Noor Al-Faisal',
      role: 'Media Coordinator',
      bio: 'Noor handles social media presence and promotional activities for the branch.',
      image: `${process.env.PUBLIC_URL}/assets/images/member6.jpg`,
      linkedin: 'https://linkedin.com',
      email: 'noor@alfaisal.edu',
    },
  ];

  return (
    <div className="team-page">
      <div className="page-header">
        <h1>Our Team</h1>
        <p>Meet the dedicated students leading IEEE Alfaisal Student Branch</p>
      </div>
      
      <section className="executive-board">
        <div className="section-header">
          <h2>Executive Board</h2>
        </div>
        <div className="team-grid">
          {executiveBoard.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>
      
      <section className="committee-members">
        <div className="section-header">
          <h2>Committee Members</h2>
        </div>
        <div className="team-grid">
          {committeeMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>
      
      <section className="join-team">
        <div className="join-content">
          <h3>Join Our Team</h3>
          <p>Interested in becoming part of IEEE Alfaisal Student Branch leadership?</p>
          <p>Applications for committee positions open each semester.</p>
          <a href="/contact" className="join-button">Contact Us for Details</a>
        </div>
      </section>
    </div>
  );
}

export default Team;