import { injectGlobal } from 'styled-components';
import { css } from 'styled-components'

const sizes = {
  small: 576,
  medium: 768,
  large: 992,
  extra: 1200
}

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
	return acc
}, {})

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: 'Avenir Next',
    src: url(require('containers/HomePage/assets/fonts/AvenirNext-Regular'))
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Avenir Next', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export {media};
