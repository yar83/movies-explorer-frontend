import React from 'react';
import SolidButton from '../ui/buttons/solid/SolidButton';
import './index.css';

export default function SignForm(props) {
  const { buttonData, formPurpose } = props;

  return (
    <form className="sign-form" name={formPurpose} novalidate>
      { props.children }
      <fieldset className="sign-form__button">
        <SolidButton view={buttonData.view} label={buttonData.label} />
      </fieldset>
    </form>
  );
};
