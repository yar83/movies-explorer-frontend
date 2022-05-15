import React from 'react';
import { useNavigate } from 'react-router-dom';
import GreenSButton from '../../ui/buttons/compound/GreenS/GreenSButton';
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

  let navigate = useNavigate();

  const moveToMainPage = () => {
    navigate('../');
  };

  return (
    <section className="signin">
      <GreenSButton handleClick={moveToMainPage} />
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
    </section>
  );
};
