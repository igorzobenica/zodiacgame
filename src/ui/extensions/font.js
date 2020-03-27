import { css } from 'styled-components';

const defaultFont = 'Silka, Zipher, Spooky, sans-serif';
const defaultSize = '1.5rem';
const defaultColor = '#000000';

export default (weight = 'normal', size, family, height) => props => css`
  font-family: ${family || defaultFont};
  font-weight: ${weight};
  font-size: ${size || defaultSize};
  line-height: ${height || '1.75'};
  color: ${props.color || defaultColor};
`;
