import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../utils/hooks/useForm';
import GreenSButton from '../../ui/buttons/compound/GreenS/GreenSButton';
import TextButton from '../../ui/buttons/text/TextButton';
import SignForm from '../../SignForm/SignForm';
import SignUpFieldset from '../../SignUpFieldset/SignUpFieldset';
import { actionButtonText, moveButtonText } from '../../../shared/constants/buttons/button-text';
import './index.css'
import { signUpFormSchema } from '../../../utils/validation/formSchema';
import { signUpFormValidationSchema } from '../../../utils/validation/formValidationSchema';
import mainApi from '../../../utils/api/MainApi';

export default function Register() {
  let navigate = useNavigate();

  function signUpCB(state) {
    mainApi.signup(...Object.keys(state).map((el) => state[el].value)) 
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        console.log('finally');
      });
  };

  const { state, buttonDisabled, handleChange, handleSubmit } = useForm(signUpFormSchema, signUpFormValidationSchema, signUpCB);

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
      <SignForm buttonData={buttonData} buttonDisabled={buttonDisabled} formPurpose="signup" handleSubmit={handleSubmit}>
        <SignUpFieldset handleChange={handleChange} state={state}/>
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
