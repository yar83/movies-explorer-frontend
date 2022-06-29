import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileData from '../ProfileData/ProfileData';
import ProfileForm from '../ProfileForm/ProfileForm';
import TextButton from '../ui/buttons/text/TextButton';
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import { UserAuthContext} from '../../contexts/UserAuthContext';
import './index.css';

export default function Profile() {
  const currentUser = useContext(UserAuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => currentUser.signout(() => navigate('/', { replace: true }));

  const [isNormalProfileState, setIsNormalProfileState] = useState(true);

  const editButtonClickHandler = () => {
    setIsNormalProfileState(isNormalProfileState => !isNormalProfileState);
  };

  return (
    <section className="profile">
      <h1 className="profile__header">{`Привет, ${currentUser.userData.name}!`}</h1>
      <div className={`profile__body ${isNormalProfileState ? '' : 'profile__body_edit'}`}>
        {isNormalProfileState
          ? <ProfileData userData={currentUser.userData} />
          : <ProfileForm
              saveBtnClickHandler={editButtonClickHandler}
              updateUserData={currentUser.updateUserData}
              userData={currentUser.userData}
          />
        }
        <div className="profile__buttons">
          <TextButton
            label={isNormalProfileState ? actionButtonText.edit : actionButtonText.cancel}
            color="white"
            fontSize="12"
            fontWeight="regular"
            handleClick={editButtonClickHandler}
          />
          <TextButton
            label={actionButtonText.signout}
            color="red"
            fontSize="12"
            fontWeight="medium"
            handleClick={signOutHandler}
          />
        </div>
      </div>
    </section>
  );
}
