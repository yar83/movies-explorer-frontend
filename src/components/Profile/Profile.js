import React from 'react';
import ProfileData from '../ProfileData/ProfileData';
import TextButton from '../ui/buttons/text/TextButton';
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__header">Привет, Виталий!</h1>
      <div className="profile__body">
        <ProfileData />
        <div className="profile__buttons">
          <TextButton
            label={actionButtonText.edit}
            color="white"
            fontSize="12"
            fontWeight="regular"
          />
          <TextButton
            label={actionButtonText.signout}
            color="red"
            fontSize="12"
            fontWeight="medium"
          />
        </div>
      </div>
    </section>
  );
}
