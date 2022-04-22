import React from 'react';
import SearchForm from './SearchForm';

export default {
  title: 'Design System/Molecules/Search Form',
  component: SearchForm,
};

export const Default = () => <SearchForm />;
Default.storyName = 'Search Form';
Default.parameters = {
  layout: 'centered',
};
