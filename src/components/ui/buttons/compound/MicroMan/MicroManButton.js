import React from 'react';
import './index.css';
import { moveButtonText } from '../../../../../shared/constants/buttons/button-text';
import Icon from '../../../icon/Icon';

export default function MicroManButton({ handleClick, isOnMain }) {
  return (
    <button className="micro-man" onClick={handleClick}>
      {moveButtonText.account}
      <div className={`micro-man__flat ${isOnMain ? 'micro-man__flat_main' : ''}`}>
        <Icon glyph="micro-man" />
      </div>
    </button>
  );
}
