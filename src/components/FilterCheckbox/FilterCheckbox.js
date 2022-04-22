import React from 'react';
import './index.css';

export default function FilterCheckbox({ label }) {
 return (
   <div className="filter-checkbox">
     <label className="filter-checkbox__label" for="shorts-checkbox">
       <input
         type="checkbox"
         className="filter-checkbox__checkbox"
         id="shorts-checkbox"
         name="shorts-checkbox"
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
