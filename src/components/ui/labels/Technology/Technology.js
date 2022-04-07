import React from 'react';
import './index.css';

export default function Technology({ label }) {
  return (
    <div className="technology">
      <span className="technology__label">{label}</span>
    </div>
  );
};
