import React from 'react';
import GalleryGrid from '../components/Gallery';

function Gallery() {
  // Sample data for gallery images
  const galleryImages = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery1.jpg`,
      alt: 'Workshop Session',
      title: 'AI Workshop',
      description: 'Students participating in our AI workshop, learning about neural networks.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery2.jpg`,
      alt: 'Robotics Competition',
      title: 'Robotics Finals',
      description: 'The final round of our annual robotics competition.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery3.jpg`,
      alt: 'Tech Talk',
      title: 'Guest Speaker Series',
      description: 'Industry professionals sharing insights during our tech talk series.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery4.jpg`,
      alt: 'Team Building Event',
      title: 'Team Building Day',
      description: 'IEEE members during our annual team building retreat.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery5.jpg`,
      alt: 'Project Showcase',
      title: 'Innovation Showcase',
      description: 'Students presenting their projects at our innovation showcase.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery6.jpg`,
      alt: 'Field Trip',
      title: 'Industry Visit',
      description: 'IEEE members visiting a local technology company.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery7.jpg`,
      alt: 'Hackathon',
      title: 'Hackathon 2024',
      description: 'Teams collaborating during our 48-hour hackathon event.',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/gallery8.jpg`,
      alt: 'Award Ceremony',
      title: 'Annual Awards',
      description: 'Recognizing outstanding contributions at our annual awards ceremony.',
    },
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Moments captured from our events, workshops, and activities</p>
      </div>
      
      <GalleryGrid images={galleryImages} />
    </div>
  );
}

export default Gallery;