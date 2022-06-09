import React from 'react';
import ProfileFieldset from '../ProfileFieldset/ProfileFieldset';
import TextButton from '../ui/buttons/text/TextButton';
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import { useForm } from '../../utils/hooks/useForm';
import { editProfileFormSchema } from '../../utils/validation/formSchema';
import { editProfileFormValidationSchema } from '../../utils/validation/formValidationSchema';
import mainApi from '../../utils/api/MainApi';
import './index.css';

export default function ProfileForm({ saveBtnClickHandler, updateUserData } ) {
  const { state, buttonDisabled, handleChange, handleSubmit, resetForm } = useForm(
    editProfileFormSchema,
    editProfileFormValidationSchema,
    () => {
      mainApi.updateUserData(...Object.keys(state).map((el) => state[el].value))
        .then((newUserData) => {
          updateUserData(newUserData);
          saveBtnClickHandler();
        });
    }
  );

  return (
    <form className="profile-form" noValidate onSubmit={handleSubmit}>
      <ProfileFieldset state={state} handleChange={handleChange} resetForm={resetForm} />
      <fieldset className="profile-form__button">
        <TextButton
          label={actionButtonText.save}
          color="white"
          fontSize="13"
          fontWeight="regular"
          isDisabled={buttonDisabled}
          handleClick={() => null}
        />
      </fieldset>
    </form>
  );
};
