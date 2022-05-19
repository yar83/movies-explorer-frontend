import React from 'react';
import PortfolioButton from '../ui/buttons/compound/PortfolioButton/PortfolioButton';
import './index.css';

export default function Porfolio({ portfolio }) {
  const openLink = (label) => {
    window.open(portfolio.find(el => el.title === label).url, "_blank");
  };

  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      { portfolio.map((el, i) => {
        return (
          <div className="portfolio__button-container" key={i}>
            <PortfolioButton label={el.title} handleClick={openLink} />
          </div>
      )}) }
    </div>
  );
};
