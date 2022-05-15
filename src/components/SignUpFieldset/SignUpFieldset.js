import React from 'react';
import './index.css';

export default function SignUpFieldset() {
  return (
    <fieldset className="signup-fieldset">
      <p className="signup-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="name">Имя</label>
        <input type="text" className="signup-fieldset__input" name="name" id="name" placeholder="Иван" required></input>
        <span className="signup-fieldset__error">Пишите кириллицей</span>
      </p>
      <p className="signup-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="email">E-mail</label>
        <input type="email" className="signup-fieldset__input" name="email" id="email" placeholder="mail@yandex.ru" required></input>
        <span className="signup-fieldset__error">Некорректный email</span>
      </p>
      <p className="signup-fieldset__item">
        <label className="signup-fieldset__label" htmlFor="password">Пароль</label>
        <input type="password" className="signup-fieldset__input" name="name" id="password" required placeholder="••••••••••"></input>
        <span className="signup-fieldset__error">Слишком короткий пароль</span>
      </p>
      <p className="signup-fieldset__general-error">
        Что-то пошло не так...
      </p>
    </fieldset>
  );
};
