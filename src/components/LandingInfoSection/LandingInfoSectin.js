import React from 'react';
import './index.css';

export default function LandingInfoSection({ title, lineColor }) {
  return (
    <section className="landing-info-section">
      <h2 className={`landing-info-section__title landing-info-section__title_line-${lineColor}`}>{ title }</h2>
      
    </section>
  );
}
