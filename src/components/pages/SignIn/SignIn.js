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
import './index.css'

export default function SignIn() {
  const buttonData = {
    view: 'blue-sign',
    label: actionButtonText.signin,
  };

  const { state, buttonDisabled, handleChange, handleSubmit } = useForm(signInFormSchema, signInFormValidationSchema, () => console.log(state));

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
      <SignForm buttonData={buttonData} buttonDisabled={buttonDisabled} formPurpose="signin" onSubmit={handleSubmit}>
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
