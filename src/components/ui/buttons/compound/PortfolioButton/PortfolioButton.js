import React from 'react';
import './index.css';
import Icon from '../../../icon/Icon';

export default function PorfolioButton({ label }) {
  return (
    <button className="portfolio-button">
      { label }
      <Icon glyph="arrow-right-up" />
    </button>
  );
}
