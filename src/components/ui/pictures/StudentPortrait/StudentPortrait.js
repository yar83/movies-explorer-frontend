import React from 'react';
import './index.css';

export default function StudentPortrait({ url }) {
  return <img src={url} alt="Фотография автора" className="student-portrait" />;
};
