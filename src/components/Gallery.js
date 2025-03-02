import React, { useState } from 'react';

function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openModal = (image) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <span className="close-button">&times;</span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="image-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;