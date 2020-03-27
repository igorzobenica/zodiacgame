// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import font from './extensions/font';

const background = 'transparent';

const TextInput = styled.input`
  ${font('normal', '2rem')};
  background: ${background};
  width: 100%;
  border: none;
  border-radius: 0.25rem;
  padding: 0 calc(1rem - 1px);
  resize: none;

  &:focus {
    position: relative;
    z-index: 100;
    outline: none;
  }

  &::placeholder {
    font-style: italic;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

TextInput.defaultProps = {
  type: 'text',
};

TextInput.propTypes = {
  variant: PropTypes.oneOf(['SUCCESS', 'FAILURE']),
  type: PropTypes.oneOf(['email', 'number', 'password', 'search', 'tel', 'text']),
};

export default TextInput;
