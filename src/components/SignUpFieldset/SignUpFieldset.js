import React from 'react';
import './index.css';

export default function SignUpFieldset({handleChange, state}) {
  return (
    <fieldset className="signup-fieldset">
      <p className="signup-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="name">Имя</label>
        <input type="text" className={`signup-fieldset__input ${state.name.isClear ? '' : state.name.error ? 'signup-fieldset__input_error' : 'signup-fieldset__input_correct'}`} name="name" id="name" value={state.name.value || ''} placeholder="Иван" onChange={handleChange} required></input>
        <span className="signup-fieldset__error">{state.name.error}</span>
      </p>
      <p className="signup-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="email">E-mail</label>
        <input type="email" className={`signup-fieldset__input ${state.email.isClear ? '' : state.email.error ? 'signup-fieldset__input_error' : 'signup-fieldset__input_correct'}`} name="email" id="email" value={state.email.value || ''} placeholder="mail@yandex.ru" onChange={handleChange} required></input>
        <span className="signup-fieldset__error">{state.email.error}</span>
      </p>
      <p className="signup-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="password">Пароль</label>
        <input type="password" className={`signup-fieldset__input ${state.password.isClear ? '' : state.password.error ? 'signup-fieldset__input_error' : 'signup-fieldset__input_correct'}`} name="password" id="password" value={state.password.value || ''} required placeholder="••••••" onChange={handleChange}></input>
        <span className="signup-fieldset__error">{state.password.error}</span>
      </p>
      <p className="signup-fieldset__general-error">
      </p>
    </fieldset>
  );
};
