import React from 'react';
import { useNavigate } from 'react-router-dom';
import GreenSButton from '../../ui/buttons/compound/GreenS/GreenSButton';
import TextButton from '../../ui/buttons/text/TextButton';
import SignForm from '../../SignForm/SignForm';
import SignUpFieldset from '../../SignUpFieldset/SignUpFieldset';
import { actionButtonText, moveButtonText } from '../../../shared/constants/buttons/button-text';
import './index.css'

export default function Register() {
  let navigate = useNavigate();

  const moveToMainPage = () => {
    navigate('../');
  };

  const moveToSignInPage = () => {
    navigate('../signin');
  };

  const buttonData = {
    view: 'blue-sign',
    label: actionButtonText.signup,
  };

  return (
    <section className="register">
      <GreenSButton handleClick={moveToMainPage} />
      <h1 className="register__header">Добро пожаловать!</h1>
      <SignForm buttonData={buttonData} formPurpose="signup">
        <SignUpFieldset />
      </SignForm>
      <div className="register__footer">
        <p className="register__regyet">Уже зарегистрированы?</p>
        <TextButton
          label={moveButtonText.enter}
          color="blue"
          fontSize="14"
          fontWeight="regular"
          handleClick={moveToSignInPage}
        />
      </div>
    </section>
  );
};
