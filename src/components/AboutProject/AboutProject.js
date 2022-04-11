import React from 'react';
import './index.css';

export default function AboutProject() {
  return (
    <>
      <div className="proj-descr">
        <p className="proj-descr__title">Дипломный проект включал 5 этапов</p>
        <p className="proj-descr__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="proj-descr">
        <p className="proj-descr__title">На выполнение диплома ушло 5 недель</p>
        <p className="proj-descr__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="proj-duration">
        <p className="proj-duration__one-week">1 неделя</p>
        <p className="proj-duration__four-week">4 недели</p>
        <p className="proj-duration__stage">Back-end</p>
        <p className="proj-duration__stage">Front-end</p>
      </div>
    </>
  );
};
