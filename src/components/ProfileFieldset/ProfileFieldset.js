import React from 'react';
import './index.css';

export default function ProfileFieldset({ state, handleChange, genErrMessage }) {

  return (
    <fieldset className="profile-fieldset">
      <p className="profile-fieldset__item">
        <label className="profile-fieldset__label" htmlFor="name"></label>
        <input className={`profile-fieldset__input ${state.name.isClear ? '' : state.name.error ? 'profile-fieldset__input_error' : 'profile-fieldset__input_correct'}`} type="text" id="name" name="name" placeholder="Имя" value={state.name.value || ''} onChange={handleChange} required />
        <span className="profile-fieldset__error">{state.name.error}</span>
      </p>
      <p className="profile-fieldset__item">
        <label className="profile-fieldset__label" htmlFor="email"></label>
        <input className={`profile-fieldset__input ${state.email.isClear ? '' : state.email.error ? 'profile-fieldset__input_error' : 'profile-fieldset__input_correct'}`} type="email" id="email" name="email" placeholder="E-mail" value={state.email.value || ''} onChange={handleChange} required />
        <span className="profile-fieldset__error">{state.email.error}</span>
      </p>
      <p className="profile-fieldset__general-error">
        {genErrMessage}
      </p>
    </fieldset>
  );
};
