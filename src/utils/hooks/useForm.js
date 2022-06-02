import { useState, useEffect, useCallback } from 'react';

export function useForm(stateSchema, validationSchema, cb) {
  const [state, setState] = useState(stateSchema);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateFormState = () => {
    const hasErrors = Object.keys(validationSchema).some((key) => {
      const isInputRequired = validationSchema[key].required;
      const stateValue = state[key].value;
      const stateError = state[key].error;

      return (isInputRequired && !stateValue) || stateError;
    });
    return hasErrors;
  };

  useEffect(() => {
    setButtonDisabled(true);
  }, []);

  useEffect(() => {
    setButtonDisabled(validateFormState());
  }, [state]);

  const handleChange = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    const isClear = false;
    
    let error = '';
    if (validationSchema[name].required) {
      if (!value) {
        error = 'Это обязательное поле';
      }
    }

    if (
      validationSchema[name].validator !== null &&
      typeof validationSchema[name].validator === 'object'
    ) {
      if (value && !validationSchema[name].validator.regExp.test(value)) {
        error = validationSchema[name].validator.error;
      }
    }

    setState((state) => ({...state, [name]: { value, error, isClear },}));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!validateFormState()) {
      cb(state);
    }
  };

  return { state, buttonDisabled, handleChange, handleSubmit };
}
