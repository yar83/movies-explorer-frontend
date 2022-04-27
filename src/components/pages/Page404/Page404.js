import React from 'react';
import TextButton from '../../ui/buttons/text/TextButton';
import { moveButtonText } from '../../../shared/constants/buttons/button-text';
import './index.css';

export default function Page404() {
  return (
      <section className="page-404">
        <div className="page-404__meaning">
          <h1 className="page-404__404">404</h1>
          <p className="page-404__not-found">Страница не найдена</p>
        </div>
        <div className="page-404__back-butt">
          <TextButton
            label={moveButtonText.back}
            color="blue"
            fontSize="12"
            fontWeight="regular"
          />
        </div>
      </section>
  );
};
