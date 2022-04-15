import React from 'react';
import Technology from '../ui/labels/Technology/Technology';
import { technologies } from '../../shared/constants/technologies';
import './index.css';

export default function TechnologyStack() {
  return (
    <>
      <div className="techno-text">
        <p className="techno-text__title">7 технологий</p>
        <p className="techno-text__text">На курсе веб-разработки мы освоили технологии, которые применили в данном проекте.</p>
      </div>
      <div className="techno-stack">
        {technologies.map((techo, i) => <Technology label={techo} key={i} />)}
      </div>
    </>
  );
};
