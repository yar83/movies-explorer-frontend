import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { moveButtonText } from '../../../../../shared/constants/buttons/button-text';
import Icon from '../../../icon/Icon';

export default function MicroManButton({ isOnMain }) {
  const navigate = useNavigate();  

  return (
    <button className="micro-man" onClick={() => navigate('/profile', { replace: true })}>
      {moveButtonText.account}
      <div className={`micro-man__flat ${isOnMain ? 'micro-man__flat_main' : ''}`}>
        <Icon glyph="micro-man" />
      </div>
    </button>
  );
}
