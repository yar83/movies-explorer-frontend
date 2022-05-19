import React from 'react';
import ProfileFieldset from '../ProfileFieldset/ProfileFieldset';
import TextButton from '../ui/buttons/text/TextButton';
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function ProfileForm() {
  return (
    <form className="profile-form" novalidate>
      <ProfileFieldset />
      <fieldset className="profile-form__button">
        <TextButton
          label={actionButtonText.save}
          color="white"
          fontSize="13"
          fontWeight="regular"
        />
      </fieldset>
    </form>
  );
};
