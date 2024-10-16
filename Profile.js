import React from 'react';
import './style.css';  // Import global CSS

function Profile() {
  const user = {
    name: "Rithin",
    email: "rithin@gmail.com",
    phone: "+91 814 249 2351",
    bio: "I love handloom fashion and working with local artisans."
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
