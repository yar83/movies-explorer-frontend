import React from 'react';
import './index.css';

export default function SolidButton(props) {
  const {
    view,
    label,
  } = props;

  return (
    <button className={`solid-button solid-button_${view}`}>
      {label}
    </button>
  );
};
