import React from 'react';
import './index.css';
import Icon from '../../../icon/Icon';

export default function PorfolioButton({ label, handleClick }) {
  const clickHandler = () => {
    handleClick(label);
  };

  return (
    <button className="portfolio-button" onClick={clickHandler}>
      { label }
      <Icon glyph="arrow-right-up"/>
    </button>
  );
}
