import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import {Input} from '../../ui'

const CharInputFieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    max-width: 5rem;
    margin: 0 1rem;
  }
`;

const StyledInput = styled(Input)`
  text-align: center;
  padding: 0;
`;

const maxLength = 1;

const refs = {
  '0': React.createRef(),
  '1': React.createRef(),
  '2': React.createRef(),
}

const CharInputFields = ({
  inputValues,
  setInputValue,
  validationError,
  setValidationError,
  onEnter,
}) => {
  
  const focusNextField = (nextField) => {
    if (refs[nextField]) {
      if ( refs[nextField].current) {
        refs[nextField].current.focus();
      }
    }
  };
  const onChange = (index, e) => {
    if (setValidationError) {
      setValidationError('');
    }
    const { value } = e.target;
    const newValue = [...inputValues];
    newValue[index] = value;
    setInputValue(newValue.toString().replace(/,/g, ''));
    switch (index) {
      case 0:
        if (value) focusNextField(index+1)
        return;
      case 1:
        if (value) focusNextField(index+1)
        else focusNextField(index-1)
        return;
      case 2:
        if (value) return;
        focusNextField(index-1);
        return;
      default:
        return;
    };
  };
  return (
    <CharInputFieldsWrapper>
      {inputValues.map((char, index) => (
        <div key={index}>
          <StyledInput
            type="text"
            placeholder="?"
            value={inputValues[index]}
            ref={refs[index]}
            maxLength={maxLength}
            onChange={(e) => onChange(index, e)}
            error={!!validationError}
            message={index === 1 ? validationError : ""}
            onEnter={onEnter}
          />
        </div>
      ))}
    </CharInputFieldsWrapper>
  )
}

CharInputFields.propTypes = {
  inputValues: PropTypes.array,
  setInputValue: PropTypes.func,
}

export default CharInputFields
