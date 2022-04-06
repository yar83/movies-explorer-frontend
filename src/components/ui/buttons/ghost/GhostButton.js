import React from 'react';
import './index.css';

export default function GhostButton(props) {
  const {
    label,
  } = props;

  return (
    <button className="ghost-button">
      {label}
    </button>
  );
};
