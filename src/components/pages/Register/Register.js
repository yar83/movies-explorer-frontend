import React from 'react';
import GreenS from '../../ui/labels/GreenS/GreenS';
import TextButton from '../../ui/buttons/text/TextButton';
import SignForm from '../../SignForm/SignForm';
import SignUpFieldset from '../../SignUpFieldset/SignUpFieldset';
import { actionButtonText, moveButtonText } from '../../../shared/constants/buttons/button-text';
import './index.css'

export default function Register() {
  const buttonData = {
    view: 'blue-sign',
    label: actionButtonText.signup,
  };

  return (
    <div className="register">
      <GreenS />
      <h1 className="register__header">Добро пожаловать!</h1>
      <SignForm buttonData={buttonData}>
        <SignUpFieldset />
      </SignForm>
      <div className="register__footer">
        <p className="register__regyet">Уже зарегистрированы?</p>
        <TextButton
          label={moveButtonText.enter}
          color="blue"
          fontSize="14"
          fontWeight="regular"
        />
      </div>
    </div>
  );
};
