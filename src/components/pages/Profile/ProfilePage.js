import React, { useContext } from 'react';
import Header from '../../Header/Header';
import Profile from '../../Profile/Profile';
import { useForm } from '../../../utils/hooks/useForm';
import { editProfileFormSchema } from '../../../utils/validation/formSchema';
import { editProfileFormValidationSchema } from '../../../utils/validation/formValidationSchema';
import { UserAuthContext } from '../../../contexts/UserAuthContext';

export default function ProfilePage() {
  const currentUser = useContext(UserAuthContext);

  const { state, buttonDisabled, handleChange, handleSubmit, resetForm } = useForm(
    editProfileFormSchema,
    editProfileFormValidationSchema,
    () => console.log('profile submitting')
  );
  return (
    <>
      <Header />
      <Profile
        state={state}
        buttonDisabled={buttonDisabled}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
      />
    </>
  );
};
