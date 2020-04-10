import { components } from 'react-select';
import styled from 'styled-components';
import font from '../../../ui/extensions/font';

const boxShadow = 'none';
const borderColor = '#00000000';
const disabledColor = '#000000aa';
const focusColor = '#00000000';

const SelectContainer = styled(components.SelectContainer)`
  && {
    ${font('normal')};
    display: inline-block;
    width: ${props => props.selectProps.width};
    min-width: ${props => props.selectProps.minWidth};
    max-width: ${props => props.selectProps.maxWidth};
    vertical-align: top;
    box-shadow: ${props => (props.selectProps.shadow ? boxShadow : 'none')};
    border-style: solid;
    border-width: 1px;
    border-color: ${props =>
      props.isFocused ? focusColor : props.isDisabled ? disabledColor : borderColor};
    border-radius: 0.25rem;
    overflow: hidden;

    li {
      margin-bottom: auto;
    }

    input {
      ${font('normal')};
    }
  }
`;

export default SelectContainer;
