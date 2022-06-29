import React from 'react';
import './index.css';

export default function ProfileData({ userData }) {
  const { name, email } = userData;

  return (
    <div className="profile-data">
      <p className="profile-data__item">
        <span className="profile-data__title">Имя</span>
        <span className="profile-data__data">{name}</span>
      </p>
      <p className="profile-data__item">
        <span className="profile-data__title">E-mail</span>
        <span className="profile-data__data">{email}</span>
      </p>
    </div>
  );
};
