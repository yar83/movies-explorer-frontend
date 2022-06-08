import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import './index.css';

export default function MainTitle() {
  return (
    <>
      <MainHeader />
      <div className="main-title">
        <h1 className="main-title__title">
          Учебный проект студента факультета Веб-разработки
        </h1>
      </div>
    </>
  );
};
