import { css } from 'styled-components';

import RobotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '../assets/fonts/Roboto/Roboto-BoldItalic.ttf';
import RobotoItalic from '../assets/fonts/Roboto/Roboto-Italic.ttf';
import RobotoMedium from '../assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoMediumItalic from '../assets/fonts/Roboto/Roboto-MediumItalic.ttf';
import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf';

import RobotoMonoSemiBold from '../assets/fonts/RobotoMono/RobotoMono-SemiBold.ttf';
import RobotoMonoLight from '../assets/fonts/RobotoMono/RobotoMono-Light.ttf';
import RobotoMonoMedium from '../assets/fonts/RobotoMono/RobotoMono-Medium.ttf';
import RobotoMonoRegular from '../assets/fonts/RobotoMono/RobotoMono-Regular.ttf';

const robotoNormalWeights = {
  400: RobotoRegular,
  500: RobotoMedium,
  600: RobotoBold,
}

const robotoItalicWeights = {
  400: RobotoItalic,
  500: RobotoMediumItalic,
  600: RobotoBoldItalic,
}

const robotoMonoWeights = {
  300: RobotoMonoLight,
  400: RobotoMonoRegular,
  500: RobotoMonoMedium,
  600: RobotoMonoSemiBold,
}

const roboto = {
  name: 'Roboto',
  normal: robotoNormalWeights,
  italic: robotoItalicWeights,
};

const robotoMono = {
  name: 'Roboto Mono',
  normal: robotoMonoWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, format] of Object.entries(family[style])) {
    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${format}) format('ttf'),
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const robotoNormal = createFontFaces(roboto);
const robotoItalic = createFontFaces(roboto, 'italic');

const robotoMonoNormal = createFontFaces(robotoMono);

const fonts = css`
  ${robotoNormal + robotoItalic + robotoMonoNormal}
`;

export { fonts };
