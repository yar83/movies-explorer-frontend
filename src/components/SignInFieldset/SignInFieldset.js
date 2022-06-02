import React from 'react';
import './index.css';

export default function SignInFieldset({handleChange, state}) {
  return (
    <fieldset className="signin-fieldset">
      <p className="signin-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="email">E-mail</label>
        <input className={`signin-fieldset__input ${state.email.isClear ? '' : state.email.error ? 'signin-fieldset__input_error' : 'signin-fieldset__input_correct'}`} type="email" id="email" name="email" placeholder="mail@yandex.ru" value={state.email.value || ''} onChange={handleChange} required></input>
        <span className="signin-fieldset__error">{state.email.error}</span>
      </p>
      <p className="signin-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="password">Пароль</label>
        <input className={`signin-fieldset__input ${state.password.isClear ? '' : state.password.error ? 'signin-fieldset__input_error' : 'signin-fieldset__input_correct'}`} type="password" id="password" name="password" placeholder="••••••" value={state.password.value || '' } onChange={handleChange} required></input>
        <span className="signin-fieldset__error">{state.password.error}</span>        
      </p>
      <p className="signin-fieldset__general-error">
      </p>
    </fieldset>
  );
};
