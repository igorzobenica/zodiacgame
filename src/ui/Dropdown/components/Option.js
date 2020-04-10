import { components } from 'react-select';
import styled, { css } from 'styled-components';
import font from '../../../ui/extensions/font';
import { Page1Background as image } from "../../Background";
const Option = styled(components.Option)`
  && {
    ${font()};
    color: #000;
    cursor: pointer;
    padding: 0.5rem 1rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    border-radius: 0.125rem;
    background-image: url(${image});
    background-size: fill;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-color: ${props => (props.isFocused ? '#00000037' : '#00000017')};
    font-weight: ${props => (props.isDisabled ? 'bold' : 'inherit')};
    ${props => (props.isFocused &&
    css`
      -webkit-filter: brightness(70%);
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      -ms-transition: all 0.4s ease;
      transition: all 0.4s ease;
    `)};
    &:active {
      background-color: #00000037;
    }
  }
`;

export default Option;
