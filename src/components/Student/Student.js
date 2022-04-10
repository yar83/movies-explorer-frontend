import React from 'react';
import StudentPortrait from '../ui/pictures/StudentPortrait/StudentPortrait';
import Bio from '../Bio/Bio';
import Portfolio from '../Portfolio/Portfolio';
import { userBio } from '../../shared/constants/userbio/userbio';
import url from '../../../public/yarb.png';

import './index.css';

export default function Student() {
  return (
    <section className="student">
      <h2 className="student__title">
  Студент
      </h2>
        <StudentPortrait url={url} />
        <Bio name={userBio.name} about={userBio.about} bio={userBio.bio} socials={userBio.socials} />
        <Portfolio portfolio={userBio.portfolio} />
    </section>
  );
};
