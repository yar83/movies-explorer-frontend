import React from 'react';
import StudentPortrait from './StudentPortrait';
import logo from '../../../../../public/yarb.png';

export default {
  title: 'Design System/Atoms/Student Portrait',
  component: StudentPortrait,
};

export const Default = (args) => <StudentPortrait {...args} />;
Default.storyName = 'Student Portrait';
Default.args = {
  url: logo,
}
