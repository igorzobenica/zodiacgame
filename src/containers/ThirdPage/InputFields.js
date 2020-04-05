import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import InputFieldWithButton from '../../components/InputFieldWithButton';
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";

const InputFieldsWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: ${MEDIA_SMALL}px) {
    width: 70%;
  }

  > div {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const maxLength = 20;
const inputFieldsData = [
  {
    id: 1,
    label: 'what color are my gloves?',
    placeholder: 'write your answer',
  },
  {
    id: 2,
    label: 'what’s the number on the girl’s necklace?',
    placeholder: 'write your answer',
  },
  {
    id: 3,
    label: 'what’s the color of the desk lamp?',
    placeholder: 'write your answer',
  },
];

const InputFields = ({
  validationErrors,
  inputValues,
  setInputValues,
  setValidationErrors,
  isCorrect,
  onEnter
}) => {
  return (
    <InputFieldsWrapper>
      {inputFieldsData.map(({
        id,
        label,
        placeholder,
      }) => (
        <div key={id}>
          <InputFieldWithButton
            label={label}
            placeholder={placeholder}
            maxLength={maxLength}
            isCorrect={isCorrect}
            inputValue={inputValues[id]}
            setInputValue={setInputValues[id]}
            setValidationError={setValidationErrors[id]}
            validationError={validationErrors[id]}
            onEnter={onEnter}
          />
        </div>
      ))}
    </InputFieldsWrapper>
  )
}

InputFields.propTypes = {
  validationErrors: PropTypes.object,
  inputValues: PropTypes.object,
  setInputValues: PropTypes.object,
  isCorrect: PropTypes.bool,
}

export default InputFields
