import React from 'react';
import './index.css';
import GreenS from '../../../labels/GreenS/GreenS';

export default function GreenSButton({handleClick}) {
  return (
    <button className="green-s-button" onClick={handleClick}>
      <GreenS />
    </button>
  );
}
