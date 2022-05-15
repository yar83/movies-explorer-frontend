import React from 'react';
import './index.css';

export default function LandingInfoSection(props) {
  const { title, link } = props;

  return (
    <section className="landing-info-section" id={link}>
      <h2 className="landing-info-section__title">{ title }</h2>
      { props.children }
    </section>
  );
}
