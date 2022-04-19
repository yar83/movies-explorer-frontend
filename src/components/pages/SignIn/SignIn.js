import React from 'react';
import GreenS from '../../ui/labels/GreenS/GreenS';
import TextButton from '../../ui/buttons/text/TextButton';
import SignForm from '../../SignForm/SignForm';
import SignInFieldset from '../../SignInFieldset/SignInFieldset';
import { actionButtonText, moveButtonText } from '../../../shared/constants/buttons/button-text';
import './index.css'

export default function SignIn() {
  const buttonData = {
    view: 'blue-sign',
    label: actionButtonText.signin,
  };

  return (
    <div className="signin">
      <GreenS />
      <h1 className="signin__header">Добро пожаловать!</h1>
      <SignForm buttonData={buttonData} formPurpose="signin">
        <SignInFieldset />
      </SignForm>
      <div className="signin__footer">
        <p className="signin__notregyet">Уже зарегистрированы?</p>
        <TextButton
          label={moveButtonText.signup}
          color="blue"
          fontSize="14"
          fontWeight="regular"
        />
      </div>
    </div>
  );
};
