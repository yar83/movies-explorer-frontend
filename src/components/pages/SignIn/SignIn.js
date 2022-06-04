import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../utils/hooks/useForm';
import GreenSButton from '../../ui/buttons/compound/GreenS/GreenSButton';
import TextButton from '../../ui/buttons/text/TextButton';
import SignForm from '../../SignForm/SignForm';
import SignInFieldset from '../../SignInFieldset/SignInFieldset';
import { actionButtonText, moveButtonText } from '../../../shared/constants/buttons/button-text';
import { signInFormValidationSchema } from '../../../utils/validation/formValidationSchema';
import { signInFormSchema } from '../../../utils/validation/formSchema';
import mainApi from '../../../utils/api/MainApi';
import './index.css'

export default function SignIn() {
  const buttonData = {
    view: 'blue-sign',
    label: actionButtonText.signin,
  };

  function signInCB(state) {
    mainApi.signin(...Object.keys(state).map((el) => state[el].value)) 
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

  const { state, buttonDisabled, handleChange, handleSubmit } = useForm(signInFormSchema, signInFormValidationSchema, signInCB);

  let navigate = useNavigate();

  const moveToMainPage = () => {
    navigate('../');
  };

  const moveToSignUpPage = () => {
    navigate('../signup');
  };

  return (
    <section className="signin">
      <GreenSButton handleClick={moveToMainPage} />
      <h1 className="signin__header">Добро пожаловать!</h1>
      <SignForm buttonData={buttonData} buttonDisabled={buttonDisabled} formPurpose="signin" handleSubmit={handleSubmit}>
        <SignInFieldset handleChange={handleChange} state={state}/>
      </SignForm>
      <div className="signin__footer">
        <p className="signin__notregyet">Ещё не зарегистрированы?</p>
        <TextButton
          label={moveButtonText.register}
          color="blue"
          fontSize="14"
          fontWeight="regular"
          handleClick={moveToSignUpPage}
        />
      </div>
    </section>
  );
};
