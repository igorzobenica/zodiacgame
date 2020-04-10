import { components } from 'react-select';
import styled from 'styled-components';

const backgroundColor = 'transparent';
const borderColor = '#00000037';
const disabledColor = '#00000017';
const focusColor = '#00000000';
const textColor = '#000000';

const Control = styled(components.Control)`
  && {
    /* maybe we should move backgroundColor to SelectContainer */
    background-color: ${backgroundColor};
    border: none;
    box-shadow: none;

    svg {
      /* for the indicators but here to */
      color: ${props => (props.isDisabled ? disabledColor : borderColor)};
    }

    &:hover {
      background-color: ${focusColor};
      svg {
        color: ${textColor};
      }
    }
    cursor: pointer;
  }
`;

export default Control;
