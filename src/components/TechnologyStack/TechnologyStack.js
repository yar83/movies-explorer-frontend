import React from 'react';
import Technology from '../ui/labels/Technology/Technology';
import './index.css';

export default function TechnologyStack({ labels }) {
  return (
    <div className="techno-stack">
      {labels.map((label, i) => <Technology label={label} key={i} />)}
    </div>
  );
};
