import React from 'react';
import './index.css';

export default function SignInFieldset() {
  return (
    <fieldset className="signin-fieldset">
      <p className="signin-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="email">E-mail</label>
        <input className="signin-fieldset__input signin-fieldset__input_error" type="email" id="email" name="email" placeholder="Иван" required></input>
        <span className="signin-fieldset__error">Пишите кириллицей</span>
      </p>
      <p className="signin-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="password">Пароль</label>
        <input className="signin-fieldset__input signin-fieldset__input_correct" type="password" id="password" name="password" placeholder="••••••••••" required></input>
        <span className="signin-fieldset__error">Пароль необходим</span>        
      </p>
      <p className="signin-fieldset__general-error">
        Что-то пошло не так...
      </p>
    </fieldset>
  );
};
