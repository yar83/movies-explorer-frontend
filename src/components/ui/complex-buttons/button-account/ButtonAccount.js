import React from 'react';
import ManInGray from '../../icons/ManInGray/ManInGray';
import './button-account/index.css';

const ButtonAccount = ({ text }) => {
  return (
    <button className="button-account">
      <span className="button-account__text">
        { text }
      </span>
      <ManInGray />
    </button>
  );
};

export default ButtonAccount;
