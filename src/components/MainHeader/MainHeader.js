import React from 'react';
import './index.css';
import SolidButton from '../ui/buttons/solid/SolidButton';
import TextButton from '../ui/buttons/text/TextButton';
import GreenS from '../ui/labels/GreenS/GreenS';
import { moveButtonText } from '../../shared/constants/buttons/button-text';

export default function MainHeader() {
  return (
    <div className="main-header">
      <div className="main-header__wrapper">
        <div className="main-header__greens">
          <GreenS/>
        </div>
        <TextButton
          label={moveButtonText.register}
          color="white"
          fontSize="12"
          fontWeight="medium"
        />
        <SolidButton
          view="green-signin"
          label={moveButtonText.enter}
        />
      </div>
    </div>
  );
};
