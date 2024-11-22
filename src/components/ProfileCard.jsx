import React from 'react';

const ProfileCard = ({ name, image, description }) => {
  return (
    <div className="profile-card">
      <img 
        src={image} 
        alt={`${name}'s profile`}
        className="profile-image"
      />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard; 