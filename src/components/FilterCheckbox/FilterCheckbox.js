import React from 'react';
import './index.css';

export default function FilterCheckbox({ label, changeHandler }) {
  
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label" htmlFor="shorts-checkbox">
        <input
          type="checkbox"
          className="filter-checkbox__checkbox"
          id="shorts-checkbox"
          name="shorts-checkbox"
          onChange={changeHandler}
         />
        <span className="filter-checkbox__outline">
          <span className="filter-checkbox__indicator">
          </span>
        </span>
      {label}
      </label>
    </div>
  );
};
