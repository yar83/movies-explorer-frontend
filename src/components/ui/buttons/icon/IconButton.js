import React from 'react';
import Icon from '../../icon/Icon';
import './index.css';

export default function IconButton(props) {
  const {
    view,
    glyph,
  } = props;

  return (
    <button className={`icon-button icon-button_${view}`}>
      <Icon glyph={glyph} />
    </button>
  );
};
