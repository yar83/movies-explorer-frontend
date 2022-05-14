import React from 'react';
import icons from '../../../shared/images/icons/index';

export default function Icon(props) {
  const {
    glyph,
  } = props;

  const IconComponent = icons[glyph];

  return (
    <IconComponent />
  );
};
