import React, { useContext} from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainHeaderAuthorized from '../MainHeaderAuthorized/MainHeaderAuthorized';
import { UserAuthContext } from '../../contexts/UserAuthContext';
import './index.css';

export default function MainTitle({ burgerBtnClickHandler }) {
  const { userData } = useContext(UserAuthContext);

  return (
    <>
      {userData ? <MainHeaderAuthorized burgerBtnClickHandler={burgerBtnClickHandler} /> : <MainHeader />}
      <div className="main-title">
        <h1 className="main-title__title">
          Учебный проект студента факультета Веб-разработки
        </h1>
      </div>
    </>
  );
};
