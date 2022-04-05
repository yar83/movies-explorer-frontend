import React from 'react';
import './index.css';
import { moveButtonText } from '../../../../../shared/constants/buttons/button-text';
import Icon from '../../../icon/Icon';

export default function MicroManButton() {
  return (
    <button className="micro-man">
      {moveButtonText.account}
      <div className="micro-man__flat">
        <Icon glyph="micro-man" />
      </div>
    </button>
  );
}
