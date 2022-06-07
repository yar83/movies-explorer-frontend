import React from 'react';
import ProfileFieldset from '../ProfileFieldset/ProfileFieldset';
import TextButton from '../ui/buttons/text/TextButton';
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function ProfileForm(props) {
  const { state, buttonDisabled, handleChange, handleSubmit, resetForm } = props;

  return (
    <form className="profile-form" noValidate>
      <ProfileFieldset state={state} handleChange={handleChange} resetForm={resetForm} />
      <fieldset className="profile-form__button">
        <TextButton
          label={actionButtonText.save}
          color="white"
          fontSize="13"
          fontWeight="regular"
          isDisabled={buttonDisabled}
        />
      </fieldset>
    </form>
  );
};
