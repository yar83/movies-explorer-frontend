import React from 'react';
import PorfolioButton from '../ui/buttons/compound/PortfolioButton/PortfolioButton';
import './index.css';



export default function Porfolio({ portfolio }) {
  console.log(portfolio);
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      { portfolio.map((el, i) => <PorfolioButton key={i} label={el} />) }
    </div>
  );
};
