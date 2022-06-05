import React, { useContext } from 'react';
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

  return (
    <section className="profile">
      <h1 className="profile__header">{`Привет, ${currentUser.userData.name}!`}</h1>
      <div className="profile__body">
        <ProfileData userData={currentUser.userData} />
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
            handleClick={signOutHandler}
          />
        </div>
      </div>
    </section>
  );
}
