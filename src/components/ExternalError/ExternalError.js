import React from 'react';
import './index.css';

export default function ExternalError() {
  return (
    <div className="external-error">
      <span className="external-error__text">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
    </div>
  )
}
