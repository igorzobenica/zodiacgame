import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import font from './extensions/font';

const color = '#000';
const colorDisabled = '#aaaaaa';

const backgroundColor = '#000'
const backgroundColorHover = '#777'

const focusBorderDefault = '#333'
const focusShadowDefault = '#111'
const focusShadowFailure = '#222'
const focusShadowPrimary = '#ddd'

const Button = styled.button`
  ${font('normal', '2.25rem')};
  background: none;
  border: none;
  box-shadow: none;
  color: ${backgroundColor}
  padding: 0;
  text-decoration: none;

  &:hover {
    color: ${backgroundColorHover};
    transition: all .15s ease;
  }

  cursor: pointer;
  min-width: 2.75rem;

  &:focus {
    z-index: 1;
    outline: none;
    ${({ variant }) =>
      (!variant || variant === 'default' || variant === 'animated') &&
      css`
        border-color: ${focusBorderDefault};
        box-shadow: ${focusShadowDefault};
      `}

    ${({ variant }) =>
      variant === 'primary' &&
      css`
        box-shadow: ${focusShadowPrimary};
      `}

    ${({ variant }) =>
      variant === 'secondary' &&
      css`
        box-shadow: ${focusShadowDefault};
      `}

    ${({ variant }) =>
      variant === 'danger' &&
      css`
        box-shadow: ${focusShadowFailure};
      `}
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colorDisabled};
  }

  & > i svg > * {
    stroke: ${color};
  }
`;

Button.defaultProps = {
  theme: {
    Button: {
      color: 'white',
      borderColor: 'gray',
      borderColorHover: 'green',
      borderColorDisabled: 'red',
      backgroundColor: 'gray',
      backgroundColorHover: 'green',
      backgroundColorDisabled: 'red',
    },
    tokens: {},
  },
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'animated']),
};

Button.displayName = 'Button';

export default Button;
