import { useState, useEffect, useCallback } from 'react';

export function useForm(stateSchema, signUpFormValidationSchema, cb) {
  const [state, setState] = useState(stateSchema);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateFormState = () => {
    const hasErrors = Object.keys(signUpFormValidationSchema).some((key) => {
      const isInputRequired = signUpFormValidationSchema[key].required;
      const stateValue = state[key].value;
      const stateError = state[key].error;

      return (isInputRequired && !stateValue) || stateError;
    });

    return hasErrors;
  };

  useEffect(() => {
    setButtonDisabled(true);
  }, []);

  const handleChange = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    const isClear = false;
    
    let error = '';
    if (signUpFormValidationSchema[name].required) {
      if (!value) {
        error = 'Это обязательное поле';
      }
    }

    if (
      signUpFormValidationSchema[name].validator !== null &&
      typeof signUpFormValidationSchema[name].validator === 'object'
    ) {
      if (value && !signUpFormValidationSchema[name].validator.regExp.test(value)) {
        error = signUpFormValidationSchema[name].validator.error;
      }
    }

    setState((state) => ({...state, [name]: { value, error, isClear },}));
    console.log(state);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!validateFormState()) {
      cb(state);
    }
  };

  return { state, buttonDisabled, handleChange, handleSubmit };
}
