import React, { useState } from 'react';
import SolidButton from '../ui/buttons/solid/SolidButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { actionButtonText } from '../../shared/constants/buttons/button-text'; 
import { checkBoxCaptions } from '../../shared/constants/captions/captions';
import './index.css';

export default function SearchForm() {
  const [isFormFocused, setFormFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <section className="search-form">
      <div className={`search-form__form ${isFormFocused ? 'search-form__form_focused' : ''}`}>
        <form className="search-form__form-entity" name="search-form">
          <input
            type="text"
            required
            className="search-form__search-input"
            name="search-input"
            id="search-input"
            placeholder="Фильм"
            size="10"
            onFocus={() => setFormFocused(true)}
            onBlur={() => setFormFocused(false)}
          />
          <SolidButton
            view="blue-search"
            label={actionButtonText.search}
          />
        </form>
      </div>
      <p className="search-form__error">{errorMessage}</p>
      <div className="search-form__shorts">
        <FilterCheckbox label={checkBoxCaptions.shortMeters} />
      </div>
    </section>
  );
};
