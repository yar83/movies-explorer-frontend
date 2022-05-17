import React from 'react';
import Icon from '../../icon/Icon';
import './index.css';

export default function IconButton(props) {
  const {
    view,
    glyph,
    clickHandler
  } = props;

  return (
    <button className={`icon-button icon-button_${view}`} onClick={clickHandler}>
      <Icon glyph={glyph} />
    </button>
  );
};
