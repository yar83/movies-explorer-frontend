import React from 'react';
import './index.css';

export default function TextButton(props) {
  const {
    label,
    color,
    fontSize,
    fontWeight,
    underScored,
  } = props;

  return (
    <button className={`text-button text-button_color-${color} text-button_font-size-${fontSize} text-button_font-weight-${fontWeight} ${underScored ? 'text-button_underscored' : ''}`}>
      {label}
    </button>
  );
}
