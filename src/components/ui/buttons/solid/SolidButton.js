import React from 'react';
import './index.css';

export default function SolidButton(props) {
  const {
    view,
    label,
    handleClick,
  } = props;

  return (
    <button className={`solid-button solid-button_${view}`} onClick={handleClick}>
      {label}
    </button>
  );
};
