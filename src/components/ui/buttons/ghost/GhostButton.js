import React from 'react';
import './index.css';

export default function GhostButton(props) {
  const {
    label,
    handleClick,
  } = props;

  return (
    <button className="ghost-button" onClick={handleClick}>
      {label}
    </button>
  );
};
