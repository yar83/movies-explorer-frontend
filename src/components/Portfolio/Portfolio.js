import React from 'react';
import PortfolioButton from '../ui/buttons/compound/PortfolioButton/PortfolioButton';
import './index.css';



export default function Porfolio({ portfolio }) {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      { portfolio.map((el, i) => {
        return (
          <div className="portfolio__button-container" key={i}>
            <PortfolioButton label={el.title} />
          </div>
      )}) }
    </div>
  );
};
