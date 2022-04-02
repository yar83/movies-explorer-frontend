import React from 'react';
import './button/index.css';

const Button = ({ type, text }) => {
  return (
    <button className={`button button_${type}`}>
      {text ? text : ''}
    </button>
  );
}

export default Button;
