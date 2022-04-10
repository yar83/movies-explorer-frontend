import '../src/shared/styles/fonts.css';
import '../src/shared/styles/global.css';
import '../src/shared/styles/palette.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'movies',
    values: [
      {
        name: 'movies',
        value: '#202020',
      },
    ],
  },
}
