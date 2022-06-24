import React, { useState } from 'react';
import ProfileFieldset from '../ProfileFieldset/ProfileFieldset';
import TextButton from '../ui/buttons/text/TextButton';
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import { useForm } from '../../utils/hooks/useForm';
import { editProfileFormSchema } from '../../utils/validation/formSchema';
import { editProfileFormValidationSchema } from '../../utils/validation/formValidationSchema';
import mainApi from '../../utils/api/MainApi';
import Icon from '../ui/icon/Icon';
import './index.css';

export default function ProfileForm(props) {
  const {
    saveBtnClickHandler,
    updateUserData,
    userData,
  } = props;

  const [genErrMessage, setGenErrMessage] = useState('');

  const customFormValidatonSchema = {
    name: {
      required: true,
      validator: {
        regExp: new RegExp(`(^(?!${userData.name}).*$)|(^.*(?<!${userData.name})$)`),
        error: 'Ничего не поменялось',
      },
    },
    email: {
      required: true,
      validator: {
        regExp: new RegExp(`(^(?!${userData.email}).*$)|(^.*(?<!${userData.email})$)`),
        error: 'Ничего не поменялось',
      },
    },
  };

  const { state, buttonDisabled, handleChange, handleSubmit } = useForm(
    editProfileFormSchema,
    editProfileFormValidationSchema,
    () => {
      mainApi.updateUserData(...Object.keys(state).map((el) => state[el].value))
        .then((newUserData) => {
          updateUserData(newUserData);
          saveBtnClickHandler();
        })
        .catch((err) => err.json().then((resp) => setGenErrMessage(resp.message)));
    },
    customFormValidatonSchema
  );

  return (
    <form className="profile-form" noValidate onSubmit={handleSubmit}>
      <ProfileFieldset
        state={state}
        handleChange={handleChange}
        genErrMessage={genErrMessage}
      />
      <fieldset className="profile-form__button">
        <TextButton
          label={actionButtonText.save}
          color="white"
          fontSize="13"
          fontWeight="regular"
          isDisabled={buttonDisabled}
          handleClick={() => null}
        />
        <div className="profile-form__info">
          <Icon glyph="info-sign" />
          <div className="profile-form__info-tooltip">
            <span className="profile-form__info-tooltip-text">Введите данные, которые вы хотите изменить.</span>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
