import '../src/utils/styles/fonts.css';
import '../src/utils/styles/global.css';
import '../src/utils/styles/palette.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
