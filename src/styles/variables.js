import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-gray: #322f2f;
    --gray: #646464;
    --light-gray: #c2c2c2;
    --light-salmon: #f3f3f3;
    --accent-orange: #f26419;
    --white: #e6f1ff;
    --light-slate: #ccd6f6;

    --font-sans: 'Calibre', -apple-system, system-ui, sans-serif;
    --font-mono: 'Roboto Mono', 'Fira Code', monospace;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export { variables };
