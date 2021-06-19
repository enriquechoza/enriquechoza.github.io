import { css } from 'styled-components';

import RobotoBold from '@fonts/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '@fonts/Roboto/Roboto-BoldItalic.ttf';
import RobotoItalic from '@fonts/Roboto/Roboto-Italic.ttf';
import RobotoMedium from '@fonts/Roboto/Roboto-Medium.ttf';
import RobotoMediumItalic from '@fonts/Roboto/Roboto-MediumItalic.ttf';
import RobotoRegular from '@fonts/Roboto/Roboto-Regular.ttf';

import RobotoMonoSemiBold from '@fonts/RobotoMono/RobotoMono-SemiBold.ttf';
import RobotoMonoLight from '@fonts/RobotoMono/RobotoMono-Light.ttf';
import RobotoMonoMedium from '@fonts/RobotoMono/RobotoMono-Medium.ttf';
import RobotoMonoRegular from '@fonts/RobotoMono/RobotoMono-Regular.ttf';

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

const Fonts = css`
  ${robotoNormal + robotoItalic + robotoMonoNormal}
`;

export default Fonts;
