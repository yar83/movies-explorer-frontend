import React from 'react';
import './index.css';

export default function ProfileFieldset() {
  return (
    <fieldset className="profile-fieldset">
      <p className="profile-fieldset__item">
        <label className="profile-fieldset__label" htmlFor="name"></label>
        <input className="profile-fieldset__input" type="text" id="name" name="name" placeholder="Имя" required />
      </p>
      <p className="profile-fieldset__item">
        <label className="profile-fieldset__label" htmlFor="emain"></label>
        <input className="profile-fieldset__input" type="email" id="email" name="email" placeholder="E-mail" required />
      </p>
    </fieldset>
  );
};
