import React, { useState } from 'react';
import SolidButton from '../ui/buttons/solid/SolidButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { actionButtonText } from '../../shared/constants/buttons/button-text'; 
import { checkBoxCaptions } from '../../shared/constants/captions/captions';
import './index.css';

export default function SearchForm(props) {
  const {
    searchQuery,
    handleFormChange,
    submitHandler,
    isQueryValid,
    shortMetersCheckboxHandler,
    initCheckBoxState
  } = props;

  const [isFormFocused, setFormFocused] = useState(false);

  return (
    <section className="search-form">
      <div className={`search-form__form ${isFormFocused ? 'search-form__form_focused' : ''}`}>
        <form className="search-form__form-entity" name="search-form" onSubmit={submitHandler}>
          <input
            type="text"
            className="search-form__search-input"
            name="search-input"
            id="search-input"
            placeholder="Фильм"
            size="10"
            onFocus={() => setFormFocused(true)}
            onBlur={() => setFormFocused(false)}
            onChange={handleFormChange}
            value={searchQuery || ''}
          />
          <SolidButton
            view="blue-search"
            label={actionButtonText.search}
          />
        </form>
      </div>
      <p className="search-form__error">{isQueryValid ? '' : 'Нужно ввести ключевое слово'}</p>
      <div className="search-form__shorts">
        <FilterCheckbox
          label={checkBoxCaptions.shortMeters}
          changeHandler={shortMetersCheckboxHandler}
          initialState={initCheckBoxState}
        />
      </div>
    </section>
  );
};
