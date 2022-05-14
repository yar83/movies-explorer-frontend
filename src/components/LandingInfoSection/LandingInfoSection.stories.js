import React from 'react';
import LandingInfoSection from './LandingInfoSection';
import StudentPortrait from '../ui/pictures/StudentPortrait/StudentPortrait';
import Bio from '../Bio/Bio';
import Portfolio from '../Portfolio/Portfolio';
import TechnologyStack from '../TechnologyStack/TechnologyStack';
import Promo from '../Promo/Promo';

import portraitUrl from '../../shared/images/student/yarb.png';
import { userBio } from '../../shared/constants/userbio/userbio';
import { technologies } from '../../shared/constants/technologies';

export default {
  title: 'Design System/Molecules/Landing Info Section',
  component: LandingInfoSection,
};

const Default = (args) => <LandingInfoSection {...args} />;
Default.storyName = 'Landing Info Section';

const student = (
  <>
    <StudentPortrait url={portraitUrl} />
    <Bio name={userBio.name} about={userBio.about} bio={userBio.bio} socials={userBio.socials} />
    <Portfolio portfolio={userBio.portfolio} />
  </>
);

const technos = <TechnologyStack labels={technologies} />;

const promo = <Promo />;


export const Student = Default.bind({});
Student.args = {
  title: 'Студент',
  children: student,
};

export const Technologies = Default.bind({});
Technologies.args = {
  title: 'Технологии',
  children: technos,
};

export const AboutProj = Default.bind({});
AboutProj.storyName = 'About Project';
AboutProj.args = {
  title: 'О проекте',
  children: promo,
};
