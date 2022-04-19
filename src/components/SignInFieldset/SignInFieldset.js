import React from 'react';
import './index.css';

export default function SignInFieldset() {
  return (
    <fieldset class="signin-fieldset">
      <p class="signin-fieldset__item">
        <label className="signup-fieldset__label" for="email">E-mail</label>
        <input className="signin-fieldset__input signin-fieldset__input_error" type="email" id="email" name="email" placeholder="Иван" required></input>
        <span className="signin-fieldset__error">Пишите кириллицей</span>
      </p>
      <p class="signin-fieldset__item">
        <label className="signup-fieldset__label" for="password">Пароль</label>
        <input className="signin-fieldset__input signin-fieldset__input_correct" type="password" id="password" name="password" placeholder="••••••••••" required></input>
        <span className="signin-fieldset__error">Пароль необходим</span>        
      </p>
      <p className="signin-fieldset__general-error">
        Что-то пошло не так...
      </p>
    </fieldset>
  );
};
