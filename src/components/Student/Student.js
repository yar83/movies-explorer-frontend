import React from 'react';
import StudentPortrait from '../ui/pictures/StudentPortrait/StudentPortrait';
import Bio from '../Bio/Bio';
import Portfolio from '../Portfolio/Portfolio';
import { userBio } from '../../shared/constants/userbio/userbio';
import url from '../../shared/images/student/yarb.png';

import './index.css';

export default function Student() {
  return (
    <div class="student">
      <div className="student__info">
          <Bio name={userBio.name} about={userBio.about} bio={userBio.bio} socials={userBio.socials} />
          <StudentPortrait url={url} />
      </div>
        <Portfolio portfolio={userBio.portfolio} />
    </div>
  );
};
