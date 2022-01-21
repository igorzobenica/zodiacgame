import styled from 'styled-components';
import font from './extensions/font';

const spacing100 = '1rem'
const spacing150 = '1.5rem'
const spacing162 = '1.625rem'
const spacing200 = '2rem'
const spacing225 = '2.25rem'
const spacing250 = '2.55rem'
const spacing450 = '4.5rem'
const colorLight = '#eeeeee'
const colorDark = '#cccccc'

const Typo = {
  H1: styled.h1`
    ${font('bold', spacing250)};
    line-height: 1.25;
    &:first-child {
      margin-top: 0;
    }
  `,
  H2: styled.h2`
    ${font('bold', spacing200)};
    line-height: 1.25;
    &:first-child {
      margin-top: 0;
    }
  `,
  H3: styled.h3`
    ${font('bold', spacing162)};
    line-height: 1.25;
    &:first-child {
      margin-top: 0;
    }
  `,
  H4: styled.h4`
    ${font(600, spacing150, undefined, 1.5)};
    &:first-child {
      margin-top: 0;
    }
  `,
  P: styled.p`
    ${font()};
    line-height: 1.25;
    margin-top: 0;
    white-space: pre-wrap;
    margin-bottom: ${({ noMargin }) => (noMargin ? '0' : spacing100)};
    text-align: ${({ textAlign }) => textAlign};
    text-decoration: ${({ textDecoration }) => textDecoration};
    &:last-child {
      margin-bottom: 0;
    }
  `,
  number: styled.span`
    ${font('bold', spacing225)};
    line-height: 1.25;
    color: ${colorDark};
  `,
  bigNumber: styled.span`
    ${font('normal', spacing450)};
    line-height: 1.25;
  `,
  strong: styled.strong`
    ${font(600)};
  `,
  light: styled.span`
    ${font()};
    color: ${colorLight};
  `,
  screenReaderOnly: styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
};

Typo.defaultProps = {
  textAlign: 'left',
  textDecoration: 'none',
  theme: {
    tokens: {
      SPACING_100: '1rem',
      SPACING_112: '1.125rem',
      SPACING_150: '1.5rem',
      SPACING_200: '2rem',
      SPACING_225: '2.25rem',
      SPACING_450: '4.5rem',
    },
  },
};

export default Typo;
