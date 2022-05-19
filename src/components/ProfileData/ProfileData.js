import React from 'react';
import './index.css';

export default function ProfileData() {
  return (
    <div className="profile-data">
      <p className="profile-data__item">
        <span className="profile-data__title">Имя</span>
        <span className="profile-data__data">Виталий</span>
      </p>
      <p className="profile-data__item">
        <span className="profile-data__title">E-mail</span>
        <span className="profile-data__data">pochta@yandex.ru</span>
      </p>
    </div>
  );
};
